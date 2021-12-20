<template>
  <div class="wrapper">
    <Header />
    <div class="wrapper-content">
      <div class="container">
        <router-view />

        <button
         class="btn btnPrimary"
         @click="modalFirst = true"
        >First modal</button>

        <!-- first modal -->
        <Modals
         v-if="modalFirst"
         title="First modal"
         @close="modalFirst = false"
        />

      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

import Modals from "@/components/Modal.vue"

export default {
  data() {
    return {
      modalFirst: false,
    }
  },
  components: { Header, Footer, Modals },
};
</script>

