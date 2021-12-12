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
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

interface IPerson {
  id: number;
  title: string;
  male: boolean;
}

// Можно создать интерфейс для computed() и описывать в нем то,
// что возращают методы
//interface IComputed {
//  getName: string;
//}

export default {
  data() {
    return {
      // или wizzard: {} as IPerson - у объекта ожидаются данные согласно описанного интерфейса
      wizzard: {
        id: 1,
        title: "Wizzard",
        male: true,
      } as IPerson,
    };
  },
  components: { Header, Footer },
  computed: {
    getName(): string {
      return this.wizzard.title;
    },
  },
  methods: {
    setName(title: string) {
      return (this.wizzard.title = title);
    },
  },
};
</script>

<style lang="scss"></style>
