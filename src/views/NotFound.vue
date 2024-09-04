<template>
	<section class="mt-5 pt-5 not-found">
		<div class="deets">
			404 PAGE NOT FOUND <br />
			{{ store.info.sitename }} {{ store.info.version }}
		</div>
	</section>
</template>

<script setup>
import { useTitle } from '@vueuse/core'
import { store } from '../store'
const title = useTitle("404 Page Not Found")
</script>

<style>
.not-found {
	background-image: url("/images/404.webp");
	background-repeat: none;
	background-size: 100%;
	min-height: 700px;
	padding: 5rem 0 0 .75rem;
	color: #b3b3b3;
}

.deets{
	opacity: .5;
}
</style>