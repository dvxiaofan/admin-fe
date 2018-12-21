/*
 * @Author: xiaofan 
 * @Date: 2018-12-20 22:42:15 
 * @Last Modified by: xiaofan
 * @Last Modified time: 2018-12-21 23:13:01
 */


class MUtil {
	request(param) {
		return new Promise((resolve, reject) => {
			$.ajax({
				type			: param.type 			|| 'get',
				url				: param.url 			|| '',
				dataType	: param.dataType 	|| 'json',
				data			: param.data 			|| null,
				success		: res => {
					// 请求成功
					if(res.status === 0) {
						typeof resolve === 'function' && resolve(res.data, res.msg);
					} 
					// 去登录
					else if(res.status === 10) {
						this.doLogin();
					} 
					else {
						typeof reject === 'function' && reject(res.msg || res.data);
					}
				},
				error			: err => {
					typeof reject === 'function' && reject(err.statusText);
				}
			})
		})
	}

	// 跳转登录页面
	doLogin() {
		// 附带原来的参数，并对参数进行处理，防止有特殊字符
		window.location.href = '/login?redirect=' +encodeURIComponent(window.location.pathname);
	}

}

export default MUtil;