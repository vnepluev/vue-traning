<template>
<section class="post-list">
  <div class="container">
    <div class="posts__wrapper">
      <post-preview
        v-for="post in posts"
        :key="post.id"
        :admin="admin"
        :post="post" />
    </div>
  </div>
</section>
</template>

<script>
// PostPreview.vue
import postPreview from '~/components/Blog/PostPreview.vue'

export default {
  props: {
    admin: {
      type: Boolean,
      default: false
    },
    posts: {
      type: Array,
      required: true
    }
  },
  components: { postPreview },
}
</script>

<style lang="scss">
.posts__wrapper {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>