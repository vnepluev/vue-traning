<template>
  <h1>Только пользователи</h1>
  <ul>
    <li v-for="user in getUsers" :key="user.id">
      <p>{{ user.id }}</p>
      <p>{{ user.name }}</p>
      <p>{{ user.admin ? "Admin" : "User" }}</p>
    </li>
  </ul>
  <p>Количество пользователей: {{ getUsers.length }}</p>
  <p>Пользователь с индексом: {{ userId }} - {{ getUser || "не найден" }}</p>
  <br />
  <input v-model.number="userId" type="number" />
</template>

<script>
export default {
  data() {
    return {
      userId: 1,
    };
  },
  computed: {
    getUser() {
      return this.$store.getters.getUsersById(this.userId);
    },
    getUsers() {
      return this.$store.getters.getUsers;
    },
    getUsersLength() {
      return this.$store.getters.getUsersLength;
    },
  },
};
</script>

<style lang="sass"></style>
