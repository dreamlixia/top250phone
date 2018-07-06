import Vue from 'vue'
import { Field, Header, Toast } from 'mint-ui'
import tool from '@/tool/tool.js'
import axios from 'axios'
import md5 from 'js-md5'
Vue.use(Field)
Vue.use(Header)
export default {
	data () {
		return {
			tel: '',
			telState: '',
			password: '',
			passwordState: '',
			loginFlag: false
		}
	},
	methods: {
		logining () {
			if(this.telState != 'success'){
				Toast('请检查手机号码')
				return;
			}
			if(this.passwordState != 'success'){
				Toast('请输入正确的密码')
				return;
			}
			
			axios.post('http://localhost:3000/api/logining',{
				tel: this.tel,
				password: md5(this.password)
			})
			.then(this.loginingSuccess)
			.catch(this.loginingFail)
		},
		loginingSuccess(res){
			console.log(res)
			if(res.data == 1){
				Toast('登录成功')
				this.$router.push('/')
			} else if(res.data == 0){
				Toast('没有该用户，请先注册')
				this.$router.push('/register')
			} else {
				Toast('密码错误')
			}
		},
		loginingFail(err){
			console.log(err)
		},
		
	},
	watch: {
		tel (newVal, oldVal) {
			if (tool.isPoneAvailable(newVal)) {
				this.telState = 'success'
				this.loginFlag = true
			} else {
				this.telState = 'error'
				this.loginFlag = false
			}
			if(this.tel == ""){
				this.telState = ''
				this.loginFlag = false
			}
			
		},
		password ( newVal, oldVal ) {
			if( tool.isPasswordAvailable(newVal)) {
				this.passwordState = 'success'
			} else {
				this.passwordState = 'error'
			}
			this.password == "" ? this.passwordState = '' : this.passwordState
		}
	}


}
