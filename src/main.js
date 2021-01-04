import Vue from 'vue'
import App from './App.vue'
import axios from './plugins/axios.js'
import router from './router'
import {Lazyload} from "vant";

// import 'vant/lib/index.css';

Vue.use(Lazyload,{lazyComponent: true,});//提前注册懒加载

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

new Vue({
	router,
	render: h => h(App),
}).$mount('#app')
