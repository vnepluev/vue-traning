<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <!-- table -->
        <table>
          
          <!-- head -->
          <thead>
            <tr>
              <th @click="sort('name')">Name</th>
              <th @click="sort('age')">Age</th>
              <th @click="sort('gender')">Gender</th>
            </tr>
          </thead>
          <!-- /head -->

          <!-- body -->
          <tbody>
            <tr v-for="user in usersSort" :key="user.id">
              <td>
                <img :src="user.img" :alt="user.name">
                <span>{{user.name}}</span>
              </td>
              <td>{{user.age}}</td>
              <td>{{user.gender}}</td>
            </tr>
          </tbody>
          <!-- /body -->

        </table>
        <!-- /table -->
        <p>sort: {{ currentSort }} - {{ currentSortDir }}</p>
      </div>
    </section>
  </div>
</template>


<script>
import axios from 'axios'

export default {
  components: { axios },
  data () {
    return {
      users: [],
      currentSort: 'name',
      currentSortDir: 'asc'
    }
  },
  created() {
    // this.users = [
    //   {id: 1, name: 'Mo', gender: 'male', age: 22},
    //   {id: 2, name: 'Alex', gender: 'male', age: 24},
    // ]
    axios
      .get("https://tocode.ru/static/_secret/courses/1/usersCrmApi.php")
      // если ответ успешно пришел, заносим данные от сервера в массив
      .then((res) => (this.users = res.data))
      // при ошибке - выводим сообщение в консоль
      .catch((err) => console.log(err));
  },
  methods: {
    sort(e) {
      if (e === this.currentSort) {
        this.currentSortDir = (this.currentSortDir === 'asc') ? 'desc' : 'asc'
      };
      this.currentSort = e;
    }
  },
  computed: {
    usersSort() {
      return this.users.sort( (a, b) => {
        let mod = 1;
        console.log(a[this.currentSort]);
        if (this.currentSortDir === 'desc') mod = -1;
        if (a[this.currentSort] < b[this.currentSort]) return -1 * mod;
        if (a[this.currentSort] > b[this.currentSort]) return 1 * mod;
      })
    }
  }
}
</script>

<style lang="scss" scoped>
img {
  width: 60px;
  height: auto;
  border-radius: 50%;
  margin-right: 16px;
}
</style>