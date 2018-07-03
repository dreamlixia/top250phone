import Vue from 'vue'
import { Swipe, SwipeItem } from 'mint-ui'

Vue.use(Swipe)
Vue.use(SwipeItem)

export default {
	methods: {
		goDirectors () {
			//this.$router.push('/directors')字符串的形式
			this.$router.push({path:'/directors'})
		},
		goCastsDetail (id) {
			//this.$router.push({path: '/castsDetail?id=' + id})
			//this.$router.push({path: '/castsDetail', query:{id:id}})
			//this.$router.push('/castsDetail/' + id)
			this.$router.push({name: 'castsDetail', params:{id:id}})
			
		}
	}
}