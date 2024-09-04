<template>

	<BarChart />


	<LineChart />

	<PieChart />

</template>



<script setup lang="ts">
import BarChart from '../dashboard/BarChart.vue'
import LineChart from '../dashboard/LineChart.vue';
import PieChart from '../dashboard/PieChart.vue'
</script>


<style>
#big-bar-chart {
	color: rgba(57, 69, 72, .75);
	font-weight: 800;
}
</style>