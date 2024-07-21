import { createServer } from 'http'
import type { Plugin, ViteDevServer } from 'vite'
import { globalStore } from '../../../runtime/globalStore.js'
import type { ConfigVikeNodeResolved } from '../../../types.js'
import { assert } from '../../../utils/assert.js'
import { getConfigVikeNode } from '../../utils/getConfigVikeNode.js'
import { logViteInfo } from '../../utils/logVite.js'
import { bindCLIShortcuts } from './shortcuts.js'

let viteDevServer: ViteDevServer

export function devServerPlugin(): Plugin {
  let resolvedConfig: ConfigVikeNodeResolved
  let entryAbs: string
  const hmrServer = createServer()
  const hmrPath = '/__vite_hmr'
  return {
    name: 'vite-node:devserver',
    apply: 'serve',
    enforce: 'post',

    config: () => ({
      server: {
        middlewareMode: true,
        hmr: {
          server: hmrServer,
          path: hmrPath
        }
      }
    }),

    configResolved(config) {
      resolvedConfig = getConfigVikeNode(config)
    },

    handleHotUpdate(ctx) {
      if (isImported(ctx.file)) {
        restartProcess()
      }
    },

    configureServer(vite) {
      if (viteDevServer) {
        restartProcess()
        return
      }

      viteDevServer = vite
      globalStore.viteDevServer = vite

      setupHMRMiddleware(vite)
      patchViteServer(vite)
      initializeServerEntry(vite)
    }
  }

  function isImported(id: string): boolean {
    const moduleNode = viteDevServer.moduleGraph.getModuleById(id)
    if (!moduleNode) {
      return false
    }
    const modules = new Set([moduleNode])
    for (const module of modules) {
      if (module.file === entryAbs) return true
      module.importers.forEach((importer) => modules.add(importer))
    }

    return false
  }

  function setupHMRMiddleware(vite: ViteDevServer) {
    vite.middlewares.use((req, _res, next) => {
      if (req.url === hmrPath && req.headers['connection']?.toLowerCase() === 'upgrade') {
        hmrServer.emit('upgrade', req, req.socket, Buffer.from(''))
      } else {
        next()
      }
    })
  }

  function patchViteServer(vite: ViteDevServer) {
    vite.httpServer = true as any
    vite.listen = (() => {}) as any
    vite.printUrls = () => {}
    vite.bindCLIShortcuts = () => bindCLIShortcuts({ onRestart: restartProcess })
  }

  async function initializeServerEntry(vite: ViteDevServer) {
    assert(resolvedConfig.server)
    const index = resolvedConfig.server.entry.index
    const indexResolved = await vite.pluginContainer.resolveId(index)
    assert(indexResolved?.id)
    entryAbs = indexResolved.id
    vite.ssrLoadModule(entryAbs)
  }
}

function restartProcess() {
  logViteInfo('Restarting server...')
  process.exit(33)
}