import Home from './components/home/Home.vue';
import Admin from './components/admin/Index.vue';
import Partidas from './components/admin/partidas/Index.vue';

export default [
	{
		path: '/home',
		name: 'index',
		component: Home,
		meta: {}
	},
	{
		path: '/admin',
		name: 'admin',
		component: Admin,
		meta: {}
	},
	{
		path: '/admin/partidas',
		name: 'admin.partidas',
		component: Partidas,
		meta: {}
	}
];