<template>
<new-post-form
  @submit="onSubmit"
  :postEdit="post" />
</template>

<script>
import axios from 'axios'
import newPostForm from '~/components/Admin/NewPostForm.vue'

export default {
  components: { newPostForm },
  layout: 'admin',
  // Nuxt позволяет использовать asyncData для всех асинхронных действий с датой
  // тем самым на страницу попадают нужные данные для индексации содержимого
  // синтаксис такой же как у data(), единственное функция должна вернуть новый промис
  // функция запускается до начала создания страницы и не имеет доступа к данным this.posts (контекст еще не создан)
  // ожидает полной загрузки всех данных и только потом показывает пользователю все (ждет timeout тоже)
  asyncData(context) {
    //return new Promise((resolve, reject)=>{
      // в этой функции мы прописываем все, что ожидаем извне
        // resolve - почти всегда является объектом
        // reject(new Error('Reject'))
        // c этим не так часто работают, т.к. есть .then .catch
        return axios.get(`https://tocode-blog-nuxt-70750-default-rtdb.firebaseio.com/posts/${context.params.postId}.json`)
          .then(res => {
            return {
              post: { ...res.data, id: context.params.postId }
            }
          })
          .catch(e => context.error(e))
    //})
    // .then((data)=>{
    //   return data
    // })
    // .catch((e) => {
    //   // если будет ошибка, сработает layout error
    //   context.error(e)
    // })
  },

  methods: {
    onSubmit(post) {
      console.log('Post editing!', post)
      this.$store.dispatch('editPost', post)
        .then(() => {
          this.$router.push('/admin')
        })
    },
  },
}
</script>

<style lang="scss" scoped>

</style>