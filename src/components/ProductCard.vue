
<template>
<div class="bg-white w-80 h-150 rounded-2xl relative border-3 border-black">
  <div class="w-full h-[40%] border-b-3 border-black bg-gray-200 rounded-t-2xl">
    <img src="../assets/product-headphones.png" class="object-contain size-full p-7">
    <div @click="toggleSwitch(product)" class="rounded-full size-11 right-2 top-2 absolute flex items-center justify-center" :class="toggle ? 'bg-white' : 'bg-red-300'">
      <img src="../assets/heart.png" class="object-contain size-full p-2">
    </div>
  </div>
  <div class="p-4">
    <div class="flex justify-between items-baseline">
      <p class="font-semibold text-[17px]">{{product.category}}</p>
      <div class="flex gap-2 items-center">
        <div class="bg-green-500 rounded-full size-3"></div>
        <p class="text-[12px] font-medium" v-if="product.inStock">Skladom</p>
        <p class="text-[12px] font-medium" v-else>Neni na sklade</p>

      </div>
    </div>
    <p class="mt-2 text-[22px] font-bold">{{ product.name }}</p>
    <div class="flex flex-col gap-3 mt-5">
      <div class="h-[2px] bg-black w-[90%]"></div>
      <div class="h-[2px] bg-black w-[78%]"></div>
    </div>
    <div class="mt-2 flex items-baseline gap-5">
      <p class="text-[22px] font-bold">{{ product.price }} {{ product.currency }}</p>
      <p class="text-[13px] font-bold text-gray-500">{{ product.originalPrice }} {{ product.currency }} </p>
    </div>
    <div class="mt-3 border-dashed border-t-3 border-gray-500 w-full h-2"></div>
    <div class="flex gap-2 mt-4">
      <div class="rounded-xl h-13 w-[55%] border-black border-3 bg-white p-3 flex justify-between font-semibold items-center">
        <p class="text-[20px] select-none" @click="lower()" >-</p>
        <p class="select-none">{{ quantity }}</p>
        <p class="text-[20px] select-none" @click="increase()">+</p>
      </div>
      <div @click="sendData" class="rounded-xl h-13 w-full border-black border-3 bg-[#ef775e] p-3 font-semibold justify-center items-center flex select-none">
        <p class="text-white text-[15px]">Pridať do {{ quantity }} ks košíka</p>
      </div>
    </div>
  </div>
</div>
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
})

const quantity = ref(1)
const toggle = ref(true)


  function lower(){
    if(quantity.value == 1){
      return
    }
    quantity.value--
    console.log(quantity.value)
  }

  function increase(){
    if(quantity.value == 9){
      return
    }
    quantity.value++
    console.log(quantity.value)
  }

  function toggleSwitch(){
    if(toggle.value == true){
      toggle.value = false
    }else {
      toggle.value = true
    }
  }

  const emit = defineEmits(['addition'])


  function sendData() {
    emit('addition', {
      ...props.product,
      quantity: quantity.value,
    })
  }

  </script>

<style scoped>
/* TODO: Doplň štýly produktovej karty. */
</style>
