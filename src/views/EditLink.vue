<template>
  <section class="container pt-5 mt-5">
    <div class="row">
      <div class="col-md-10 m-auto mb-5">

        <SectionTitle :heading="pageData" />

        editing: {{ editId }}

        <form @submit.prevent="addLink" class="col-12 form" method="POST">
          <input type="hidden" name="_gotcha" style="display:none !important">

          <div class="row">
            <div class="col-md-6 my-2">
              <input class="form-control main" v-model="term" type="text" placeholder="Term" name="term" id="form-term"
                required>
            </div>

            <div class="col-md-4 my-2">
              <input class="form-control main" v-model="tags" type="text" placeholder="tags, comma, separated" name="tags"
                id="form-tags" required>
            </div>

            <div class="col-md-2 my-2">
              <select id="selected-tab" name="selected-tab" v-model="pol" class="form-control main">
                <option v-for="r in rating" :key="r">
                  {{ r }}
                </option>
              </select>
            </div>

            <div class="col-md-6 my-2">
              <input class="form-control main" v-model="link" type="text" placeholder="https://" name="link"
                id="form-link" required>
            </div>

            <div class="col-md-6 my-2">
              <input class="form-control main" v-model="img" type="text" placeholder="img: optional" name="img"
                id="form-tags">
            </div>

            <div class="col-md-12 my-2">
              <textarea class="form-control main" name="text" v-model="text" rows="6"
                placeholder="text: describe the link" id="form-message"></textarea>
            </div>

            <div class="col-12 text-right my-2">
              <button @click="addLink" class="btn btn-primary">Add Link</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
  margin-bottom: 50px;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
  width: 100%;
}

.dark .form-control {
  background-color: #272727;
  color: #fefefe!important;
  border: 2px solid rgba(0, 0, 0, 0.33);
}
</style>

<script setup>
import { ref } from 'vue'
import swal from 'sweetalert2'
import SectionTitle from '../components/shared/SectionTitle.vue'
import { useRoute } from "vue-router";

const route = useRoute();
const editId = route.params.name;




const pageData =
{
  title: 'Edit Link',
  subtitle: 'Admins can edit links to the site here',
}

const rating = [0, 1, 2, 3, 4, 5, -5, -4, -3 - 2, -1]
const pol = ref(rating[0]);
const term = ref('');
const tags = ref('');
const link = ref('');
const img = ref('');
const text = ref('');

const addLink = () => {
  console.log(pol.value)

  // if img is not empty it must end in .webp
  if (img.value) {
    if (!img.value.endsWith('.webp')) {
      swal.fire({
        title: 'Invalid Image',
        text: 'If you include an image it must end in .webp',
        icon: 'error'
      })
      return
    }
  }

  const data = {
    term: term.value,
    text: text.value,
    link: link.value,
    rating: pol.value,
    tags: tags.value,
    image: img.value,
  }

  // post to the server at http://localhost:3030/link
  fetch('http://localhost:3030/link', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      swal.fire({
        title: 'Link Added',
        text: 'Your link has been added to the site',
        icon: 'success'
      })
    })
    .catch((error) => {
      console.error('Error:', error);
      swal.fire({
        title: 'Error',
        text: 'There was an error adding your link',
        icon: 'error'
      })
    });

}

</script>