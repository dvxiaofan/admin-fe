/*
 * @Author: DevZhang 
 * @Date: 2019-05-13 15:01:58 
 * @Last Modified by: DevZhang
 * @Last Modified time: 2019-05-13 15:15:48
 */



import MUtil from 'util/mm.jsx';

const _mm = new MUtil();

class User {
    // 登录
    login(loginInfo) {
        // 返回 promise ，方便采用链式操作
        return _mm.request({
            url: '/manage/user/login.do',
            type: 'post',
            data: loginInfo
        });
    }

    // 退出登录
    logout() {
        return _mm.request({
            url: '/user/logout.do',
            type: 'post'
        });
    }

    // 输入字段非空验证
    checkLoginInfo(loginInfo) {
        let username = $.trim(loginInfo.username),
            password = $.trim(loginInfo.password);

        if (typeof username !== 'string' || username.length === 0) {
            return {
                status: false,
                msg: '用户名不能为空！'
            };
        }
        if (typeof password !== 'string' || password.length === 0) {
            return {
                status: false,
                msg: '密码不能为空！'
            };
        }
        return {
            status: true,
            msg: '验证通过'
        };
    }
}

export default User;