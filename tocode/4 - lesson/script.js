const App = {
  data() {
    return {
      lesson: "Урок №4. Директива v-if",
      description: `<strong>В этом уроке мы поработаем с <mark>v-if, v-else-if и v-else</mark>.
                    <br>(единственное условие, теги с v-if должны идти друг за другом)</strong>`,
      buttons: {
        count: 0,
        up: "+",
        down: "-",
      },
    };
  },
  methods: {
    incValue() {
      this.buttons.count++;
    },
    decValue() {
      this.buttons.count--;
    },
  },
};

Vue.createApp(App).mount("#app");
