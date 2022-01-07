<template>
  <div class="wrapper-content wrapper-content--fixed">
    <post :post="post" />
    <comments :comments="comments" />
    <new-comment :postId="$route.params.id" />
  </div>
</template>

<script>
import axios from 'axios'
import post from '~/components/Blog/Post.vue'
import newComment from '~/components/Comments/NewComment.vue'
import comments from '~/components/Comments/Comments.vue'

export default {
  // SEO Block - динамическое получение заголовка и описания страницы
  head() {
    const title = this.post.title
    const descr = this.post.descr
    const img = this.post.img // ** обязательно добавить адрес сайта (полный путь)
    const type = 'article' // подходит для страниц блока с контентом
    return {
      title: title,
      meta: [
        { hid: 'og:title', name: 'og:title', content: title },
        { hid: 'description', name: 'description', content: descr },
        { hid: 'og:description', name: 'og:description', content: descr },
        { hid: 'og:type', name: 'og:type', content: type },
        { hid: 'og:img', name: 'og:img', content: img },
      ],
    }
  },
  async asyncData(context) {
    let [post, comments] = await Promise.all([
      axios.get(`https://tocode-blog-nuxt-70750-default-rtdb.firebaseio.com/posts/${context.params.id}.json`),
      axios.get(`https://tocode-blog-nuxt-70750-default-rtdb.firebaseio.com/comments.json`)
    ])

    // const commentsArray = []
    // const commentsArrayRes = []
    // Object.keys(comments.data).forEach(key => {
    //   commentsArray.push(comments.data[key])
    // })
    // // выводим комментарии у которых id совпадают с постом и publish = true
    // for(let i = 0; i < commentsArray.length; i++) {
    //   if (commentsArray[i].postId === context.params.id && commentsArray[i].publish === true) {
    //     commentsArrayRes.push(commentsArray[i])
    //   }
    // }
    const commentsArrayRes = Object.values(comments.data).filter(comment => (comment.postId === context.params.id) && comment.publish === true)

    return {
      post: post.data,
      comments: commentsArrayRes,
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