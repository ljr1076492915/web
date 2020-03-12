import 'babel-polyfill';
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import VueI18n from 'vue-i18n';
import { messages } from './components/common/i18n';

import echarts from 'echarts'
Vue.prototype.$echarts = echarts;

import './assets/css/icon.css';
import './assets/css/main.css';
import './assets/css/main.scss';
import './components/common/directives';
import './assets/Icon/iconfont.css';

import Print from 'vue-print-nb'
Vue.use(Print); //注册

import axios from './api/index.js'
Vue.prototype.$axios = axios

Vue.config.productionTip = false;
 Vue.use(VueI18n);
Vue.use(ElementUI, {
    size: 'small'
});
const i18n = new VueI18n({
    locale: 'zh',
    messages
});

/* eslint-disable no-new */
new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount("#app")
