import Vue from 'vue'
import Router from 'vue-router'

// 1.定义路由

// 2.引入定义的路由

import Home from '@/components/home/index.vue'
import Casts from '@/components/casts/index.vue'
import CastsDetail from '@/components/casts/detail/index.vue'
import Movie from '@/components/movie/index.vue'
import Directors from '@/components/directors/index.vue'
import User from '@/components/user/index.vue'

import HomeHeader from '@/components/home/header/index.vue'
import CastsHeader from '@/components/casts/header/index.vue'
import CastsDetailHeader from '@/components/casts/detail/header/index.vue'
import CastsDetailFooter from '@/components/casts/detail/footer/index.vue'
import MovieHeader from '@/components/movie/header/index.vue'
import DirectorsHeader from '@/components/directors/header/index.vue'
import UserHeader from '@/components/user/header/index.vue'

import Nologin from '@/components/user/nologin/index.vue'
import Login from '@/components/user/login/index.vue'
import Register from '@/components/register/index.vue'
import MainFooter from '@/components/mainfooter/index.vue'

Vue.use(Router)

// 3.定义路由规则
const routes = [
	{
		path:'/',
		redirect: '/home'
	},
	{
		path: '/home',
		//component: Home,
		components: {
			header: HomeHeader,
			content: Home,
			footer: MainFooter
		},
		alias: '/h'
	},
	{
		path: '/casts',
		//component: Casts
		components: {
			header: CastsHeader,
			content: Casts,
			footer: MainFooter
		}
	},
//	{	// /castsDetail?id=124433
//		path: '/castsDetail',
//		component: CastsDetail
//	},
	{
		path: '/castsDetail/:name/:id', // /castsDetail?id=124433
		name: 'castsDetail', //可以用来传递值 --- 命名路由
		components: {
			header: CastsDetailHeader,
			content: CastsDetail,
			footer: CastsDetailFooter
		},
		props: true //组建js中添加一个选项 props：['id','name'],那么就可以采用{{id}}代替{{this.$route.params.id}}
	},
	{
		path: '/movie',
		components: {
			header: MovieHeader,
			content: Movie,
			footer: MainFooter
		}
	},
	{
		path: '/directors',
		//component: Directors
		components: {
			header: DirectorsHeader,
			content: Directors,
			footer: MainFooter
		}
	},
	{
		path: '/user',
		//component: User,
		components: {
			header: UserHeader,
			content: User,
			footer: MainFooter
		},
		children: [
			{
				path: '',
				redirect: 'nologin'
			},
			{
				path: 'nologin',
				component : Nologin
			},
			{
				path: 'login',
				component : Login
			}
		]
	},
	{
		path: '/register',
		components: {
			content: Register
		}
	}
]

// 4.创建路由实例
const router = new Router({
	routes
})

// 5.暴露路由实例

export default router

// 6.在入口文件处main.js中引入挂载在根实例，整个应用就可以访问路由

// 7. 跳转路由设置，在需要的地方footer/index.vue
//<router-link to='/user' tag='li'></router-link>