<template>
  <section class="col-md-4 mb-3">
			<div class="card card-body h-100">
      <div class="d-flex align-content-center flex-wrap">
        <a href="#" class="icon-link">
          <BIconCurrencyBitcoin /><span class="btc">BTC </span>
          <span v-if="fetchBTCPrice">
            {{ fetchBTCPrice.bpi.USD.rate }}
          </span>
          <span v-else>
            <p>Loading data from: api.coindesk...</p>
          </span>
        </a> Data from: api.coindesk
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { BIconCurrencyBitcoin } from "bootstrap-icons-vue";

const fetchBTCPrice = ref(null);
const apiUrl = 'https://api.coindesk.com/v1/bpi/currentprice/USD.json';

onMounted(async () => {
	try {
		const response = await fetch(apiUrl);
		if (response.ok) {
			// Parse response as JSON
			const data = await response.json();
			// Update the fetched data
			fetchBTCPrice.value = data;
			console.log(typeof (fetchBTCPrice))
		} else {
			console.error('Failed to fetch data:', response.statusText);
		}
	} catch (error) {
		console.error('Error fetching data:', error);
	}
});
</script>
