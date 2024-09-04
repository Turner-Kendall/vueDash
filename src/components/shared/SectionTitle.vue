<template>
	<article class="text-center pb-3">
		<h2>{{ heading.title }}</h2>
		<h3 v-if="heading.subtitle">{{ heading.subtitle }}</h3>
		<img v-if="heading.image" :src="heading.image" :alt="heading.subtitle" class="img-fluid">
		<div v-if="heading.intro" class="mb-5">{{ heading.intro }}</div>
	</article>
</template>
    
<script setup>
const props = defineProps({
	heading: {
		type: Object,
		required: true,
	},
})
</script>

<style scoped>
h2{
	font-size: 2.75rem;
	margin: 0 3rem;
	color: #7d7d7d;
  border-bottom: 3px solid #e8e8e8;
	margin-bottom: 1.3rem;
}
.dark h2{
	color: #353535;
  border-bottom: 3px solid #31313130;
}

</style>