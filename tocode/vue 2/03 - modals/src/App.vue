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
         v-show="modalFirst"
         title="First modal"
         @close="modalFirst = false"
        >
          <template v-slot:body>
            <p>Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.</p>
            <button class="btn btnPrimary" @click="modalFirst = false">Close</button>
          </template>
        </Modals>

        <button
         class="btn btnPrimary"
         @click="modalSecond.show = true"
        >Show second modal</button>

        <!-- second modal -->
        <Modals
         v-show="modalFirst"
         title="Second modal with form"
         @close="modalSecond.show = false"
        >
          <template v-slot:body>
            <form action="" @submit.prevent="submitSecondForm">
              <label>Name:</label>
              <input type="text" v-model="modalSecond.name">
              <label>E-mail:</label>
              <input type="email" v-model="modalSecond.email">
              <button class="btn btnPrimary">Submit</button>
            </form>
          </template>
        </Modals>

        <!-- Modal with validate -->
        <button
         class="btn btnPrimary"
         @click="modalValidate = true"
        >Show modal validate</button>
        <ModalValidate
          v-show="modalValidate"
          @close="modalValidate = true"
        ></ModalValidate>

      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

import Modals from "@/components/UI/Modal.vue";
import ModalValidate from "@/components/ModalValidate.vue";

export default {
  data() {
    return {
      modalFirst: false,
      modalSecond: {
        show: false,
        name: '',
        email: ''
      },
      modalValidate: false,
    }
  },
  methods: {
    submitSecondForm() {
      console.log({
        name: this.modalSecond.name,
        email: this.modalSecond.email
      });
      this.modalSecond.name = '';
      this.modalSecond.email = '';
      this.modalSecond.show = false;
    }
  },
  components: { Header, Footer, Modals, ModalValidate },
};
</script>

