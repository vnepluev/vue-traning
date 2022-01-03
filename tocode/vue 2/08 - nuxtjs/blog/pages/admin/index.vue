<template>
    <PostsLists :admin="true" :posts="posts" />
</template>

<script>
import PostsLists from "~/components/Blog/PostsLists.vue";

// картинки собак
import dog1 from '~/assets/img/dog1.jpg'

export default {
  layout: 'admin',
  data() {
    return {
      posts: [],
    }
  },
  created() {
    setTimeout(()=> {
      this.posts = [
        {
          id: 1,
          title: 'Title 1',
          descr: 'lorem5 lorem5 lorem5 lorem5 lorem5 lorem5 lorem5',
          img: dog1
        },
      ]
    }, 1000)
  },
  components: { PostsLists }
}
</script>

<style lang="scss">

</style>