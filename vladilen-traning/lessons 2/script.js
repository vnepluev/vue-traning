const App = {
  data() {
    return {
      title: "Counter:",
      placeholderString: "Введите название заметки",
      inputValue: "",
      notes: ["Заметка 1", "Заметка 2"],
    };
  },
  methods: {
    inputChangeHandler(event) {
      this.inputValue = event.target.value;
    },
    addNewNote() {
      if (this.inputValue !== "") {
        this.notes.push(this.inputValue);
        this.inputValue = "";
      }
    },
    removeNote(index) {
      this.notes.splice(index, 1);
    },
    toUpperCase(str) {
      return str.toUpperCase();
    },
  },
  computed: {
    doubleCount() {
      console.log("doubleCount");
      return this.notes.length * 2;
    },
  },
  watch: {
    // метод совпадает с названием переменной
    // принимает новое значение
    inputValue(value) {
      if (value.length > 6) this.inputValue = "";
    },
  },
};
Vue.createApp(App).mount("#app");
