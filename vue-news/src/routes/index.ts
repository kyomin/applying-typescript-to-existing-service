import Vue from 'vue';
import VueRouter, { RawLocation, Route } from 'vue-router';
import { ItemView, UserView } from '../views';
import createListView from '../views/CreateListView';
import bus from '../utils/bus';
import store from '../store/index.js';

Vue.use(VueRouter);

export default new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			redirect: '/news',
		},
		{
			path: '/news',
			name: 'news',
			component: createListView('NewsView'),
			async beforeEnter(
				routeTo: Route,
				routeFrom: Route,
				next: (to?: RawLocation | false | ((vm: Vue) => any) | void) => void
			) {
				bus.$emit('on:progress');

				// try {
				// 	await store.dispatch('FETCH_LIST', routeTo.name);
				// 	next();
				// } catch (err) {
				// 	console.log(err);
				// 	// 다음 페이지로 넘어가지 못했을 때, 이동할 에러 페이지를 명시하는 것이 좋다.
				// 	// next('/error');
				// }
				next();
			},
		},
		{
			path: '/ask',
			name: 'ask',
			component: createListView('AskView'),
			beforeEnter(
				routeTo: Route,
				routeFrom: Route,
				next: (to?: RawLocation | false | ((vm: Vue) => any) | void) => void
			) {
				bus.$emit('on:progress');
				store
					.dispatch('FETCH_LIST', routeTo.name)
					.then(() => next())
					.catch(() => new Error('failed to fetch news items'));
			},
		},
		{
			path: '/jobs',
			name: 'jobs',
			component: createListView('JobsView'),
			beforeEnter(
				routeTo: Route,
				routeFrom: Route,
				next: (to?: RawLocation | false | ((vm: Vue) => any) | void) => void
			) {
				bus.$emit('on:progress');
				store
					.dispatch('FETCH_LIST', routeTo.name)
					.then(() => next())
					.catch(() => new Error('failed to fetch news items'));
			},
		},
		{
			path: '/item/:id',
			component: ItemView,
			beforeEnter(
				routeTo: Route,
				routeFrom: Route,
				next: (to?: RawLocation | false | ((vm: Vue) => any) | void) => void
			) {
				bus.$emit('on:progress');
				const itemId = routeTo.params.id;
				store
					.dispatch('FETCH_ITEM', itemId)
					.then(() => next())
					.catch(() => new Error('failed to fetch item details'));
			},
		},
		{
			path: '/user/:id',
			component: UserView,
			beforeEnter(
				routeTo: Route,
				routeFrom: Route,
				next: (to?: RawLocation | false | ((vm: Vue) => any) | void) => void
			) {
				bus.$emit('on:progress');
				const itemId = routeTo.params.id;
				store
					.dispatch('FETCH_USER', itemId)
					.then(() => next())
					.catch(() => new Error('failed to fetch user profile'));
			},
		},
	],
});
