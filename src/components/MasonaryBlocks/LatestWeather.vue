<template>
    <div class="col-md-4 mb-3">
      <div class="card card-body h-100">
				<!-- <div class="card card-body h-100 weather"> -->
        <div class="d-flex align-content-center flex-wrap">
          <a href="#" class="icon-link">
            <BIconSun /> 78 Degrees</a> 
        </div>
        Today in the Fla
      </div>
    </div>
</template>

<script setup>
import { BIconSun } from "bootstrap-icons-vue";
</script>

<style scoped>
.weather a {
	color: #ffffff;
}

.dark .vue:hover a,
.weather:hover a {
	color: #fff;
}

.weather {
	border: 1px solid #1b3cd1;
	color: #ffffff !important;
	background-color: #1b3cd1;
	font-weight: 700;
}

.weather:hover {
	border: 1px solid #2194ff;
	color: #1a90ff !important;
	background-color: #031070 !important;
}

.dark .weather {
	border: 1px solid #0171d9;
	color: #0171d9 !important;
	background-color: rgb(8, 31, 57, .9);
}

.dark .weather:hover {
	border: 1px solid #0177e5;
	color: #0177e5 !important;
	background-color: #06172a !important;
}
</style>