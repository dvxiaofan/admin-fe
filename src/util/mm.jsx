/*
 * @Author: xiaofan 
 * @Date: 2018-12-20 22:42:15 
 * @Last Modified by: xiaofan
 * @Last Modified time: 2018-12-22 16:55:13
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

	// 获取URL参数
	getUrlParam(name) {
		const reg = new RegExp('(^|&)' + name + '=([^&]*)($|&)'),
			// 从？后面开始匹配规则
			queryStr = window.location.search.split('?')[1] || '',
			result = queryStr.match(reg);

		// 先判断result是否存在
		return result ? decodeURIComponent(result[2]) : null;
	}

	// 错误提示
	errorTips(errMsg) {
		alert(errMsg || '好像有个小问题');
	}

}

export default MUtil;