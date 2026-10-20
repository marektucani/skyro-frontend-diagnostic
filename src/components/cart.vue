<template>
    <div class="border-2 rounded-lg">
        <div class="p-5 flex gap-[40px]">
            <div class="flex flex-col gap-[10px] w-[280px]">
                <h1 class="text-[18px] font-bold">Kosik</h1>
                <div  v-for="item in cartItems" :key="item.id" class="flex justify-between">
                    <p>{{ item.product.name }}</p>
                    <p>{{ item.quantity }} ks</p>
                    <button class="text-red-500 font-semibold" @click="removeItem">X</button>
                </div>
            </div>

            <div class="border border-dashed opacity-50"></div>

            <div class="flex flex-col gap-[5px]">
                <p class="text-[12px] opacity-50">Celkova cena</p>
                <p class="text-[24px] font-bold">917 €</p>
            </div>

            <div class="flex items-center justify-end flex-1">

                <button class="bg-[#E07B65] text-white font-bold rounded-lg border-2 py-2 w-[200px] h-[70px]" @click="removeItem">Odoslat objednávku</button>
            </div>


        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    cartItems: Array,
})

const emit = defineEmits('remove-item')

const removeItem = (id) => {
    emit('remove-item', id)
}

</script>