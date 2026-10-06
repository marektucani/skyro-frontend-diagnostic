<script setup>
import { ref } from 'vue';
import ProductCard from './components/ProductCard.vue'
import ShoppingCart from './components/ShoppingCart.vue'

import { products } from './data/products.js';

const defaultProduct = {
  id: 4,
  category: 'Slúchadlá',
  name: 'testItem',
  description: 'Prémiové bezdrôtové slúchadlá s aktívnym potlačením hluku a výdržou batérie až 30 hodín.',
  price: 399,
  originalPrice: 449,
  currency: '€',
  inStock: true,
  image: '/product-headphones.png',
}

const inside = ref(true)
const contents = ref([])

function handleData(newItem) {
  // Find if the item already exists in the cart by matching IDs
  const existingIndex = contents.value.findIndex(item => item.id === newItem.id)

  if (existingIndex !== -1) {
    // Item exists: update quantity reactively
    contents.value[existingIndex].quantity += newItem.quantity
  } else {
    // Item is new: push a copy into the cart array
    contents.value.push({ ...newItem })
  }
omegaDevice()
}

function omegaDevice(){
  if (contents.value != null){
    inside.value = true
  }
}

</script>

<template>
  <main class="app-shell">
    <div class="p-5 flex flex-col gap-5">
      <ShoppingCart v-if="inside" :contents="contents"/>
      <div class="gap-4 flex">
        <ProductCard :product="product" v-for="product in products" :key="product.id" @addition="handleData"/>
      </div>
    </div>

  </main>
</template>
