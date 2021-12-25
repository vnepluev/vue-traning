import png1 from '../assets/img/1.png';
import png2 from '../assets/img/2.png';
import png3 from '../assets/img/3.png';
import png4 from '../assets/img/4.png';
import png5 from '../assets/img/5.png';
import png6 from '../assets/img/6.png';
import png7 from '../assets/img/7.png';
import png8 from '../assets/img/8.png';
import png9 from '../assets/img/9.png';
import png10 from '../assets/img/10.png';
import png11 from '../assets/img/11.png';
import png12 from '../assets/img/12.png';
// require('../assets/img/1.png') -> import png1 from '../assets/img/1.png' -> png1

export default {
  state: {
    shopList: [
      {
        id: 1,
        title: 'Nike Red',
        descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut',
        img: png1,
        gallery: [
          { name: 'Nike boots First', img: png1 },
          { name: 'Nike boots Second', img: png2 },
          { name: 'Nike boots Thrid', img: png3 },
        ]
      },
      {
        id: 2,
        title: 'Nike Default',
        descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut',
        img: png4,
        gallery: [
          { name: 'Nike boots First', img: png4 },
          { name: 'Nike boots Second', img: png5 },
          { name: 'Nike boots Thrid', img: png6 },
        ]
      },
      {
        id: 3,
        title: 'Nike Green',
        descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut',
        img: png7,
        gallery: [
          { name: 'Nike boots First', img: png7 },
          { name: 'Nike boots Second', img: png8 },
          { name: 'Nike boots Thrid', img: png9 },
        ]
      },
      {
        id: 4,
        title: 'Nike Street',
        descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut',
        img: png10,
        gallery: [
          { name: 'Nike boots First', img: png11 },
          { name: 'Nike boots Second', img: png12 }
        ]
      }
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    // первым параметром всегда идет state
    // вторым идет getters (имена можем давать произвольные)
    getShopList (state) {
      return state.shopList
    },
    // передаем в функцию state и id
    getProduct: (state) => (id) => {
      return state.shopList.find(product => product.id === +id)
    }
  },
}