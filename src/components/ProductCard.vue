<script setup>
import { ref } from 'vue'

const props = defineProps({
    product: {
        type: Object,
        required: true,
    },
})

const emit = defineEmits(['add'])

const MIN_QUANTITY = 1
const MAX_QUANTITY = 9

const quantity = ref(MIN_QUANTITY)

function increment() {
    if (quantity.value < MAX_QUANTITY) {
        quantity.value++
    }
}

function decrement() {
    if (quantity.value > MIN_QUANTITY) {
        quantity.value--
    }
}

function addToCart() {
    emit('add', { productId: props.product.id, quantity: quantity.value })
}

const isFavourite = ref(false)

function toggleFavourite() {
    if (isFavourite.value === true) {
        isFavourite.value = false
    } else {
        isFavourite.value = true
    }
}
</script>

<template>
    <article class="mx-auto w-full max-w-[320px] overflow-hidden rounded-2xl bg-white">

        
        <div class="relative border-b-2">
            <img :src="product.image" :alt="product.name" class="aspect-square bg-neutral-200/70 " />
            <button type="button" :aria-pressed="isFavourite" aria-label="Pridať medzi obľúbené" @click="toggleFavourite" class="absolute bg-white rounded-full right-4 top-4 flex h-10 w-10 items-center justify-center" :class="isFavourite ? 'text-red-500' : 'text-neutral-600'">{{ isFavourite ? '♥' : '♡' }}</button>
        </div>

        <div class="p-3">
            <div class="flex items-center justify-between">
                <span class="text-xs uppercase text-neutral-500">{{ product.category }}</span>
                <span v-if="product.inStock === true" class="text-sm text-emerald-600">● Skladom</span>
                <span v-if="product.inStock === false" class="text-sm text-red-900">● Nie je skladom</span>
            </div>

            <h2 class="mt-2 text-xl font-bold">{{ product.name }}</h2>

            <div class="mt-4 flex items-baseline gap-2">
                <span class="text-2xl font-bold text-slate-900">{{ product.price }} {{ product.currency }}</span>
                <span v-if="product.originalPrice" class="text-sm text-neutral-400 line-through">
                {{ product.originalPrice }} {{ product.currency }}
                </span>
            </div>
        </div>

        <div class="p-3 flex items-center gap-3 border-t border-dashed border-neutral-200 pt-5">
            <div class="flex items-center rounded-lg ring-1">
                <button type="button" class="px-3 py-2 text-neutral-500" :disabled="quantity <= MIN_QUANTITY" @click="decrement">-</button>
                <span class="text-center text-sm">{{ quantity }}</span>
                <button type="button" class="px-3 py-2 text-neutral-500" :disabled="quantity >= MAX_QUANTITY" @click="increment">+</button>
            </div>
            <button type="button" class="flex-1 rounded-lg bg-[#e0654a] py-2 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50" :disabled="product.inStock === false" @click="addToCart">Pridať do košíka ({{ quantity }})</button>
        </div>
    </article>
</template>

<style scoped>
/* zatiaľ prázdne, štýly doplníme neskôr */
</style>