<template>
  <div class="note-form-wrapper">
    <form class="note-form" @submit.prevent="onSubmit">
      <textarea placeholder="Plase your note" v-model="value"></textarea>
      <TagsList :items="tags" @onItemClick="handleTagClick" />
      <button class="btn btnPrimary" type="submit">Add new Note</button>
    </form>
  </div>
</template>
<script>
import TagsList from "@/components/UI/TagsList";

export default {
  data() {
    return {
      value: "",
      tags: ["work", "home", "travel"],
    };
  },
  components: { TagsList },
  methods: {
    onSubmit() {
      const name = "Valeriy";
      const age = "38";
      this.$emit("test", { name: name, age });
      this.$emit("onSubmit", this.value);
      this.value = "";
    },
    handleTagClick(tag) {
      console.log(tag);
    },
  },
};
</script>

<style lang="scss">
.note-form-wrapper {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.note-form {
  display: flex;
  flex-direction: column;
  max-width: 600px;
  align-items: center;
  width: 100%;
  textarea {
    margin-bottom: 0;
  }
}
</style>
