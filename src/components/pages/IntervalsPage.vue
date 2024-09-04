<template>
	{{ displayTime }}
</template>

<script setup>
import {ref, computed, onBeforeUnmount} from 'vue'
import { useInterval } from '../../js/useInterval';
const displayTime = ref('')
const time = ref(new Date());

function intervalHandler() {
	time.value = new Date();
}

useInterval(intervalHandler);
displayTime = computed(() => time.value.toTimeString());

onBeforeUnmount(() => {
  displayTime = null
});

</script>
