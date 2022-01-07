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

export default {
  name: 'IndexPage',
  components: { header1, intro, postsLists },
  // SEO Block
  head() {
    const title = 'My Blog Page'
    const descr = 'My SSR blog! With Nuxt.js!'
    const type = 'site' // подходит для главной страницы
    return {
      title: title,
      meta: [
        { hid: 'og:title', name: 'og:title', content: title },
        { hid: 'description', name: 'description', content: descr },
        { hid: 'og:description', name: 'og:description', content: descr },
        { hid: 'og:type', name: 'og:type', content: type },
      ],
    }
  },
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
}
</script>
