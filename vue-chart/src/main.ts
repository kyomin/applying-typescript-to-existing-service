import Vue from 'vue';
import App from './App.vue';
import ChartPlugin from './plugins/ChartPlugin';

/*
  Vue.use를 취함으로써
  ChartPlugin 안에 있는 install의 내부 코드가 실행된다.

  뷰엑스, 뷰라우터도 동일한 원리로 플러그인이 주입되는 것이다.
*/
Vue.use(ChartPlugin);
Vue.config.productionTip = false;

new Vue({
	render: (h) => h(App),
}).$mount('#app');
