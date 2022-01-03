<template>
  <div class="wrapper-content wrapper-content--fixed">
    <header1 />
    <promo />
    <intro title="My lasts posts:" />
    <!-- posts -->
    <posts-lists :posts="postsLoaded" />
    <contacts />
  </div>
</template>

<script>
// @ в адресе, путь будет полный от корня
// ~ в адресе, путь будет относительный
import header1 from '@/components/system/Header.vue'
import promo from '~/components/Promo.vue'
import intro from '~/components/UI/Intro.vue'
import postsLists from '~/components/Blog/PostsLists.vue'
import contacts from '~/components/Contacts.vue'

export default {
  name: 'IndexPage',
  computed: {
    postsLoaded() {
      return this.$store.getters.getPostLoaded
    }
  },
  components: { header1, promo, intro, postsLists, contacts },
}
</script>
