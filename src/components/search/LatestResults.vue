<template>
  <section class="section" id="LatestResults">

    <!-- <SectionTitle :heading="content" /> -->

    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3">
      <div v-for="data in theLinks" :key="data.term" class="">

        <div class="results text-center mb-5">

          <a :href="data.link" class="mb-2 d-link">
            <img :src="data.image" :alt="data.term" class="data-image">
          </a>

          <div class="results-content">
            <a :href="data.link" class="mb-5 small data-link">
              <h5>{{ data.term }}</h5>
            </a>
            <div class="results-text">{{ data.text }}</div>
          </div>

        </div>

      </div>
    </div>

  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
// import SectionTitle from "../shared/SectionTitle.vue"

const content = ref(
  {
    title: 'Some of the Latest Links',
    intro: "Sign up to submit your own links",
  });


const theLinks = ref({})

const getLinks = async () => {
  try {
    const response = await fetch('http://localhost:3030/link/show');
    const data = await response.json();
    if (data.links) {
      const processedData = dataProcessing(data.links);
      theLinks.value = processedData;
    }
  } catch (err) {
    console.log(err);
  }
}

const dataProcessing = (data) => {
  let processedData = [];
  data.forEach((item) => {
    let processedItem = {
      term: item.term,
      text: item.text,
      image: item.image,
      link: item.link,
      tags: item.tags,
      rating: item.rating
    }
    processedItem.image = '/images/links/' + processedItem.image;
    processedItem.text = processedItem.text.substring(0, 60) + '...';
    processedData.push(processedItem);
  });
  return processedData;
}

onMounted(async () => {
  await getLinks().then(() => {
    console.log('done getting news links');
  });
});

</script>

<style scoped>

#LatestResults{
  margin: 3rem 0 15px 15px;
}

#LatestResults h5{
  text-align: left;
  margin-top: -2px;
  margin-bottom: 2px!important;
  padding-bottom: 0!important;
  color:#7d7d7d;
}

.dark #LatestResults h5, #LatestResults h5:hover {
  color:#6ab5db;
}

.dark #LatestResults h5:hover{
  color: #2c96c3;
}

.results-text{
  font-size: 14px;
  line-height: 1.1;
  text-align: left;
}

.data-image {
  height: 80px;
  width: 80px;
}

a.data-link {
  text-decoration: none;
}

a.d-link {
  display: block;
  min-width: 80px;
  margin-right: 10px;
}

.results {
  display: flex;
  justify-items: left;
  align-items: left;
  padding: 10px;
  margin-bottom: 50px;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
  width: 100%;
}

.results:hover{
  background-color: #fcfcfc;
}

.dark .results {
  box-shadow: -1px 14px 14px -11px rgba(0, 0, 0, 0.75) !important;
  -webkit-box-shadow: -1px 14px 14px -11px rgba(0, 0, 0, 0.75) !important;
  -moz-box-shadow: -1px 14px 14px -11px rgba(0, 0, 0, 0.75) !important;
}

.dark .results:hover {
  background-color: #101010;
}

.results img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  filter: url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'grayscale\'><feColorMatrix type=\'matrix\' values=\'0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0\'/></filter></svg>#grayscale");
  /* Firefox 3.5+ */
  filter: gray;
  /* IE6-9 */
  -webkit-filter: grayscale(80%);
}

.results img:hover {
  filter: none;
  -webkit-filter: grayscale(0%);
}
</style>