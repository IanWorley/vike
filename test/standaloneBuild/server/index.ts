import express from 'express'
import { telefunc } from 'telefunc'
import { renderAsset, renderPage } from 'vike/server'
import { Worker } from 'worker_threads'
import { init } from '../database/todoItems'
import { root } from './root'
import { two } from './shared-chunk.js'

if (two() !== 2) {
  throw new Error()
}

startServer()
new Worker(new URL('./worker.mjs', import.meta.url))

async function startServer() {
  await init()
  const app = express()
  if (import.meta.env.PROD) {
    app.use(express.static(`${root}/client`))
  } else {
    app.get('*', async (req, res, next) => {
      const httpResponse = await renderAsset({
        url: req.originalUrl,
        headers: req.headers
      })
      if (!httpResponse) {
        return next()
      }
      const { body, statusCode, headers } = httpResponse
      headers.forEach(([name, value]) => res.setHeader(name, value))
      res.status(statusCode).send(body)
    })
  }

  app.use(express.text()) // Parse & make HTTP request body available at `req.body`
  app.all('/_telefunc', async (req, res) => {
    const context = {}
    const httpResponse = await telefunc({ url: req.originalUrl, method: req.method, body: req.body, context })
    const { body, statusCode, contentType } = httpResponse
    res.status(statusCode).type(contentType).send(body)
  })

  app.get('*', async (req, res, next) => {
    // Caught as well
    // foo;

    const pageContextInit = {
      urlOriginal: req.originalUrl
    }
    const pageContext = await renderPage(pageContextInit)
    const { httpResponse } = pageContext
    if (!httpResponse) {
      return next()
    } else {
      const { statusCode, headers } = httpResponse
      headers.forEach(([name, value]) => res.setHeader(name, value))
      res.status(statusCode)
      httpResponse.pipe(res)
    }
  })

  const port = process.env.PORT || 3000
  app.listen(port)
  console.log(`Server running at http://localhost:${port}`)
}
