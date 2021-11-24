const App = {
  data() {
    return {
      title: "Notes",
      input: {
        placeholder: "vue 3 is work",
        value: "",
      },
      notes: ["Task 1", "Task 2", "Task 3"],
      notesTemp: "",
    };
  },
  mounted() {
    this.getNotes();
  },
  watch: {
    notes: {
      handler(updatedList) {
        localStorage.setItem("notes", JSON.stringify(updatedList));
      },
      deep: true,
    },
  },
  methods: {
    getNotes() {
      const localNotes = localStorage.getItem("notes"); // null
      if (localNotes) {
        this.notes = JSON.parse(localNotes);
      }
    },
    onSubmit() {
      localStorage.setItem("notes", this.input.value);
      this.notes.push(this.input.value);
      this.input.value = "";
    },
    remove(index) {
      this.notes.splice(index, 1);
      console.log(index);
    },
    editNote(event) {
      this.notesTemp = event.outerText;
      event.setAttribute("contenteditable", true);
      event.onselectstart = "return true";
      event.onblur = (event) => {
        event.target.textContent = this.notesTemp;
      };
    },
    editNoteEnd(event) {
      const id = +event.getAttribute("data-id");
      const text = event.outerText;
      event.setAttribute("contenteditable", false);
      this.notes[id] = text;
      localStorage.setItem("notes", JSON.stringify(this.notes));
    },
  },
};

Vue.createApp(App).mount("#app");
