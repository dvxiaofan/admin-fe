/*
 * @Author: xiaofan 
 * @Date: 2018-12-21 23:19:43 
 * @Last Modified by: xiaofan
 * @Last Modified time: 2018-12-22 18:05:59
 */

import MUtil from 'util/mm.jsx';

const _mm = new MUtil();

class User {
	// 登录
  login(loginInfo) {
    // 使其返回值是一个promise，可以采用链式操作
    return _mm.request({
      url		: "/manage/user/login.do",
      type	: "post",
      data	: loginInfo
    });
  }
	// 退出登录
  logout() {
    return _mm.request({
      url		: "/user/logout.do",
      type	: "post",
    });
  }

  // 字段非空验证
  checkLoginInfo(loginInfo) {
    let username = $.trim(loginInfo.username),
      password = $.trim(loginInfo.password);
    if (typeof username !== "string" || username.length === 0) {
      return {
        status: false,
        msg: "用户名不能为空"
      };
    }
    if (typeof password !== "string" || password.length === 0) {
      return {
        status: false,
        msg: "密码不能为空"
      };
    }
    return {
      status: true,
      mag: "验证通过"
    };
  }
}

export default User;