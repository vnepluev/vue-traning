<template>
  <div class="wrapper-content wrapper-content--fixed">
    <header1 />
    <promo />
    <intro title="My lasts posts:" />
    <!-- posts -->
    <posts-lists :posts="posts" />
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

// картинки собак
import dog1 from '~/assets/img/dog1.jpg'

export default {
  name: 'IndexPage',
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
  components: { header1, promo, intro, postsLists, contacts },
}
</script>
