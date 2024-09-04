<template>
	<section class="stats">
		<div class="row">

			<div class="col-sm stat">
				<transition name="fade">
					<span v-if="total">
						<BIconCalendar2DateFill />{{ total }}
					</span>
				</transition>
				<div class="data">Last 30 Days</div>
			</div>

			<div class="col-sm stat">
				<transition name="fade">
					<span v-if="totalAvg">
						<BIconCalendar2EventFill />{{ totalAvg }}
					</span>
				</transition>
				<div class="data">Last 7 Days</div>
			</div>

			<div class="col-sm stat">
				<transition name="fade">
					<span v-if="averageAvg" class="average-avg">
						<BIconCalendar2HeartFill />{{ averageAvg }}%
					</span>
				</transition>
				<div class="data">Average / Goal</div>
			</div>

			<div class="col-sm stat">
				<a @click="handleClick">
					<BIconCalendar2CheckFill />
				</a>
				<transition name="fade">
					<span v-if="dashDate" class="dash-date">{{ dashDate }}</span>
				</transition>
				<div class="data">Custom Date Range</div>
			</div>
		</div>

	</section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { plByMonth } from '../../js/data'
import { BIconCalendar2CheckFill, BIconCalendar2DateFill, BIconCalendar2EventFill, BIconCalendar2HeartFill } from "bootstrap-icons-vue";
import Swal from "sweetalert2";

const total = ref('')
const totalAvg = ref('')
const averageAvg = ref('')
const dashDate = ref('')

const processData = async () => {
	total.value = plByMonth.reduce((acc, curr) => acc + curr.pl, 0);
	totalAvg.value = plByMonth.reduce((acc, curr) => acc + curr.avg, 0);
	const temp = totalAvg.value / plByMonth.length;
	averageAvg.value = Math.round(temp) * .10
};

const reProcessData = async (d) => {
	let temp = 0
	let runningTotal = 0
	let tempString = ""

	total.value = Math.round(total.value * (Math.random() / 3.33));

	if (d[6] > d[9]) {
		temp = d[6] - d[9]
	} else {
		temp = d[9] - d[6]
	}

	totalAvg.value = Math.round(totalAvg.value / Math.round(((Math.random() * temp) / .33)));

	if (Math.round(totalAvg.value + temp) > 100) {
		let x = temp.toString()
		runningTotal = x.slice(0, 2);
	} else
		runningTotal = totalAvg.value + temp

	let y = runningTotal.toString()
	averageAvg.value = y.slice(0, 2);
};


const handleClick = async () => {
	const { value: date } = await Swal.fire({
		title: "select proj date",
		input: "date",
		didOpen: () => {
			const today = (new Date()).toISOString();
			Swal.getInput().min = today.split("T")[0];
		}
	});
	if (date) {
		dashDate.value = date
		Swal.fire("Projected date", date);
		reProcessData(date);
	}
}

onMounted(() => {
	try {
		processData();
	} catch (err) {
		console.log(`processData error: ${err}`);
	}
});


</script>

<style scoped>
.stats {
	padding: 2rem;
	margin: 0 3rem 2rem 3rem;
	font-weight: 700;
	font-size: 1.75rem;
	background-color: #ffffff !important;
	border-bottom: 25px solid #e9e9e9;
	border-radius: .33rem;

}

.dark .stats {
	background-color: #0d1117 !important;
	border-bottom: 5px solid #1d2634;
}

.stat {
	margin-left: 1rem;
	color: rgba(125, 125, 125, 0.75);
	cursor: pointer;
}

.dark .stat {
	color: rgba(255, 255, 255, .75);
}

.stat:hover {
	color: #2c96c3;
}

.dark .stat:hover {
	color: #ffffff;
}

.stat svg {
	margin-top: -3px;
	margin-right: 7px;
	color: rgba(125, 125, 125, 0.25);
}

.stat svg:hover {
	color: rgba(125, 125, 125, 0.33);
}

.dark .stat svg {
	color: #161b22;
}

.data {
	padding-top: 2px;
	padding-left: 2px;
	font-size: .85rem;
	color: #2c96c3;
}

.dark .data {
	color: #6ab5db;
}

.dash-date {
	font-size: 1.25rem;
	padding-left: 7px;
	color: #7d7771;
}
</style>