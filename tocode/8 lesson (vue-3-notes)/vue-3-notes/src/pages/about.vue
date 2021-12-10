<template>
  <p>{{ getUsers }}</p>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    getUsers() {
      return this.$store.getters.getUsers;
    },
  },
};
</script>

<style lang="sass"></style>
