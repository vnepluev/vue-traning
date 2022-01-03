import axios from "axios";

// nuxt предлагает нам разделить функции store для оптимизации
export const state = () => ({
  postsLoaded: [],
})

export const mutations = {
  addPost(state, post) {
    console.log(post);
    state.postsLoaded.push(post)
  }
}

export const actions = {
  addPost({commit}, post) {
    // payload можно не писать, когда данные точно известны
    // за место этого указываем что за данные в имени
    // console.log(post);
    return axios.post('https://tocode-blog-nuxt-70750-default-rtdb.firebaseio.com/posts.json', post)
      .then(res => {
        commit('addPost', {...post, id: res.data.name})
      })
      .catch(e => console.log(e))
  }
}

export const getters = {

}