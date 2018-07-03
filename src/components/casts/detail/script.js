import axios from 'axios'
export default {
	props: ['id'],//路由组件传参的形式，需要直接显示在页面上的时候
	data () {
		return {
			name: '',
			imgSrc: ''
		}
	},
	methods: {
		getDataSuccess (res) {
			console.log(res);
			const { data } = res;
			this.name = data[0].name;
			this.imgSrc = data[0].avatars.small;
		},
		getDataFail (err) {
			console.log(err)
		}
	},
	mounted () {
		console.log(this);
		//console.log(this.$route.query.id)
		//const {id} = this.$route.query;
		const {id} = this.$route.params;
		axios.get('http://localhost:3000/api/getCastsDetailRoute?id=' + id)
				.then(this.getDataSuccess)
				.catch(this.getDataFail)
	}
}