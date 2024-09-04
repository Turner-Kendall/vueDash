<template>
  <section class="section">

    <SectionTitle :heading="content" />

    <table class="table table-striped text-lg-start">
      <tbody>
        <tr v-for="link in theLinks">
          <td> 
            <a :href="link.link" class="mb-5 small">
              {{ link.term }}
            </a>
            <br />
            {{ link.text }}
          </td>
        </tr>
      </tbody>
    </table>

  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import SectionTitle from "../shared/SectionTitle.vue"
const theLinks = ref({})

const content = ref(
  {
    title: 'A List of the Latest Links',
    intro: "Sign up to submit your own links",
  });

const getLinks = async () => {
  try {
    const response = await fetch('http://localhost:3030/link/all');
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

    processedItem.image = '/images/' + processedItem.image;
    processedItem.text = processedItem.text.substring(0, 100) + '...';
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
a{font-weight: 700; font-size:1.2rem;}
.result-image {
  height: 80px;
  width: 80px;
}
.header-image {
  margin-right: 25px;
}
</style>
