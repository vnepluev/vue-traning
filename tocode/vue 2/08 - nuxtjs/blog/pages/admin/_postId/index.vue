<template>
<new-post-form
  @submit="onSubmit"
  :postEdit="post" />
</template>

<script>
import newPostForm from '~/components/Admin/NewPostForm.vue'
import dog1 from '~/assets/img/dog1.jpg'

export default {
  components: { newPostForm },
  layout: 'admin',
  methods: {
    onSubmit(post) {
      console.log('Post editing!', post);
    },
  },
  data() {
    return {
      post: {
          id: 1,
          title: 'Title 1',
          descr: 'lorem5 lorem5 lorem5 lorem5 lorem5 lorem5 lorem5',
          content: 'lorem10lorem10lorem10lorem10lorem10lorem10lorem10lorem10lorem10lorem10lorem10lorem10lorem10',
          img: dog1
      },
    }
  },
}
</script>

<style lang="scss" scoped>

</style>