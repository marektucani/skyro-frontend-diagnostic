import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const MOCK_API_DELAY = 2000

function cartApiMock() {
  return {
    name: 'cart-api-mock',
    configureServer(server) {
      server.middlewares.use('/api/cart', async (request, response, next) => {
        if (request.method !== 'POST') {
          response.statusCode = 405
          response.setHeader('Content-Type', 'application/json')
          response.end(JSON.stringify({ message: 'Method Not Allowed' }))
          return
        }

        let requestBody = ''

        request.on('data', (chunk) => {
          requestBody += chunk
        })

        request.on('end', async () => {
          await new Promise((resolve) => setTimeout(resolve, MOCK_API_DELAY))

          // The body is intentionally read so the endpoint behaves like a real API.
          // The request is still designed to fail so students can implement error handling.
          void requestBody

          response.statusCode = 500
          response.setHeader('Content-Type', 'application/json')
          response.end(
            JSON.stringify({
              message: 'Košík je momentálne nedostupný.',
            }),
          )
        })

        request.on('error', next)
      })
    },
  }
}

export default defineConfig({
  plugins: [vue(), cartApiMock()],
})
