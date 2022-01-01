<template>
  <div class="wrapper-content wrapper-content--fixed">
    <post :post="post" />
    <comments :comments="comments" />
    <new-comment />
  </div>
</template>

<script>
import dog1 from '~/assets/img/dog1.jpg'
import post from '~/components/Blog/Post.vue'
import newComment from '~/components/Comments/NewComment.vue'
import comments from '~/components/Comments/Comments.vue'

export default {
  data() {
    return {
      post: {
          id: 1,
          title: 'Title 1',
          descr: 'lorem5 lorem5 lorem5 lorem5 lorem5 lorem5 lorem5',
          content: 'lorem10lorem10lorem10lorem10lorem10lorem10lorem10lorem10lorem10lorem10lorem10lorem10lorem10',
          img: dog1
      },
      comments: [
        { name: 'Alex', text: 'Привет, это первый коммент' },
        { name: 'Valeriy', text: 'Привет, это второй коммент' },
      ]
    }
  },
  components: { post, comments, newComment },
}
</script>

<style lang="scss">
.post {
  max-width: 900px;
  margin: 0 auto;
}
.post-header {
  text-align: center;
  margin-bottom: 30px;
  img {
    min-width: 400px;
    margin-bottom: 16px;
  }
  p {
    color: #999;
  }
}
.post-body {
  text-align: left;
}
</style>