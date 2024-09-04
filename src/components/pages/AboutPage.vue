<style>
.about-text {text-align: center;}

.terms {font-size: 1.25rem; color: #7d7d7d !important;}
.dark .terms {color: #414f64 !important;}

.section {margin-top: 1.5rem;}

#download-btn {
  color: #ffffff !important;
  opacity: 1 !important;
  text-decoration: none;
  margin-bottom: 2rem;
}

.page-content {
  padding: 2rem;
  margin: 1rem;
  color: #7d7d7d;
  background-color: #ffffff;
  border-radius: .33rem;
  border: 1 px solid #dedede;
  box-shadow: -1px 14px 14px -11px rgba(0, 0, 0, 0.1) !important;
  -webkit-box-shadow: -1px 14px 14px -11px rgba(0, 0, 0, 0.1) !important;
  -moz-box-shadow: -1px 14px 14px -11px rgba(0, 0, 0, 0.1) !important;
}


.dark .page-content {background-color: #0d1117; color:#545d69;}

.wrapper {display: block;}

/* increase header size after 600px */
@media all and (min-width: 600px) {
  .wrapper {
    display: flex;
    align-content: center;
    align-items: top;
    gap: 50px;
  }

  .nope {align-self: start; min-width: 50%;}

}


h2.heading-icon {color: #d7d7d7;}
.dark h2.heading-icon {color: #1d2634;}

</style>

<template>
  <section class="section container-fluid">

    <div>

      <div class="page-content">

        <SectionTitle :heading="content" />

        <p class="">{{ content.more }}</p>

        <hr class="m-5" id="download" />


        <div class="wrapper">

          <div>
            <h3> {{ content.subTitle }} </h3>
            <p class="text terms mt-4">{{ content.details }}</p>

            <div class="page-content">
              <h2 class="mb-0 mt-2 heading-icon"> <BIconCloudDownloadFill /> </h2>
              <a @click="handleClick()" class="btn btn-primary mt-4" id="download-btn">
              <span id="download-btn"> <BIconGithub /> Download Dashboard </span>
            </a>
            </div>

            <div>

              <p>
                This button will take you to the Github repository where you can clone this dashboard locally and edit
                it. Be aware that this is development code and has not been "built" into a web app yet.
              </p>
              <p class="text">
                This is a <a href="https://vuejs.org/">Vue3</a> project using <a href="https://vitejs.dev/npm">Vite</a>
                and <a href="https://www.npmjs.com/">NPM</a>.
              </p>
              <hr class="mt-5" />
              <h5 class="mt-5">Custom / Consulting</h5>
              <p>
                If you want to hire me for customization of this theme, consulting on how to get your api working with
                it, or web-dev in general you can mssg 850.270.3180 and I'll get back to you within 24 hours.
              </p>
              <p>
                A <a href="0xef83ee26838B306aE2cDDE9eC8eEa38D15B41C2F">$50 deposit of ETH</a> will
                get you on the schedule and buys you an hour of consultation.
              </p>

            </div>
          </div>
          <div class="nope">
            <img src="/images/dashboard.webp" />
          </div>
        </div>

      </div>

      <div class="blockquote-wrapper">
        <div class="blockquote">
          <h1> People sleepin' on the blockquote... </h1>
          <h4>&mdash;Tr1pwyr</h4>
        </div>
      </div>

      <div class="page-content">
        <h5 class="mt-4">Additional Details</h5>
        <div class="my-5" v-for="d in details" key="d">
          <h6>{{ d.title }}</h6>
          <p>{{ d.text }}
            <!-- <a :href="d.link">{{ d.linkText }}</a> -->
          </p>
        </div>
      </div>

    </div>

    <div id="gallery">
      <PhotoGallery />
    </div>

  </section>



</template>

<script setup>
import { ref } from 'vue'
import SectionTitle from "../shared/SectionTitle.vue"
import PhotoGallery from "../shared/PhotoGallery.vue"
import { BIconGithub } from "bootstrap-icons-vue";
const handleClick = () => {
  window.location.href = 'https://github.com/tr1pwyr/vuedash';
}

import { BIconCloudDownloadFill } from "bootstrap-icons-vue";


const content = ref(
  {
    title: 'About VueDash.org',
    intro: "I started looking around for a Vue template that I could use for the beginnings of a dashboard part of a project I was working on.  I could not find anything that was simple, easy to integrate, and professional.  Suffice to say I did not find what I was looking for.",
    more: "This being the case I decided to make one, and make it available in case anyone else could use such a thing.",
    subTitle: "Use Terms",
    details: 'You are free to download this template and use it as you see fit.  I do not warranty it, do not offer free support, etc.  Feel free to fork it, modify it, make improvements, etc. but keep in mind that it is early in development and there will be braking changes.',
  });

// 
const details = ref(
  [
    {
      title: 'Component Based',
      text: 'If you are looking for a specific chart or part of the homepage you best bet is to look at the /components folder.  The header and footer are in the layout sub-folder, most of the rest of the components are in the shared and pages sub folders respectively.',
      linkText: 'Here\'s a brief outline of the proces',
      link: '/topic/risk'
    },
    {
      title: 'CSS Style',
      text: 'I have moved (almost) all of the CSS from the component files to the main style.css file.  I know that this is not dogmatically Vue but since there isn\'t much that\'s not shown right away scoping doesn\'t buy you much...  This may not be my final answer, but it is different this version so I thought I would mention it. ',
      linkText: 'Here are some key steps involved in implementing such measures',
      link: '/topic/sec'
    },
    {
      title: 'Page Views',
      text: 'The pages ( this page, contact, etc.) use the PageView.vue file in the views folder.  It uses the userRoute() function to handle routing using route.params to direct users to the correct page.  The components for pages are in the /components/pages subdirectory.',
      linkText: 'Here are somw strategies for ensuring critical systems resilience.',
      link: '/topic/critical'
    },

  ]
);

</script>
