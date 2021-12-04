<template>
  <div class="container">
    <form class="card" @submit.prevent="createPerson">
      <h2>Работа с базой данных</h2>

      <div class="form-control">
        <label for="name">Введите имя:</label>
        <input id="name" type="text" v-model.trim="name">
      </div>

      <button class="btn primary" :disabled="name.length === 0">Создать человека</button>
    </form>

    <AppPeopleList
     :people="people"
     @load="loadPeople"
    ></AppPeopleList>
  </div>
</template>

<script>
import axios from 'axios';
import AppPeopleList from './AppPeopleList.vue';

const baseUrl = 'https://vue-http-firebase-vladilen-default-rtdb.firebaseio.com/people.json';

export default {
  data() {
    return {
      name: '',
      people: [],
    }
  },
  mounted() {
    this.loadPeople()
  },
  methods: {
    async createPerson() {
      const urlParams = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // В запросе ниже указываем данные, отправляемые на сервер
        // Предварительно преобразовав их в объект JSON
        body: JSON.stringify({
          firstName: this.name
        })
      }

      // Отправляем запрос на сервер
      const response = await fetch(baseUrl, urlParams);
      // Ожидаем поступления данных
      const firebaseData = await response.json();

      this.people.push({
        firstName: this.name,
        id: firebaseData.name
      });

      this.name = '';
    },
    async loadPeople() {
      // Axios возвращает объект, с полем data - которое содержит
      // ключ = id, значение = объект { firstName: "...", ... }
      // применяем деструктуризацию и сразу забираем данные в массив data
      const { data } = await axios.get(baseUrl);
      this.people = Object.keys(data).map( (key) => {
        return {
          id: key,
          // firstName: data[key].firstName,
          ...data[key]
        }
      })
    }
  },
  components: { AppPeopleList }
}
</script>

<style>

</style>
