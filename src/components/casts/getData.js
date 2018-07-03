import axios from 'axios'
const myAjax = {
	getCastsData (config) {
		axios.get(config.url,{
			params: config.data
		}).then(function (res) {
			config.success(res)
		})
		  .catch(function (err) {
		  	config.fail(err)
		  })
	}
}

export default myAjax