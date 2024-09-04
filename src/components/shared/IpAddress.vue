<script setup>
import { ref, onMounted } from 'vue';
import { BIconHddNetworkFill } from "bootstrap-icons-vue";

const ipAddress = ref(null);
const apiUrl = 'https://api.ipify.org/?format=json';

onMounted(async () => {
	try {
		const response = await fetch(apiUrl);
		if (response.ok) {
			const data = await response.json();
			ipAddress.value = data;
		} else {
			console.error('Failed to fetch data:', response.statusText);
		}
	} catch (error) {
		console.error('Error fetching data:', error);
	}
});
</script>

<template>
	<section class="my-4" v-if="ipAddress">
		<BIconHddNetworkFill />	IP Address: {{ ipAddress }}
	</section>
</template>
