<template>
    	<Responsive class="col-sm bar" id="big-bar-chart">
		<template #main="{ width }">
			<Chart :size="{ width, height: 480 }" :data="data" :margin="margin" :axis="axis">
				<template #layers>
					<Grid strokeDasharray="1,1" />
					<Area :dataKeys="['name', 'pl']" type="monotone" :areaStyle="{ fill: 'url(#grad)' }" />
					<Bar :dataKeys="['name', 'pl']" :barStyle="{ fill: 'url(#red-grad)' }" />
					<Bar :dataKeys="['name', 'avg']" :barStyle="{ fill: 'url(#blue-grad)' }" />
					<Bar :dataKeys="['name', 'inc']" :barStyle="{ fill: 'url(#green-grad)' }" />
					<Bar :dataKeys="['name', 'proj']" :barStyle="{ fill: 'url(#purp-grad)' }" />
					<defs>
						<linearGradient id="grad" gradientTransform="rotate(90)">
							<stop offset="0%" stop-color="#333333" stop-opacity=".5" />
							<stop offset="100%" stop-color="#cccccc" stop-opacity="0.2" />
						</linearGradient>
						<linearGradient id="purp-grad" gradientTransform="rotate(90)">
							<stop offset="0%" stop-color="#9573d9" stop-opacity="1" />
							<stop offset="100%" stop-color="#1b172e" stop-opacity="0.9" />
						</linearGradient>
						<linearGradient id="blue-grad" gradientTransform="rotate(90)">
							<stop offset="0%" stop-color="#2c96c3" stop-opacity="1" />
							<stop offset="100%" stop-color="#102635" stop-opacity="0.9" />
						</linearGradient>
						<linearGradient id="red-grad" gradientTransform="rotate(90)">
							<stop offset="0%" stop-color="#de6767" stop-opacity="1" />
							<stop offset="100%" stop-color="#2d1a21" stop-opacity="0.9" />
						</linearGradient>
						<linearGradient id="green-grad" gradientTransform="rotate(90)">
							<stop offset="0%" stop-color="#55a66c" stop-opacity="1" />
							<stop offset="100%" stop-color="#1f3e37" stop-opacity="0.9" />
						</linearGradient>
					</defs>
				</template>

				<template #widgets>
					<Tooltip borderColor="#2c96c3" :config="{
						name: { color: '#2c96c3' },
						pl: { color: '#55a66c' },
						avg: { hide: true },
						inc: { hide: true },
						proj: { hide: true }
					}" />
				</template>

			</Chart>
		</template>
	</Responsive>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { Chart, Grid, Responsive, Area, Tooltip, Bar, Pie } from 'vue3-charts'
import { barByMonth } from '../../js/bar-data'
import { useInterval } from '../../js/useInterval';

export default defineComponent({
	name: 'BarCharts',
	components: { Chart, Grid, Responsive, Area, Tooltip, Bar, Pie },
	setup() {
		const data = ref(barByMonth)
		const direction = ref('horizontal')
		const margin = ref({
			left: 30,
			top: 20,
			right: 0,
			bottom: 50
		})

		function updateRandomValue(){
		const randomIndex = Math.floor(Math.random() * barByMonth.length);
		const randomObject = barByMonth[randomIndex];
		const keys = Object.keys(randomObject);
		const randomKey = keys[Math.floor(Math.random() * (keys.length - 1))]; // Exclude the "name" property
		randomObject[randomKey] += 100;
		console.log(`Updated ${randomObject.name} ${randomKey} to ${randomObject[randomKey]}`);
		}

		const axisTwo = ref({
			primary: {
				type: 'band',
			},
		})

		const axis = ref({
			primary: {
				type: 'band',
				format: (val: string) => {
					if (val === 'May' || val === 'Jul') {
						return '🐋'
					}
					if (val === 'Apr') {
						return '🐳'
					}
					if (val === 'Jan') {
						return '🤖'
					}
					if (val === 'Feb') {
						return '🎏'
					}
					if (val === 'Mar') {
						return '📣'
					}
					if (val === 'Jun') {
						return '👓'
					}
					return val
				}
			},

		})

		const time = ref(new Date());

    // function intervalHandler() {
    //   time.value = new Date();
	// 		// console.log('helllo')
	// 		// updateRandomValue()
    // }

    // useInterval(intervalHandler);

    // const timeString = computed(() => time.value.toTimeString());


		return { data, direction, margin, axis, axisTwo}
	}

})




</script>




<style>
#big-bar-chart {
	color: rgba(57, 69, 72, .75);
	font-weight: 800;
}
</style>