import { createApp } from 'vue';
import App from './App.vue';
import TheHeader from './TheHeader';
import './theme.css';

const app = createApp(App);
// Вначале мы имортируем компонент в переменную обычно с таким же именем, как у компонента
// import TheHeader from './TheHeader';
// Далее, подключаем этот компонент используя кебаб кейс, т.е. имя через -
// этот компонент регистрируется глобально и доступен в любой части проекта
// Для отображения компонента его нужно подключить в копоненте в секции template
// the-header<tab>
app.component('the-header', TheHeader);
app.mount('#app');
