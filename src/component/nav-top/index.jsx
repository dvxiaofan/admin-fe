/*
 * @Author: DevZhang 
 * @Date: 2019-05-10 14:09:45 
 * @Last Modified by: DevZhang
 * @Last Modified time: 2019-05-13 16:28:49
 */


import React from 'react';
import { Link } from 'react-router-dom';
import MUtil from 'util/mm.jsx';
import User from 'service/user-service.jsx';


const _user = new User();
const _mm = new MUtil();


class NavTop extends React.Component {
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
					<Link to="/" className="navbar-brand"><b>X</b>MALL</Link>
				</div>

				<ul className="nav navbar-top-links navbar-right">
					<li className="dropdown">
						<a className="dropdown-toggle" href="javascript:;">
							<i className="fa fa-user fa-fw"></i>
							{
								this.state.username
								? <span>欢迎，{ this.state.username }</span>
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
	
	onLogout() {
		_user.logout()
		.then( () => {
			_mm.removeStorage('userInfo');
			window.location.href = '/login';
		}, errMsg => {
			_mm.errorTips(errMsg);
		});
	}
}


export default NavTop;