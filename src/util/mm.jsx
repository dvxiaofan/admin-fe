/*
 * @Author: xiaofan 
 * @Date: 2018-12-20 22:42:15 
 * @Last Modified by: xiaofan
 * @Last Modified time: 2018-12-23 17:37:55
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

	// 成功提示
	successTips(msg) {
		alert(msg || '操作成功');
	}

	// 错误提示
	errorTips(errMsg) {
		alert(errMsg || '好像有个小问题');
	}

	// 存储缓存数据
	setStorage(name, data) {
		let dataType = typeof data;
		// JSON类型
		if (dataType === 'object') {
			window.localStorage.setItem(name, JSON.stringify(data));
		}
		// 基础类型
		else if (['number', 'string', 'boolean'].indexOf(dataType) >= 0) {
			window.localStorage.setItem(name, data);
		} 
		// 其他不支持的类型 
		else {
			alert('该类型不支持本地存储');
		}
	}
	// 取出缓存数据
	getStorage(name) {
		let data = window.localStorage.getItem(name);
		if(data) {
			return JSON.parse(data);
		}
		else {
			return '';
		}
	}
	// 删除本地存储
	removeStorage(name) {
		window.localStorage.removeItem(name);
	}

}

export default MUtil;