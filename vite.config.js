import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

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
<<<<<<< Updated upstream
  plugins: [vue(), cartApiMock()],
=======
  plugins: [vue(), mockApi(), tailwindcss(), cartApiMock()],
>>>>>>> Stashed changes
})


