export { vike }

import type { RequestHandler } from '@hattip/compose'
import { createHandler } from './handler.js'
import type { VikeOptions } from './types.js'
import { IncomingMessage, ServerResponse } from 'http'

function vike(options?: VikeOptions): RequestHandler {
  const handler = createHandler<Request>(options)
  return async function middleware(ctx) {
    const { request, response } = ctx.platform as { request: IncomingMessage; response: ServerResponse }
    const handled = await handler({
      req: request,
      res: response,
      platformRequest: ctx.request
    })
    if (handled) {
      response.writeHead = (() => {}) as any
      response.write = (() => {}) as any
      return new Response()
    }
  }
}