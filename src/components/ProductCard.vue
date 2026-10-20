<template>
  <!-- TODO: Implementuj produktovú kartu podľa referenčného obrázka. -->
  <div class="border-3 w-fit rounded-lg pb-[50px]">
    <div class="p-5 bg-gray-300 relative rounded-[2px] border-2">
      <div 
        class="bg-gray-200 border rounded-full w-[30px] h-[30px] absolute right-[10px] top-[10px] flex justify-center items-center" 
        @click="changeFav"
        :class="fav === true ? 'bg-pink-300 border-pink-500' : 'bg-gray-200'"
      >
        <img :src="fav === true ? '/public/heart-red.svg' : '/public/heart-black.svg'" alt="" class="w-[15px] h-[15px]">
      </div>

      <img :src="product.image" alt="" class="w-[200px] h-[200px]">
    </div>

    <div class="px-5 flex flex-col gap-[8px]">
      <div class="mt-[10px] flex items-center justify-between">
        <p class="uppercase text-[10px] font-semibold">{{ product.category }}</p>

        <div class="flex items-center gap-[5px]">
          <img :src="product.inStock === true ? '/public/circle-green.svg' : '/public/circle-red.svg'" alt="" class="w-[7px] h-[7px]">
          <p class="text-[8px] font-semibold" :class="product.inStock === true ? 'text-[#009600]' : 'text-[#B30300]' ">Skladom</p>
        </div>
      </div>

      <h1 class="text-[16px] font-bold selection:bg-purple-500 selection:text-white">{{ product.name }}</h1>

      <div class="flex flex-col gap-[5px]">
        <div class="bg-gray-700 h-[2px] w-[90%] opacity-50"></div>
        <div class="bg-gray-700 h-[2px] w-[65%] opacity-50"></div>
      </div>

      <div class="flex items-baseline gap-[15px]">
        <p class="text-[16px] font-bold">{{ product.price }} {{ product.currency }}</p>
        <p class="opacity-50 text-[10px] opacity-50 line-through">{{ product.originalPrice }} {{ product.currency }}</p>
      </div>

      <div class="w-full border-dashed border-t-[2px] opacity-50"></div>

      <div class="flex gap-[5px] mt-[10px]">
        <div class="rounded-lg border-2 w-full flex flex-1 items-center justify-center justify-evenly">
          <button @click="down" class="select-none" :class="count > 1 ? '' : 'opacity-50' ">-</button>
          <p class="select-none">{{ count }}</p>
          <button @click="up" class="select-none" :class="count < 9 ? '' : 'opacity-50' ">+</button>
        </div>

        <button class="bg-[#D87416] rounded-lg border-2 flex-2" @click="addCart">
          <p class="text-white font-medium text-[12px] p-1 select-none">Pridat {{ count }}ks do kosika</p>
        </button>
      </div>
    </div>

  </div>

</template>

  <script setup>
  import { ref } from 'vue';
  // TODO: Implementuj produktovú kartu.
  const count = ref(1)
  const up = () => {
    if (count.value < 9) {
      count.value++
    }
  }
  const down = () => {
    if (count.value > 1) {
      count.value--
    }
  }

  const fav = ref(false)

  const changeFav = () => {
    if (fav.value === false) {
      fav.value = true
    } else {
      fav.value = false
    }
  }

  const props = defineProps ({
    product: Object,
  })

  const emit = defineEmits(['add-to-cart'])

  const addCart = () => {
    emit('add-to-cart', {
      id: props.product.id,
      product: props.product,
      quantity: count.value,
    })
  }
  </script>

<style scoped>
/* TODO: Doplň štýly produktovej karty. */

</style>
