<template>
  <section class="masonary-lists mt-5">
    
    <div class="list-footer container">
      <BIconExclamationTriangleFill /> 
      Data last reset March 24th 2024
      <IpAddress />
    </div>

    <EthPayment />
    <MasonaryNews />
    <MasonaryLists />
  </section>
</template>

<script setup>
import MasonaryLists from '../components/shared/MasonaryLists.vue';
import MasonaryNews from '../components/shared/MasonaryNews.vue';
import IpAddress from '../components/shared/IpAddress.vue';
import EthPayment from '../components/shared/EthPayment.vue'
import { BIconExclamationTriangleFill } from "bootstrap-icons-vue";
</script>

