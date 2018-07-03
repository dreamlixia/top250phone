
import axios from 'axios'
import Vue from 'vue'
import { Loadmore, Toast, CellSwipe } from 'mint-ui'
Vue.use(Loadmore)
import myAjax from './getData.js'
export default {
	data () {
		return {
			castslist: [],
			allLoaded: false,
			skipNum: 0
		}
	},
	methods: {
		loadTop () {
			setTimeout(() => {
//				var _this = this
				axios.get('http://localhost:3000/api/castspaging',{
					params: {
						limitNum: 5,
						skipNum: 0
					}
				}).then((res) => {
					this.castslist = res.data
					this.skipNum = 0
					this.$refs.loadmore.onTopLoaded();
				})
				  .catch((err) => {
				  	console.log(err)
				  })
			},1000)
		},
		loadBottom () {
			setTimeout(() => {
				axios.get('http://localhost:3000/api/castspaging',{
					params: {
						limitNum: 5,
						skipNum: this.skipNum
					}
				}).then((res) => {
					res.data.length > 0 ? this.allLoaded = false : this.allLoaded = true
					this.allLoaded == false ? this.skipNum += 1 : Toast('数据已全部加载完毕')
					
					this.castslist = [...this.castslist, ...res.data]
					
					this.$refs.loadmore.onBottomLoaded()
				})
				  .catch((err) => {
				  	console.log(err)
				  })
			}, 1000)
		},
//		getCastsDataSuccess (res) {
//			const { data } = res
//			this.castslist = data
//		},
//		getDataFail (err) {
//			console.log(err)
//		}
	},
	mounted () {
		
	}
}
