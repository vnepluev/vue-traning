<template>
  <div class="wrapper">
    <Header />
    <div class="wrapper-content">
      <div class="container">
        {{ getName }}
        <router-view />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
// import { reactive, ref } from "vue";
// import axios from "axios";
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default defineComponent({
  components: {
    Header,
    Footer,
  },

  setup() {
  },
});
</script>

<style lang="scss"></style>
