import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const MOCK_API_DELAY = 2000

function sendJson(response, statusCode, body) {
  response.statusCode = statusCode
  response.setHeader('Content-Type', 'application/json')
  response.end(JSON.stringify(body))
}

function readRequestBody(request) {
  return new Promise((resolve, reject) => {
    let requestBody = ''

    request.on('data', (chunk) => {
      requestBody += chunk
    })

    request.on('end', () => {
      try {
        resolve(requestBody ? JSON.parse(requestBody) : {})
      } catch {
        reject(new Error('Invalid JSON body'))
      }
    })

    request.on('error', reject)
  })
}

function mockApi() {
  return {
    name: 'mock-api',
    configureServer(server) {
      server.middlewares.use('/api/cart', async (request, response, next) => {
        if (request.method !== 'POST') {
          sendJson(response, 405, { message: 'Method Not Allowed' })
          return
        }

        try {
          await readRequestBody(request)
          await new Promise((resolve) => setTimeout(resolve, MOCK_API_DELAY))
          sendJson(response, 500, { message: 'Košík je momentálne nedostupný.' })
        } catch (error) {
          next(error)
        }
      })

      server.middlewares.use('/api/orders', async (request, response, next) => {
        if (request.method !== 'POST') {
          sendJson(response, 405, { message: 'Method Not Allowed' })
          return
        }

        try {
          const body = await readRequestBody(request)
          const hasItems = Array.isArray(body.items) && body.items.length > 0

          if (!hasItems) {
            sendJson(response, 400, { message: 'Objednávka musí obsahovať aspoň jednu položku.' })
            return
          }

          await new Promise((resolve) => setTimeout(resolve, 800))
          sendJson(response, 201, {
            orderId: 'mock-order-001',
            message: 'Objednávka bola úspešne odoslaná.',
          })
        } catch (error) {
          next(error)
        }
      })
    },
  }
}

export default defineConfig({
  plugins: [vue(), mockApi()],
})
