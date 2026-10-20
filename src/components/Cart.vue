<script setup>
import { computed } from 'vue'

const props = defineProps({
    items: { type: Array, required: true },
    loading: { type: Boolean, default: false },
    error: { type: String, default: '' },
})


const total = computed(() =>
  props.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
)

const formatPrice = (value) =>
    new Intl.NumberFormat('sk-SK', {
        style: 'currency',
        currency: 'EUR',
        maximumFractionDigits: 0,
    }).format(value)

    const emit = defineEmits(['submit', 'remove'])
</script>

<template>
    <section
        class="flex flex-col gap-6 rounded-xl border-2 border-neutral-700 bg-white px-6 py-5 sm:flex-row sm:items-start"
        aria-label="Košík">
        <div class="sm:w-80 sm:border-r-2 sm:border-dashed sm:border-neutral-400 sm:pr-14">
        <h2 class="mb-3 text-lg font-bold text-neutral-800">Košík</h2>
        <ul class="space-y-2">
            <li
            v-for="item in items"
            :key="item.productId"
            class="grid grid-cols-[1fr_3rem_1.5rem] items-center gap-4 text-sm text-neutral-800"
            >
            <span>{{ item.name }}</span>
            <span class="text-right whitespace-nowrap">{{ item.quantity }} ks</span>
            <button type="button" class="text-red-600" @click="emit('remove', item.productId)">✕</button>
            </li>
        </ul>
        </div>

        <div class="sm:pt-5">
        <p class="text-xs text-neutral-500">Celková cena</p>
        <p class="mt-1 text-2xl font-bold text-neutral-800">{{ formatPrice(total) }}</p>
        </div>

        <div class="flex flex-col items-stretch gap-3 sm:ml-auto sm:w-[27rem] sm:items-end">
        <button
            type="button"
            class="rounded-lg border-2 border-neutral-700 bg-[#F07A5F] px-6 py-3 text-sm font-bold text-white transition hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-800 disabled:cursor-not-allowed disabled:opacity-60 sm:w-56"
            :disabled="loading"
            :aria-busy="loading"
            @click="emit('submit')"
        >
            {{ loading ? 'Odosielam…' : 'Odoslať objednávku' }}
        </button>

        <p
            v-if="error"
            role="alert"
            class="w-full rounded-lg border-2 border-red-400 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700"
        >
            {{ error }}
        </p>
        </div>
    </section>
</template>