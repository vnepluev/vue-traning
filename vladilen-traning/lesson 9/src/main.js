import { createApp } from 'vue';
import App from './App.vue';
// в глобальной зоне видимости не рекомендуют подключать
// плохо влияет на производительность и потенциальные ошибки
// при разрастании проекта
//import alertMixin from './alertMixin.js';
import './theme.css';

createApp(App)
  //.mixin(alertMixin)
  .mount('#app');
