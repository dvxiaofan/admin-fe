/*
 * @Author: xiaofan
 * @Date: 2018-12-21 21:31:33
 * @Last Modified by: xiaofan
 * @Last Modified time: 2018-12-22 17:14:55
 */

import React from "react";
import User  from "service/user-service.jsx" 
import MUtil from "util/mm.jsx"

import "./index.scss";

const _user = new User();
const _mm   = new MUtil();

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
    document.title = '登录 - XMALL ADMIN'
  }

  render() {
    return (
      <div className="col-md-4 col-md-offset-4">
        <div className="panel panel-default login-panel">
          <div className="panel-heading">欢迎登录 - XMall管理系统</div>
          <div className="panel-body">
            <div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputUsername"
                  name="username"
                  placeholder="User Name"
                  onKeyUp={e => this.onInputKeyUp(e)}
                  onChange={e => this.onInputChange(e)}
                />
              </div>

              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  name="password"
                  placeholder="Password"
                  onKeyUp={e => this.onInputKeyUp(e)}
                  onChange={e => this.onInputChange(e)}
                />
              </div>

              <button
                className="btn btn-lg btn-block btn-primary"
                onClick={e => this.onSubmit(e)}>
                登录
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 用户名和密码发生改变
  onInputChange(e) {
    let inputName = e.target.name;
    this.setState({
      [inputName]: e.target.value
    });
  }
  
  // 敲击回车进行登录
  onInputKeyUp(e) {
    if(e.keyCode === 13) this.onSubmit();
  }
	
  // 登录
  onSubmit(e) {
    let loginInfo = {
      username: this.state.username,
      password: this.state.password
    },
      checkResult = _user.checkLoginInfo(loginInfo);
    
    if(checkResult.status) {
      _user.login(loginInfo).then(res => {
        this.props.history.push(this.state.redirect)
      }, errMsg => {
        _mm.errorTips(errMsg)
      })
    }
    // 验证不通过
    else {
      _mm.errorTips(checkResult.msg);
    }
  }


}

export default Login;
