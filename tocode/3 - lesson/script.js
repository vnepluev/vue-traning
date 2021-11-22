const App = {
  data() {
    return {
      lesson: "Урок №3. События, переменные, методы",
      description: `<strong>В этом уроке мы поработаем с <mark>v-on, v-html</mark> и переменными <mark>data()</mark>.</strong>`,
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
