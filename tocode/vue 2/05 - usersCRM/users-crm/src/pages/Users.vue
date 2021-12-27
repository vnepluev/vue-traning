<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <!-- table -->
        <table>
          
          <!-- head -->
          <thead>
            <tr>
              <th @click="sort('name')">Name <span v-html="arrow"></span></th>
              <th @click="sort('age')">Age <span v-html="arrow"></span></th>
              <th @click="sort('gender')">Gender <span v-html="arrow"></span></th>
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
        <p>
          <span>sort: {{ currentSort }} - {{ currentSortDir }}</span>
          <p>page: {{ page.current }}</p>
        </p>
      </div>
    </section>

    <!-- buttons -->
    <section>
      <div class="container">
        <div class="button-list">
          <div class="btn btnPrimary" @click="prevPage">&#8592;</div>
          <div class="btn btnPrimary" @click="nextPage">&#8594;</div>
        </div>
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
      currentSortDir: 'asc',
      page: {
        current: 1,
        length: 3
      }
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
    },
    // pagination
    prevPage() {
      if (this.page.current > 1) this.page.current -= 1
    },
    nextPage() {
      if ( (this.page.current * this.page.length) < this.users.length) {
        this.page.current += 1
      };
    }
  },
  computed: {
    usersSort() {
      return this.users.sort( (a, b) => {
        let mod = 1;
        if (this.currentSortDir === 'desc') mod = -1;
        if (a[this.currentSort] < b[this.currentSort]) return -1 * mod;
        if (a[this.currentSort] > b[this.currentSort]) return 1 * mod;
      }).filter( (row, index) => {
        let start = (this.page.current - 1) * this.page.length;
        let end = this.page.current * this.page.length;
        if (index >= start && index < end) return true;

      } );
    },
    arrow() {
      const res = this.currentSortDir === 'asc' ? '&#8595;' : '&#8593;';
      return res; 
    }
  }
}
</script>

<style lang="scss" scoped>
.button-list {
  width: 100%;
  text-align: center;
  .btn {
    border-radius: 60px;
    margin: 0 20px;
  }
}

img {
  width: 60px;
  height: auto;
  border-radius: 50%;
  margin-right: 16px;
}
</style>