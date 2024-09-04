<template>

	<Responsive class="pie">
		<template #main="{ width }">
			<Chart direction="circular" :size="{ width, height: 420 }" 
				:data="data" :margin="{
					left: Math.round((width - 360) / 2),
					top: 20,
					right: 0,
					bottom: 40
				}" 
				:config="{ controlHover: false }">

				<template #layers>
					<Pie :dataKeys="['name', 'pl']" :pie-style="{
						innerRadius: 75,
						padAngle: 0.05,
						colors: ['#bd303d', '#0463c3', '#3385ff', '#02947c', '#7203fe', '#cb4e5a', '#56457a']
					}" />
					
				</template>

				<template #widgets>
					<Tooltip borderColor="#000000"
						:config="{
						name: { color: '#111111' },
						value: { color: '#111111' },
						avg: { hide: true },
						pl: { label: 'incidents', color: '#111111'  },
						proj: {color: '#000'},
						inc: { hide: true }}" hideLine />
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
	components: { Chart, Grid, Responsive, Area, Tooltip, Pie },
	setup() {
		const data = ref(barByMonth)
		const direction = ref('horizontal')
		const margin = ref({
			left: 0,
			top: 20,
			right: 0,
			bottom: 50
		})

	

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