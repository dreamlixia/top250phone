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
			flag:true,
			registerFlag: false,
			code: '',
			codeState: '',
			tel: '',
			telState: '',
			password: '',
			passwordState: '',
			CodeStr: '发送短信验证码',
			time: 5,
			adminCode: '',
			start: 0,
			end: 0
		}
	},
	methods: {
		register () {
			if(this.telState != 'success'){
				Toast('请检查手机号码')
				return;
			}
			if(this.code != this.adminCode){
				Toast('验证码错误')
				this.codeState == 'error'
				return;
			}
			if(this.passwordState != 'success'){
				Toast('请输入正确的密码')
				return;
			}
			this.end= new Date().getTime();
			if(this.end - this.start > 300000){
				Toast('验证码错误,请重新发送')
				this.codeState == 'error'
				return;
			}
			
			axios.post('http://localhost:3000/api/register',{
				tel: this.tel,
				code :'',
				password: md5(this.password)
			})
			.then(this.registerSuccess)
			.catch(this.registerFail)
		},
		registerSuccess(res){
			console.log(res)
			if(res.data == 1){
				Toast('注册成功')
				this.$router.push('/')
			} else if(res.data == 0){
				Toast('注册失败')
			}
		},
		registerFail(err){
			console.log(err)
		},
		startTime () {
			this.flag = false
			var timer = ''
			clearInterval(timer)
			var timer = setInterval(()=> {
				this.CodeStr = this.time + 's后重新发送'
				this.time -= 1
				if(this.time == -1){
					clearInterval(timer);
					this.CodeStr = '发送短信验证码'
					this.time = 5
					this.flag = true
				}
			},1000)
		},
		sendCode () {
			if(this.tel == ''){
				Toast('请输入手机号');
				return;
			}
			if(this.telState === 'success'){
//				if(this.tel == '17611467350'){
//					this.telState = 'warning'
//					Toast('该手机号已经注册，请重新登录')
//				}else{
//					console.log('开始倒计时')
//					this.startTime()
//				}
			axios.get('http://localhost:3000/api/sendCode?tel='+ this.tel)
				.then((res) => {
					var _this = this
					console.log(res.data)
					if(res.data == 1){
						_this.telState = 'warning'
						Toast('该手机号已经注册，请直接登录')
						_this.$router.push('/logining')
					}else{
						_this.startTime()
						if(res.data.state == 1){
							Toast('验证码已发送至您的手机')
							_this.start = new Date().getTime()
							_this.adminCode = res.data.code
						}else{
							Toast('验证码发送失败')
						}
					}
				})
				.catch((err) => {
					console.log(err)
				})
			}
		}
	},
	watch: {
		tel (newVal, oldVal) {
			if (tool.isPoneAvailable(newVal)) {
				this.telState = 'success'
				this.registerFlag = true
			} else {
				this.telState = 'error'
			}
			this.tel == "" ? this.telState = '' : this.State
		},
		code ( newVal, oldVal ) {
			if( newVal.length == 4) {
				this.codeState = 'success'
				this.registerFlag = true
			} else {
				this.codeState = 'error'
			}
			this.code == "" ? this.codeState = '' : this.codeState
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
