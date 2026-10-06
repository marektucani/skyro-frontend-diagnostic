
<template>
<div class="w-full h-40 border-black border-3 rounded-2xl p-5">
	<div class="flex justify-between">
		<div class="flex gap-8 w-full">
			<div class="border-r-2 border-black border-dashed border-gray-500 w-[33%] pr-10">
				<p class="font-bold">Košík</p>
				<div v-for="content in contents" class="flex justify-between">
					<p class="text-[13px] font-medium">{{ content.name }}</p>
					<div class="flex gap-3 items-center">
						<p class="text-[13px] font-medium">{{ content.quantity }}</p>
						<p class="text-[15px] font-semibold select-none" @click="remove(content.id)">x</p>
					</div>
				</div>
			</div>
			<div>
				<p class="text-[13px] font-medium text-gray-500">Celková cena</p>
				<p class="font-bold text-[20px]">{{ totalPrice }}€</p>
			</div>
		</div>
		<div class="flex flex-col gap-1 items-end w-[30%]">
			<div class="rounded-xl  h-13 w-full border-black border-3 bg-[#ef775e] p-3 font-semibold justify-center items-center flex">
				<p class="text-white text-[15px] px-10" @click="consolelog()">Odoslať objednávku</p>
			</div>
			<p v-if="sending" class="text-[14px] font-medium text-gray-700">Odosielam...</p>
			<div v-if="error" class="rounded-xl h-13 w-full border-[#ef775e] border-3 bg-[#fff0ec] p-3 font-semibold justify-center items-center flex">
				<p class="text-[#ef775e] text-[15px] px-2">Košík je momentálne nedostupný.</p>
			</div>
		</div>
	</div>

</div>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps({
	contents: {
		type: Array,
		required: true,
	},
})
	
const totalPrice = computed(() => {
	// return props.contents.reduce((sum, item) => sum + (item.price * item.quantity), 0)
	const length = props.contents.length
	let total = 0

	for (let i = 0; i < length; i++){
	
		const linePrice = props.contents[i].quantity * props.contents[i].price
	
		total = total + linePrice	
	}
	return total
})

function remove(idParam){

	const updated = props.contents.filter(checkId)

	function checkId(item){
		return item.id != idParam
	}
	console.log(updated)
	props.contents = updated
}





const error = false
const sending = false

</script>

<style scoped>

</style>
