<template>
<new-post-form @submit="onSubmit" />
</template>

<script>
import newPostForm from "~/components/Admin/NewPostForm.vue"

export default {
  components: { newPostForm },
  layout: 'admin',
  methods: {
    onSubmit(post) {
      console.log('Post added!', post);
    },
  }
}
</script>

<style lang="scss" scoped>

</style>