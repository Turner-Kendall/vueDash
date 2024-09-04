<template>
  <header class="main-header sticky">
    <nav class="navbar">
      <div class="brand">
        <a class="" href="/">
          <BIconReception3 class="brand-icon" />
          {{ store.info.sitename }}
        </a>
      </div>
      <div class="form-check form-switch">
        <input @click="toggleDark()"  
          class="form-check-input" 
          id="flexSwitchCheckDefault"
          type="checkbox" role="switch">
      </div>
    </nav>
  </header>
</template>

<script setup>
import { BIconReception3 } from "bootstrap-icons-vue";
import { useDark, useToggle } from "@vueuse/core";
import { store } from "../../store";
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

