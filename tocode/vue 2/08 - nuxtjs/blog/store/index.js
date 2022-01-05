import axios from "axios";

// nuxt предлагает нам разделить функции store для оптимизации
export const state = () => ({
  postsLoaded: [],
  commentsLoaded: [],
})

export const mutations = {
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
  addComment(state, comment) {
    console.log(comment)
    state.commentsLoaded.push(comment)
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
  addPost({commit}, post) {
    // payload можно не писать, когда данные точно известны
    // за место этого указываем что за данные в имени
    // console.log(post);
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
      .then(res => {
        commit('addComment', {...comment, id: res.data.name})
      })
      .catch(e => console.log(e))
  },
}

export const getters = {
  getPostLoaded(state) {
    return state.postsLoaded
  }
}