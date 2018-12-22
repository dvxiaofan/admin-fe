/*
 * @Author: xiaofan 
 * @Date: 2018-12-18 21:12:58 
 * @Last Modified by: xiaofan
 * @Last Modified time: 2018-12-22 18:16:34
 */



import React 		from 'react';
import { Link } from 'react-router-dom';
import MUtil 		from "util/mm.jsx"
import User  		from "service/user-service.jsx" 


const _user = new User();
const _mm 	= new MUtil();

class TopNav extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			username: _mm.getStorage('userInfo').username || ''
		}
	}
	
	render() {
		return (
			<nav className="navbar navbar-default top-navbar">
				<div className="navbar-header">
					<Link className="navbar-brand" to="/"><b>HELLO</b>XMALL</Link>
				</div>

				<ul className="nav navbar-top-links navbar-right">
					<li className="dropdown">
						<a className="dropdown-toggle" href="javascript:;">
							<i className="fa fa-user fa-fw"></i>
							{
								this.state.username
								? <span>欢迎，{this.state.username}</span>
								: <span>欢迎您</span>
							}
							<i className="fa fa-caret-down"></i>
						</a>

						<ul className="dropdown-menu dropdown-user">
							<li>
								<a onClick={ () => { this.onLogout() } }>
									<i className="fa fa-sign-out fa-fw"></i>
									<span>退出登录</span>
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</nav>
		)
	}

	// 退出登录
	onLogout() {
		_user.logout().then(res => {
			_mm.removeStorage('userInfo');
			window.location.href = '/login';
		}, errMsg => {
			_mm.errorTips(errMsg)
		});
	}
}


export default TopNav;