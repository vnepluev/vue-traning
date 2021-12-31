<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">

        <!-- errors -->
        <div class="error" v-if="error" style="margin-bottom: 20px;">
          <p>{{ error }}</p>
        </div>

        <!-- search username -->
        <search
          :value="search"
          placeholder="Type username..."
          @search="search = $event"
        />

        <!-- buttons -->
        <button v-if="!repos" class="btn btnPrimary" @click="getRepos">Search</button>
        <button v-else class="btn btnPrimary" @click="getRepos">Search again</button>

        <!-- wrapper -->
        <div class="repos__wrapper" v-if="repos">
          <div class="repos-item" v-for="repo in repos" :key="repo.id">
            <div class="repos-info">
              <a :href="repo.html_url" class="link" target="_blank">{{ repo.name }}</a>
              <span> ⭐ {{ repo.stargazers_count }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
import axios from 'axios'
import search from '@/components/Search.vue'

export default {
  components: { axios, search },
  data () {
    return {
      search: '',
      erorr: null,
      repos: null,
    }
  },
  methods: {
    getRepos() {
      // https://api.github.com/users/vnepluev/repos
      axios
      .get(`https://api.github.com/users/${this.search}/repos`)
        .then(res => {
          this.repos = res.data;
          this.erorr = null;
          console.log(res);
        })
        .catch(err => {
          this.erorr = 'Can`t find this user';
          this.repos = null;
          console.log(err);
        })
    },
  },
  computed: {
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  flex-direction: column;
}
button {
  margin-top: 20px;
}
.repos__wrapper {
  width: 400px;
  margin: 30px 0;
}
.repos-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 10px 0;
  border-bottom: 1px solid #dbdbdb;
}
</style>