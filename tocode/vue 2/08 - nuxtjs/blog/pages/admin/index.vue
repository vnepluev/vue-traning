<template>
    <PostsLists :posts="posts" />
</template>

<script>
import PostsLists from "~/components/Blog/PostsLists.vue";

// картинки собак
import dog1 from '~/assets/img/dog1.jpg'
import dog2 from '~/assets/img/dog2.jpg'
import dog3 from '~/assets/img/dog3.jpg'

export default {
  layout: 'admin',
  data() {
    return {
      posts: [
        {
          id: 1,
          title: 'Title 1',
          descr: 'lorem5 lorem5 lorem5 lorem5 lorem5 lorem5 lorem5',
          img: dog1
        },
        {
          id: 2,
          title: 'Title 2',
          descr: 'lorem5 lorem5 lorem5 lorem5 lorem5 lorem5 lorem5',
          img: dog2
        },
        {
          id: 3,
          title: 'Title 3',
          descr: 'lorem5 lorem5 lorem5 lorem5 lorem5 lorem5 lorem5',
          img: dog3
        },
      ],
    }
  },
  components: { PostsLists }
}
</script>

<style lang="scss">

</style>