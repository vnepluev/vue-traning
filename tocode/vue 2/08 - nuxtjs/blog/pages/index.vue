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
import dog2 from '~/assets/img/dog2.jpg'
import dog3 from '~/assets/img/dog3.jpg'

export default {
  name: 'IndexPage',
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
  components: { header1, promo, intro, postsLists, contacts },
}
</script>
