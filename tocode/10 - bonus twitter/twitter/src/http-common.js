// настройки для работы axios c firebase
import axios from 'axios'

// ${baseURL}/tweets
export default axios.create({
  baseURL: 'https://tocode-twitter-default-rtdb.firebaseio.com',
  header: {
    'Content-type': 'application/json'
  }
})