//import {Toast} from 'Toast'
export default {
//	methods: {
//		pay () {
//			localStorage.isPay = 1
//		}
//	},
	beforeRouteEnter (to,from,next) {
		var r = confirm('你买电影票了吗')
		console.log(r)
		next()

		r ? next() : next(false)

//		localStorage.getItem('isBuy') == 1 
//		? next() 
//		: Toast('没有票不能看电影'); next((vm) => {
//			vm.$router.push('/register')
//		})
//		if(localStorage.getItem('isBuy') == 1 ){
//			next()
//		}else{
//			Toast('没有票不能看电影');
//			next( (vm) =>{
//				vm.$router.push('/register')
//			})
//			//this.$router.push('/register')
//		}
	},
	beforeRouteLeave (to,from,next) {
		var r = confirm('你付钱了吗')
		r ? next() : next(false)
//		if(localStorage.getItem('isPay') == 1 ){
//			next()
//		}else{
//			Toast('想吃霸王餐？');
//			next( false )
//			//this.$router.push('/register')
//		}
	}
}