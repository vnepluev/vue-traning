import { createStore } from "vuex";

export const store = createStore({
  state: {
    users: [
      { id: 1, name: "Valeriy", admin: true },
      { id: 2, name: "Katia", admin: true },
      { id: 3, name: "Egor", admin: false },
    ],
  },
  getters: {
    // Геттеры пишем с приставкой get<далее то, что хотим получить>
    // Геттеры похожи на функции computed
    // Первым параметром в функцию всегда идет state
    // Если в коде потребуется обратиться к state -> хорошей практикой
    // не обращаться на примую, а задействовать геттеры
    getUsers(state) {
      return state.users;
    },
  },
});
