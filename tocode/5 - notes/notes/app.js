const App = {
  data() {
    return {
      title: "Notes",
      input: {
        placeholder: "vue 3 is work",
        value: "",
      },
      notes: ["Task 1", "Task 2", "Task 3"],
    };
  },
  mounted() {},
  watch: {},
  methods: {
    onSubmit() {
      this.notes.push(this.input.value);
      this.input.value = "";
      console.log(this.input);
    },
    remove(index) {
      this.notes.splice(index, 1);
      console.log(index);
    },
  },
};

Vue.createApp(App).mount("#app");
