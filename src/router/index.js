import Vue from 'vue';
import Router from 'vue-router';
import VueFire from 'vuefire';
import Collection from 'components/Collection';

Vue.use(Router);
Vue.use(VueFire);

export default new Router({
	routes: [{
		path: '/',
		name: 'Collection',
		component: Collection
	}]
});
