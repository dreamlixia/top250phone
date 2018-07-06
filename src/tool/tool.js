var tool = {
	isPoneAvailable(val) {
	    var myreg=/^[1][3,4,5,6,7,8,9][0-9]{9}$/;
	    if (!myreg.test(val)) {
	        return false;
	    } else {
	        return true;
	    }
	},
	isPasswordAvailable(val){//检测密码由6-12位字母和数字组成
	  	var str = val;
	    if (str == null || str.length <6 || str.length > 12) {
	        return false;
	        
	    }
	    var reg1 = new RegExp(/^[0-9A-Za-z]+$/);
	    if (!reg1.test(str)) {
	        return false;
	    }
	    var reg = new RegExp(/[A-Za-z].*[0-9]|[0-9].*[A-Za-z]/);
	    if (reg.test(str)) {
	        return true;
	    } else {
	        return false;
	    }
	}
}
export default tool