<template>
  <div class="container">
    <form class="card" @submit.prevent="createPerson">
      <h2>Работа с базой данных</h2>

      <app-alert :alert="alert" @close="alert = null"></app-alert>

      <div class="form-control">
        <label for="name">Введите имя:</label>
        <input id="name" type="text" v-model.trim="name">
      </div>

      <button class="btn primary" :disabled="name.length === 0">Создать человека</button>
    </form>

    <AppLoader v-if="loading"></AppLoader>

    <AppPeopleList
     v-else
     :people="people"
     @load="loadPeople"
     @remove="removePerson"
    ></AppPeopleList>
  </div>
</template>

<script>
import axios from 'axios';
import AppPeopleList from './AppPeopleList.vue';
import AppAlert from './AppAlert';
import AppLoader from './AppLoader.vue';

const baseUrl = 'https://vue-http-firebase-vladilen-default-rtdb.firebaseio.com/people.json';
const baseUrlDel = 'https://vue-http-firebase-vladilen-default-rtdb.firebaseio.com/';

export default {
  data() {
    return {
      name: '',
      people: [],
      alert: null,
      loading: false,
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
    loadPeople() {
      // Axios возвращает объект, с полем data - которое содержит
        // ключ = id, значение = объект { firstName: "...", ... }
        // применяем деструктуризацию и сразу забираем данные в массив data
        this.loading = true;
        setTimeout(async () => {
          try {
            const { data } = await axios.get(baseUrl);
            if (!data) {
              throw new Error('Список людей пуст')
            }
            this.people = Object.keys(data).map( (key) => {
              return {
                id: key,
                // firstName: data[key].firstName,
                ...data[key]
              }
            })
            this.loading = false;
            } catch (error) {
              this.alert = {
                type: 'danger',
                title: 'Ошибка!',
                text: error.message,
              }
              this.loading = false;
              console.log(error.message);
            }
        }, 1500);
    },
    async removePerson(id) {
      try {
        const name = this.people.find(person => person.id === id).firstName;
        await axios.delete(`${baseUrlDel}people/${id}.json`);
        this.people = this.people.filter(person => person.id !== id);
        this.alert = {
          type: 'primary',
          title: 'Успешно!',
          text: `Пользователь c именем "${name}" был удален`,
        }
      } catch (error) {
        
      }
    },
  },
  components: { AppPeopleList, AppAlert, AppLoader }
}
</script>

<style>

</style>
