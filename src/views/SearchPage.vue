<template>
  <section class="mt-5 pt-5">
    <div v-if="pageRoute == 'main'">
      <MainSearch />
    </div>
    <div v-if="pageRoute == 'latest'">
      <LatestResults />
    </div>
		<div v-if="pageRoute == 'full'">
      <FullResults />
    </div>
  </section>
</template>

<script setup>
import { useRoute } from "vue-router";
import LatestResults from "../components/search/LatestResults.vue";
import MainSearch from "../components/search/MainSearch.vue";
import FullResults from "../components/search/FullResults.vue";
const route = useRoute();
const pageRoute = route.params.name; 
</script>

