<template>
  <main class="app-shell">
    <div class="flex flex-col gap-[20px] m-5">
      <Cart
        :cartItems="cart"
        @remove-item="removeItem"
      ></Cart>
      <div class="flex align-center gap-[30px]">
        <ProductCard 
          v-for="item in products"
          :key="item.id"
          :product="item"
          @add-to-cart="addCart"
        />
      </div>
    </div>
  </main>
</template>

<script setup>
import ProductCard from './components/ProductCard.vue'
import Cart from './components/cart.vue'
import { products } from './data/products.js'
import { ref } from 'vue'

const cart = ref([])

const addCart = ({id, product, quantity}) => {
  const existingItem = cart.value.find(cartItem => cartItem.id === id)
  if (existingItem) {
    existingItem.quantity = quantity + existingItem.quantity
  } else {
    cart.value.push({ id, product, quantity })
  }
}

const removeItem = () => {
  cart.value.filter((cartItem) => cartItem.id === id)
}

</script>
