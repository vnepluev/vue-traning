<template>
  <div class="wrapper-content wrapper-content--fixed">
    <header1 />
    <intro title="My posts:" />
    <!-- posts -->
    <posts-lists :posts="postsLoaded" />
  </div>
</template>

<script>
// @ в адресе, путь будет полный от корня
// ~ в адресе, путь будет относительный
import header1 from '@/components/system/Header.vue'
import intro from '~/components/UI/Intro.vue'
import postsLists from '~/components/Blog/PostsLists.vue'

// картинки собак
import dog1 from '~/assets/img/dog1.jpg'

export default {
  name: 'IndexPage',
  data() {
    return {
      posts: [],
    }
  },
  computed: {
    postsLoaded() {
      return this.$store.getters.getPostLoaded
    }
  },
  components: { header1, intro, postsLists },
}
</script>
