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
    <tweet :id="item.id" :likes="item.likes" :name="item.date" :imgUrl="item.avatar">
      <div>{{ item.body }}</div>
    </tweet>
  </div>

  <button @click="handleModalShow" class="btn btnPrimary btnTweet btnTweetHome">New tweet</button>
  <modal
    title="New Tweet"
    v-if="showModal"
    @onClose="handleModalShow"
  >todo: logic for form</modal>
</div>
</template>

<script>
import { ref, computed } from 'vue'
import Spinner from '../components/UI/Spinner.vue'
import Modal from '../components/UI/Modal.vue'
import Tweet from '../components/UI/Tweet.vue';

export default {
  components: {
    Spinner,
    Modal,
    Tweet
  },
  setup() {
    const isLoading = ref(false)

    const data = [
      {
        id: 1,
        body: 'Hi word!',
        avatar: 'https://tocode.ru/static/_secret/bonuses/1/avatar-1Tq9kaAql.png',
        likes: 10,
        date: '08-01-2022'
      },
      {
        id: 2,
        body: 'Hello bro? How are you?',
        avatar: 'https://tocode.ru/static/_secret/bonuses/1/avatar-1Tq9kaAql.png',
        likes: 12,
        date: '07-01-2022'
      },
      {
        id: 3,
        body: 'Im fine bro! Happy New Year!',
        avatar: 'https://tocode.ru/static/_secret/bonuses/1/avatar-1Tq9kaAql.png',
        likes: 8,
        date: '06-01-2022'
      },
    ]

    const showModal = ref(false)
    const handleModalShow = () => {
      // решает проблему с быстрым переключением модального окна
      const nextShowModal = showModal.value = !showModal.value
      showModal.value = nextShowModal
    }

    const sortBy = ref('likes')
    const dataSortered = computed(() => {
      return data.sort((a,b) => {
        if (a[sortBy.value] < b[sortBy.value]) return 1
        if (a[sortBy.value] > b[sortBy.value]) return -1
      })
    })


    return { isLoading, showModal, handleModalShow, sortBy, dataSortered }
  }
};
</script>

<style lang="sass"></style>
