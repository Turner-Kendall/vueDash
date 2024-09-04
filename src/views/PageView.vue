<template>
  <section class="mt-5 pt-5">
    <div v-if="pageRoute == 'charts'">
      <BigCharts />
    </div>
    <div v-if="pageRoute == 'about'">
      <AboutPage />
    </div>
    <div v-if="pageRoute == 'privacy'">
      <PrivacyPage />
    </div>
    <div v-if="pageRoute == 'contact'">
      <ContactPage />
    </div>
  </section>
</template>

<script setup>
import { useRoute } from "vue-router";
import AboutPage from '../components/pages/AboutPage.vue';
import BigCharts from "../components/pages/BigCharts.vue";
import PrivacyPage from "../components/pages/PrivacyPolicy.vue";
import ContactPage from "../components/pages/ContactPage.vue"
const route = useRoute();
const pageRoute = route.params.name; 
</script>
