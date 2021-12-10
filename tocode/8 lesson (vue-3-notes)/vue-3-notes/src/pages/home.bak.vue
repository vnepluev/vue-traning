<template>
  <Form @onSubmit="handleSubmit" @test="handleTest" :items="items.tags" />
  <List @onRemove="handleRemove" :items="items"></List>
</template>

<script>
import Form from "@/components/Notes/Form";
import List from "@/components/Notes/List";

export default {
  data() {
    return {
      items: [
        {
          title: "Learn Vue 3",
          tags: ["work"],
        },
        {
          title: "Finish Course",
          tags: ["work", "home"],
        },
        {
          title: "Hello",
          tags: [],
        },
      ],
    };
  },
  mounted() {
    this.getNotes();
  },
  watch: {
    items: {
      handler(updatedList) {
        localStorage.setItem("notes", JSON.stringify(updatedList));
      },
      deep: true,
    },
  },
  components: { Form, List },
  methods: {
    getNotes() {
      const localNotes = localStorage.getItem("notes");
      if (localNotes) {
        this.items = JSON.parse(localNotes);
      }
    },
    handleSubmit(obj) {
      const tags = obj.tags;
      const note = {
        title: obj.title,
        tags: [],
      };

      if (obj.title.length !== 0) {
        tags.forEach((item) => {
          if (item.active) note.tags.push(item.category);
          item.active = false;
        });
        this.items.push(note);
      }
    },
    handleTest({ name, age }) {
      // Либо можем принять name, age как handleTest(user)
      // и обращаться к нему как user.name, user.age
      console.log(name, age);
    },
    handleRemove(index) {
      this.items.splice(index, 1);
    },
  },
};
</script>
