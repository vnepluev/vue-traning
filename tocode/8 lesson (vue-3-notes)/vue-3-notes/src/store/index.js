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
    // Первым параметром в функцию всегда идет state
    // Вторым+ параметром идет геттер, именовать можно как угодно
    // Геттеры пишем с приставкой get<далее то, что хотим получить>
    // Геттеры похожи на функции computed
    // Если в коде потребуется обратиться к state -> хорошей практикой
    // не обращаться на примую, а задействовать геттеры
    getAllUsers(state) {
      return state.users;
    },
    // Пользователи, не являющиеся администраторами
    getUsers(state) {
      return state.users.filter((user) => !user.admin);
    },
    getUsersById: (state) => (id) => {
      return state.users.find((user) => user.id === id);
    },
    getUsersLength(state, getters) {
      const pref = "Количество пользователей";
      return `${pref} ${getters.getAllUsers.length}`;
    },
  },
});
