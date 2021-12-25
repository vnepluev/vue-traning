<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <!-- table -->
        <table>
          
          <!-- head -->
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
            </tr>
          </thead>
          <!-- /head -->

          <!-- body -->
          <tbody>
            <tr v-for="user in users" :key="user.id">
              <td>{{user.name}}</td>
              <td>{{user.age}}</td>
              <td>{{user.gender}}</td>
            </tr>
          </tbody>
          <!-- /body -->

        </table>
        <!-- /table -->
      </div>
    </section>
  </div>
</template>


<script>

export default {
  components: {  },
  data () {
    return {
      users: []
    }
  },
  created() {
    this.users = [
      {id: 1, name: 'Mo', gender: 'male', age: 22},
      {id: 2, name: 'Alex', gender: 'male', age: 24},
    ]
  },
  computed: {
    // чтобы отслеживать изменения в данных нам нужны computed
    // при глобальном подключении vuex, в модулях становится
    // доступна глобальная переменная хранилища $store
    // если нам нужно обратиться к стейте - делаем это обращаясь
    // к getters

  }
}
</script>
