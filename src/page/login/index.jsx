/*
 * @Author: xiaofan
 * @Date: 2018-12-21 21:31:33
 * @Last Modified by: xiaofan
 * @Last Modified time: 2018-12-21 23:27:39
 */

import React from "react";
import MUtil from "util/mm.jsx"
import User  from "service/user-service.jsx" 

import "./index.scss";

const _mm = new MUtil();
const _user = new User();

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
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
	
	// 登录
	onSubmit(e) {
    _user.login({
      username: this.state.username,
      password: this.state.password
    }).then(res => {
      console.log(res);
      
    }, err => {
      console.log(err);
      
    })
		
	}


}

export default Login;
