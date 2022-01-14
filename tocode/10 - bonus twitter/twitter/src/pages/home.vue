<template>
<div v-if="isLoading">
  <spinner />
</div>
<div v-else>
  <div class="tweet-menu-wrapper">
    <div class="tweet-menu">
      <select v-model="sortBy" name="sortBy">
        <option value="date">Sort by date</option>
        <option value="likes">Sort by likes</option>
      </select>
    </div>
  </div>

  <div class="tweets__wrapper" v-for="item in dataSortered" :key="item.id">
    <tweet
      :id="item.id"
      :likes="item.likes"
      :name="item.date"
      :imgUrl="item.avatar"
      @onSubmit="handleLikeSubmit(item)">
        <div class="md-body" v-html="compileMarked(item.body)"></div>
    </tweet>
  </div>

  <button @click="handleModalShow" class="btn btnPrimary btnTweet btnTweetHome">New tweet</button>
  <modal
    title="New Tweet"
    v-if="showModal"
    @onClose="handleModalShow">
      <!-- <tweet-form @onSubmit="handleTweetSubmit" /> -->
      <form @submit.prevent="handleStore">
        <textarea name="body" id="body" v-model="tweet.body"></textarea>
        <button class="btn btnPrimary btnTweet" type="submit">Submit</button>
      </form>
  </modal>
</div>
</template>

<script>
// базовые настройки axios firebase
import http from '../http-common.js'
import { onMounted, ref, reactive, computed } from 'vue'
import { marked } from 'marked'

import Spinner from '../components/UI/Spinner.vue'
import Modal from '../components/UI/Modal.vue'
import Tweet from '../components/UI/Tweet.vue';
import TweetForm from '../components/UI/TweetForm.vue'

export default {
  components: {
    Spinner,
    Modal,
    Tweet,
    TweetForm,
  },
  setup() {
    const isLoading = ref(true)

    const data = ref([
      // {
      //   id: 1,
      //   body: 'Hi word!',
      //   avatar: 'https://tocode.ru/static/_secret/bonuses/1/avatar-1Tq9kaAql.png',
      //   likes: 10,
      //   date: '08-01-2022'
      // },
    ])

    onMounted(() => getTweets())

    // markdown
    const compileMarked = (text) => {
      return marked(text, {santize: true})
    }

    const getTweets = () => http.get('/tweets.json')
      .then((res) => {
        // вынимаем данные id и преобразуем в удобоваримый формат -> в новом массиве
        const nextData = []
        Object.keys(res.data).forEach(key => {
          const item = res.data[key]
          nextData.push({id: key, ...item})
        })
        data.value = nextData
        isLoading.value = false // загрузка данных завершена
      })
      .catch((e) => {
        console.log(e)
      })

    const showModal = ref(false)
    const handleModalShow = () => {
      // решает проблему с быстрым переключением модального окна
      const nextShowModal = showModal.value = !showModal.value
      showModal.value = nextShowModal
    }

    const sortBy = ref('likes')
    const dataSortered = computed(() => {
      return data.value.sort((a,b) => {
        if (a[sortBy.value] < b[sortBy.value]) return 1
        if (a[sortBy.value] > b[sortBy.value]) return -1
      })
    })

    // увеличиваем лайки
    const handleLikeSubmit = (tweet) => {
      // как вариант const tweet = {
      //   ...item,
      //   likes: item.likes + 1
      // }
      http
        .put(`/tweets/${tweet.id+1}.json`, tweet)
        .then(() => {
          tweet.likes += 1
        })
        .catch((e) => {
          console.log(e)
        })
    }

    const handleTweetSubmit = (body) => {
      data.value.push({
        id: data.value.length + 1,
        body,
        avatar: 'https://tocode.ru/static/_secret/bonuses/1/avatar-1Tq9kaAql.png',
        likes: 0,
        date: new Date(Date.now()).toLocaleString()
      })
      handleModalShow()
    }

    const tweet = reactive({
      likes: 0,
      avatar:`https://avatars.dicebear.com/api/male/${Date.now()}.svg`,
      // 'https://tocode.ru/static/_secret/bonuses/1/avatar-1Tq9kaAql.png',
      date: new Date(Date.now()).toLocaleString(),
      body: ''
    })

    const handleStore = () => {
      http.post('/tweets.json', tweet)
      .then(() => {
        // после подтверждения от fb что данные успешно записаны
        tweet.body = ''
        handleModalShow()   // закрываем модальное окно с новым твитом
        getTweets()         // обновляем твиты из firebase
      })
      .catch((e) => {
        console.log(e)
      })
    }

    return {
      isLoading,
      showModal,
      handleModalShow,
      sortBy,
      handleLikeSubmit,
      handleTweetSubmit,
      dataSortered,
      handleStore,
      tweet,
      compileMarked
    }
  }
};
</script>

<style lang="sass"></style>
