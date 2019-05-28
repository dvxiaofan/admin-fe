/*
 * @Author: DevZhang 
 * @Date: 2019-05-13 14:12:04 
 * @Last Modified by: DevZhang
 * @Last Modified time: 2019-05-28 13:10:57
 */



import React from 'react';
import User from 'service/user-service.jsx';
import MUtil from 'util/mm.jsx';

import './index.scss';

const _user = new User();
const _mm = new MUtil();


class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            redirect: _mm.getUrlParam('redirect') || '/' 
        };
    }

    componentWillMount() {
        document.title = '登录 - XMALL ADMIN';
    }

    render() {
        return (
            <div className="col-md-4 col-md-offset-4">
                <div className="panel panel-default login-panel">
                    <div className="panel-heading">欢迎登录 - XMALL 后台管理系统</div>
                    <div className="panel-body">
                        <div className="form-group">
                            <input
                                type="text" 
                                className="form-control" 
                                id="inputUserName" 
                                name="username"
                                placeholder="User Name"
                                onChange={ e => this.onInputChange(e) }
                                onKeyUp={ e => this.oninputKey(e) }
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control" 
                                id="inputPassword" 
                                name="password"
                                placeholder="Password"
                                onChange={ e => this.onInputChange(e) }
                                onKeyUp={ e => this.oninputKey(e) }
                            />
                        </div>
                        <button
                            className="btn btn-lg btn-block btn-primary"
                            onClick={ e => this.onSubmit(e) }
                            >
                            登录
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    // 用户名和密码发生改变
    onInputChange(e) {
        let inputName = e.target.name;
        this.setState({
            [inputName]: e.target.value
        });
    }
    
    // 敲回车进行登录动作
    oninputKey(e) {
        if(e.keyCode === 13) this.onSubmit();
    }
    
    // 登录动作
    onSubmit(e) {
        let loginInfo = {
            username: this.state.username,
            password: this.state.password
        },
            checkResult = _user.checkLoginInfo(loginInfo);

        if (checkResult.status) {
            _user.login(loginInfo)
            .then( res => {
                _mm.setStorage('userInfo', res);
                this.props.history.push(this.state.redirect)
            }, errMsg => {
                _mm.errorTips(errMsg)
            })
        } else {
            _mm.errorTips(checkResult.msg);
        }
    }
}


export default Login;













