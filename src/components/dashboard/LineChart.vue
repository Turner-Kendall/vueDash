<template>
	<Responsive class="w-full mt-3">
		<template #main="{ width }">
			<Chart :size="{ width, height: 480 }" :data="data" :margin="margin" :axis="axis" class="ummm">
				<template #layers>
					<Grid strokeDasharray="1,1"  />
					<Line :dataKeys="['name', 'inc']" type="monotone" :lineStyle="{ stroke: '#bd303d' }" />
					<Area :dataKeys="['name', 'pl']" type="monotone" :areaStyle="{ fill: 'url(#grad)' }" />
					<Line :dataKeys="['name', 'pl']" type="monotone" :lineStyle="{ stroke: '#0171d9' }" />
					<Line :dataKeys="['name', 'pt']" type="monotone" :lineStyle="{ stroke: '#02947c' }" />
					<Line :dataKeys="['name', 'avg']" type="monotone" :lineStyle="{ stroke: '#2c96c3' }" />
					<Line :dataKeys="['name', 'proj']" type="natural" :lineStyle="{ stroke: '#131313', strokeWidth: 10 }" />
					<defs>
						<linearGradient id="grad" gradientTransform="rotate(90)">
							<stop offset="0%" stop-color="#081f39" stop-opacity="1" />
							<stop offset="100%" stop-color="#14161f" stop-opacity="0.4" />
						</linearGradient>
					</defs>
				</template>
				<template #widgets>
					<Tooltip borderColor="#000000" :config="{
						name: { color: '#111111' },
						pl: { color: '#0171d9' },
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
import { defineComponent, ref } from 'vue'
import { Chart, Grid, Responsive, Line, Area, Tooltip } from 'vue3-charts'
import { plByMonth } from '../../js/data'

export default defineComponent({
	name: 'LineChart',
	components: { Chart, Grid, Responsive, Line, Area, Tooltip },
	setup() {
		const data = ref(plByMonth)
		const direction = ref('horizontal')
		const margin = ref({
			left: 20,
			top: 20,
			right: 0,
			bottom: 50
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
			}
		})

		return { data, direction, margin, axis }
	}
})
</script>

<style scoped>
.w-full {
	width: 100%;
	color:rgba(162, 167, 178, 0.5);
	background-color:#fff;
}
.dark .w-full {
	color:rgba(89, 91, 96, 0.5);
	background-color: #121212;
}
</style>
