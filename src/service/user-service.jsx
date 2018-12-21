/*
 * @Author: xiaofan 
 * @Date: 2018-12-21 23:19:43 
 * @Last Modified by: xiaofan
 * @Last Modified time: 2018-12-21 23:24:09
 */

import MUtil from 'util/mm.jsx';

const _mm = new MUtil();

class User {
	login(loginInfo) {
		// 使其返回值是一个promise，可以采用链式操作
		return _mm.request({
			url: '/manage/user/login.do',
			type: 'post',
			data: loginInfo
		})
	}
}

export default User;