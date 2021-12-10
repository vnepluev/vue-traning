import { createApp } from 'vue';
import App from './App.vue';
import alertMixin from './alertMixin.js';
import './theme.css';

createApp(App).mixin(alertMixin).mount('#app');
