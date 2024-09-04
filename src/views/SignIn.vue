<template>
  <auth-form :auth-name="'login'" />
</template>

<script setup>
import { useTitle } from '@vueuse/core'
import AuthForm from '../components/shared/AuthForm.vue';
import { store } from '../store'
const title = useTitle(store.info.sitename + ' Login')
</script>
