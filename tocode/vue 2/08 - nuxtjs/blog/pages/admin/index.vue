<template>
    <PostsLists :admin="true" :posts="postsLoaded" />
</template>

<script>
import PostsLists from "~/components/Blog/PostsLists.vue";

export default {
  layout: 'admin',
  computed: {
    postsLoaded() {
      return this.$store.getters.getPostLoaded
    }
  },
  components: { PostsLists }
}
</script>

<style lang="scss">

</style>