<template>
  <div id="dashboard">

    <section class="dashboard-menu sticky-top side-menu">
      <div class="pt-4 d-flex flex-sm-column flex-nowrap align-items-center sticky-top">

        <ul class="nav flex-sm-column flex-row flex-nowrap text-center align-items-center">
          <li>
            <a @click="forceRerender" class="nav-link py-3" title="Reset Data">
              <BIconExclamationTriangleFill class="bi-icon fs-3" />
              <div class="icon-label">Reset Data</div>
            </a>
          </li>
          <li>
            <a @click="toggleSettings" class="nav-link py-3" title="Details">
              <BIconGearWideConnected class="bi-icon fs-3" />
              <div class="icon-label">Details</div>
            </a>
          </li>
          <li>
            <a href="/page/charts" class="nav-link py-3" title="Charts">
              <BIconGraphDown class="bi-icon fs-3" />
              <div class="icon-label">The Charts</div>
            </a>
          </li>
          <li>
            <a href="/search/full" class="nav-link py-3" title="Network">
              <BIconHddNetworkFill class="bi-icon fs-3" />
              <div class="icon-label">The Links</div>
            </a>
          </li>
          <li>
            <a href="/#logs" class="nav-link py-3" title="Logs">
              <BIconIncognito class="bi-icon fs-3" />
              <div class="icon-label">View Logs</div>
            </a>
          </li>
        </ul>

        <div class="dropdown">
          <a href="#" title="Scroll to Top" class="d-flex align-items-center py-5 dropdown-toggle-up">
          </a>
        </div>

        <WindowSize />

      </div>
    </section>

    <section class="dashboard-main">

      <transition name="fade">
        <DashSettings v-if="showSettings" />
      </transition>

      <SubHeader />

      <DropDowns v-if="renderComponent" />

      <div id="monitoring">
        <MasonaryData />
      </div>

      <MasonaryNews />

      <DataStats v-if="renderComponent" />

      <DataTable />

      <TheTags />

      <div id="logs">
        <MasonaryLists />
      </div>

    </section>

  </div>
</template>

<script setup>
import SubHeader from "../components/shared/SubHeader.vue"
import MasonaryNews from "../components/shared/MasonaryNews.vue"
import DataStats from "../components/shared/DataStats.vue"
import TheTags from "../components/shared/TheTags.vue"
import DashSettings from "../components/dashboard/DashSettings.vue"
import DataTable from "../components/shared/DataTable.vue"
import DropDowns from "../components/shared/DropDowns.vue"
import MasonaryData from "../components/shared/MasonaryData.vue"
import MasonaryLists from "../components/shared/MasonaryLists.vue"
import WindowSize from "../components/shared/WindowSize.vue"
// import { store } from "../store";

import {
  BIconGearWideConnected,
  BIconGraphDown,
  BIconHddNetworkFill,
  BIconIncognito,
  BIconExclamationTriangleFill
} from "bootstrap-icons-vue";

import { nextTick, ref } from 'vue';

const renderComponent = ref(true);
const showSettings = ref(false);

const forceRerender = async () => {
  renderComponent.value = false;
  await nextTick();
  renderComponent.value = true;
};

function toggleSettings() {
  showSettings.value = !showSettings.value; // Toggle the value of showSettings
}

</script>
