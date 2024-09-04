<template>
	<section class="bar-pie">
		<div class="row">
			<Responsive class="col-sm bar">
				<template #main="{ width }">
					<Chart :size="{ width, height: 360 }" :data="data" :margin="margin" :axis="axis">

						<template #layers>
							<Grid strokeDasharray="1,1" />
							<Area :dataKeys="['name', 'pl']" type="monotone" :areaStyle="{ fill: 'url(#grad)' }" />
							<Bar :dataKeys="['name', 'pl']" :barStyle="{ fill: '#bd303d' }" />
							<Bar :dataKeys="['name', 'avg']" :barStyle="{ fill: '#0784c3' }" />
							<Bar :dataKeys="['name', 'inc']" :barStyle="{ fill: '#02947c' }" />
							<Bar :dataKeys="['name', 'proj']" :barStyle="{ fill: '#2c96c3' }" />
							<defs>
								<linearGradient id="grad" gradientTransform="rotate(90)">
									<stop offset="0%" stop-color="#131313" stop-opacity="1" />
									<stop offset="100%" stop-color="black" stop-opacity="0.4" />
								</linearGradient>
							</defs>
						</template>

						<template #widgets>
							<Tooltip borderColor="#000000" 
							:config="{
								name: { color: '#111111' },
								pl: { color: '#f96020' },
								avg: { hide: true },
								inc: { hide: true },
								proj: { hide: true }
							}" />
						</template>

					</Chart>
				</template>
			</Responsive> 
			<Responsive class="col-sm pie">
				<template #main="{ width }">
					<Chart direction="circular" :size="{ width, height: 320 }" 
						:data="data" :margin="{
							left: Math.round((width - 360) / 2),
							top: 20,
							right: 0,
							bottom: 20
						}" 
						:config="{ controlHover: false }"
						:axis="axisTwo"
						>

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
		
		</div>
	</section>

</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Chart, Grid, Responsive, Area, Tooltip, Bar, Pie } from 'vue3-charts'
import { plByMonth } from '../../js/data'

const rangeVal = 0

export default defineComponent({
	name: 'BarCharts',
	components: { Chart, Grid, Responsive, Area, Tooltip, Bar, Pie },
	setup() {
		const data = ref(plByMonth)
		const direction = ref('horizontal')
		const margin = ref({
			left: 30,
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
						return '🔥'
					}
					if (val === 'Apr') {
						return '🚩'
					}
					return val
				}
			},
		})

		return { data, direction, margin, axis, axisTwo }
	}
})
</script>

<style scoped>
	.bar-pie{
		/* width: 93%;
		padding: 1rem 0 .5rem 1rem; */
		margin: 2rem 0 0 0;
	}
	.bar{
		/* background-color: black; */
		padding-left: 1.5rem;
		padding-top: 1rem;
		color: #2c2c2c;
	}	
	
	.pie{
		padding-top: 1rem;
		color:#111111;
	}


	.chart svg {
  border: 1px solid red!important;
}
</style>
