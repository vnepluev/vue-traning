import axios from "axios";

// nuxt предлагает нам разделить функции store для оптимизации
// и разбить на константы: actions, mutations и т.п.
export const state = () => ({
  postsLoaded: [],
  token: null,
})

export const mutations = {
  setToken(state, token) {
    state.token = token
  },
  destroyToken(state) {
    state.token = null
  },
  setPosts(state, post) {
    state.postsLoaded = post
  },
  addPost(state, post) {
    console.log(post)
    state.postsLoaded.push(post)
  },
  editPost(state, postEdit) {
    const postIndex = state.postsLoaded.findIndex(post => post.id === postEdit)
    state.postsLoaded[postIndex] = postEdit
  },
}

export const actions = {
  nuxtServerInit({commit}, context) {
    // функция запустится только тогда, когда произойдет инициализация Nuxt
    // действий может быть несколько
    return axios.get('https://tocode-blog-nuxt-70750-default-rtdb.firebaseio.com/posts.json')
      .then(res => {
        const postsArray = []
        for(let key in res.data ) {
          postsArray.push({ ...res.data[key], id: key })
        }
        commit('setPosts', postsArray)
      })
      .catch(e => console.log(e))
  },
  authUser({commit}, authData) {
    //
    // Регистрация пользователя
    // https://firebase.google.com/docs/reference/rest/auth#section-create-email-password
    // Аутентификация
    // https://firebase.google.com/docs/reference/rest/auth#section-sign-in-email-password
    //
    const key = 'AIzaSyDafyqHZrLPzr9EeHaIBIx-X8lne1fzM2M'
    return axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key}`, {
      email: authData.email,
      password: authData.password,
      returnSecureToken: true
    })
      .then(res => { commit('setToken', res.data.idToken) })
      .catch(e => {
        console.log(e);
      })
  },
  logoutUser({commit}) {
    commit('destroyToken')
  },
  addPost({commit}, post) {
    // payload можно не писать, когда данные точно известны
    // за место этого указываем что за данные в имени
    return axios.post('https://tocode-blog-nuxt-70750-default-rtdb.firebaseio.com/posts.json', post)
      .then(res => {
        commit('addPost', {...post, id: res.data.name})
      })
      .catch(e => console.log(e))
  },
  editPost({commit}, post) {
    return axios.put(`https://tocode-blog-nuxt-70750-default-rtdb.firebaseio.com/posts/${post.id}.json`, post)
      .then(res => {
        commit('editPost', post)
      })
      .catch(e => console.log(e))
  },
  addComment({commit}, comment) {
    return axios.post('https://tocode-blog-nuxt-70750-default-rtdb.firebaseio.com/comments.json', comment)
      .catch(e => console.log(e))
  },
}

export const getters = {
  getPostLoaded(state) {
    return state.postsLoaded
  },
  checkAuthUser(state) {
    return state.token != null
  }
}