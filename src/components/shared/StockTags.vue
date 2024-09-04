<script setup>
import { ref, onMounted } from 'vue';
import { BIconCurrencyBitcoin } from "bootstrap-icons-vue";

const fetchData = ref(null);
const apiUrl = 'https://api.ipify.org/?format=json';

onMounted(async () => {
	try {
		const response = await fetch(apiUrl);
		if (response.ok) {
			
			// console.log(response)

			const data = await response.json();

			console.log(data)

			// fetchData = data;
	
		} else {
			console.error('Failed to fetch data:', response.statusText);
		}
	} catch (error) {
		console.error('Error fetching data:', error);
	}
});
</script>

<template>
	<section class="container my-4">
		<ul class="tags">
			<a :href="tag.link" v-for="tag in fetchData" :key="tag.id">
			<li :class="tag.cat" class="tag" >
				{{ tag.name }}({{ tag.count }})
			</li>
		</a>
		</ul>
	</section>
</template>

<style scoped>

ul{
  list-style-type: none!important;
  text-align: center!important; 
  padding: 0;
  margin: 0;
}

li.tag {
  display: inline-block!important;
	margin-right: 10px!important;
}

.tags{
	margin: 2rem 0 2rem 1rem;
}

.tag{
  color: #a8a8a8;
  padding: 4px 8px;
  text-align: center;
  border-radius: 5px;
	font-size: 13px;
	font-weight: 600;
	margin-top: .5rem;
	background-color: #fff;
	border: 1px solid #fff;
}
.tag:hover {
	color: #fff;
	background-color: #a6a9aa;
	border: 1px solid #a6a9aa;
}

.dark .tag{
	color: #ffffff;
	background-color: #212121;
	border: 1px solid #111111;
}

.dark .tag:hover{
  color: #fff;
	background-color: #080808;
	border: 1px solid #000;
}

</style>