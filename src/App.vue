<script setup>
import { ref, computed } from 'vue'
import ProductCard from './components/ProductCard.vue'
import Cart from './components/Cart.vue'
import { products } from './data/products.js'

const cart = ref({})

const cartItems = computed(() =>
  products
    .filter((p) => cart.value[p.id])
    .map((p) => ({
      productId: p.id,
      name: p.name,
      price: p.price,
      quantity: cart.value[p.id],
    }))
)

function addToCart({ productId, quantity }) {
  cart.value[productId] = (cart.value[productId] ?? 0) + quantity

}
function removeFromCart(productId) {
delete cart.value[productId]
}

const isSubmitting = ref(false)
const submitError = ref('')

async function submitOrder() {
  if (isSubmitting.value) return
  isSubmitting.value = true
  submitError.value = ''

  try {
    const res = await fetch('/api/cart', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        items: cartItems.value.map(({ productId, quantity }) => ({ productId, quantity })),
      }),
    })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
  } catch {
    submitError.value = 'Objednávku sa nepodarilo odoslať. Skúste to znova.'
  } finally {
    isSubmitting.value = false
  }
}

</script>

<template>
  <main class="app-shell">
    <div class="mx-auto max-w-5xl space-y-8">
      <Cart
        v-if="cartItems.length"
        :items="cartItems"
        :loading="isSubmitting"
        :error="submitError"
        @submit="submitOrder"
        @remove="removeFromCart"
      />

      <div class="flex flex-wrap justify-center gap-6">
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
          @add="addToCart"
        />
      </div>
    </div>
  </main>
</template>