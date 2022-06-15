import Chart from 'chart.js/auto';
import { VueConstructor } from 'vue/types/umd';

/* 
  뷰 인스턴스의 프로토타입에 Chart 라이브러리를 넣음으로써
  App.vue 등의 컴포넌트에서
  
  new this.$_Chart();
  
  와 같이 호출할 수 있게 된다.
*/
export default {
	install(Vue: VueConstructor) {
		Vue.prototype.$_Chart = Chart;
	},
};
