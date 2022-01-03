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
  // Nuxt позволяет использовать asyncData для всех асинхронных действий с датой
  // тем самым на страницу попадают нужные данные для индексации содержимого
  // синтаксис такой же как у data(), единственное функция должна вернуть новый промис
  // функция запускается до начала создания страницы и не имеет доступа к данным this.posts (контекст еще не создан)
  // ожидает полной загрузки всех данных и только потом показывает пользователю все (ждет timeout тоже)
  asyncData(context) {
    return new Promise((resolve, reject)=>{
      // в этой функции мы прописываем все, что ожидаем извне
      setTimeout(()=>{
        // resolve - почти всегда является объектом
        resolve({
          postsLoaded: [
            {
              id: 1,
              title: 'Title 1',
              descr: 'lorem5 lorem5 lorem5 lorem5 lorem5 lorem5 lorem5',
              img: dog1
            },
          ]
        })
        // reject(new Error('Reject'))
        // c этим не так часто работают, т.к. есть .then .catch
      },1000)
    })
    .then((data)=>{
      return data
    })
    .catch((e) => {
      // если будет ошибка, сработает layout error
      context.error(e)
    })
  },
  components: { header1, intro, postsLists },
}
</script>
