<template>
  <div class="row justify-content-center my-3">
    <h5>Current Client Login:</h5>
    <div class="col-md-6 mb-3">

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from "vue-router";
import { store } from "../../store";
import swal from 'sweetalert2';
// import AuthForm from './AuthForm.vue';

const router = useRouter();
const route = useRoute();

const searchTerm = ref('');

</script>

