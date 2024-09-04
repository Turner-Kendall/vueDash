<template>
  <section id="sub-header">

    <div id="subheading">
      <div id="user-info" v-if="store?.username">
        Welcome: {{ store?.username }} 
        <span @click="logout()" id="logout-link">Log out?</span>
      </div>
      <div id="login-link" v-else>
        Not Logged in. <a href="/login">Login Here</a>
      </div>
    </div>

    <div id="display-time">{{ displayTime }}</div>
    
  </section>
</template>

<script setup>
import { store } from "../../store";
import { ref, computed, onBeforeUnmount } from 'vue'
import { useInterval } from '../../js/useInterval';
const displayTime = ref('')
const time = ref(new Date());

const logout = async () => {
  localStorage.clear();
  store.updateHasLogin(false);
  store.updateName(null);
  router.push("/login");
};

function intervalHandler() {
	time.value = new Date();
}

useInterval(intervalHandler);
displayTime.value = computed(() => time.value.toTimeString());

onBeforeUnmount(() => {
	displayTime.value = null
});

</script>
