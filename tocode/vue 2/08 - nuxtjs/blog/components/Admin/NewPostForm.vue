<template>
<section class="new-post">
  <div class="container">
    <form @submit.prevent="onSubmit">
      <AppInput v-model="post.title">Title: </AppInput>
      <AppInput v-model="post.descr">Description: </AppInput>
      <AppInput v-model="post.img">Img link: </AppInput>
      <AppTextArea v-model="post.content">Content: </AppTextArea>
      <!-- controls -->
      <div class="controls">
        <div @click="cancel" class="btn btnDanger">Cancel</div>
        <AppButton>Save</AppButton>
      </div>
    </form>
  </div>
</section>
</template>

<script>
import AppInput from "../UI/Controls/Input.vue"
import AppTextArea from "../UI/Controls/TextArea.vue"
import AppButton from "../UI/Controls/Button.vue"

export default {
  components: { AppInput, AppTextArea, AppButton },
  props: {
    postEdit: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      post: this.postEdit ? { ...this.postEdit } : {
        title: '',
        descr: '',
        content: '',
        img: '',
      }
    }
  },
  methods: {
    onSubmit() {
      this.$emit('submit', this.post)
    },
    cancel() {
      this.$router.push('/admin')
    }
  }
}
</script>

<style lang="scss" scoped>
.controls {
  text-align: center;
  margin: 20px 0;
}
</style>