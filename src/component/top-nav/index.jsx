/*
 * @Author: xiaofan 
 * @Date: 2018-12-18 21:12:58 
 * @Last Modified by: xiaofan
 * @Last Modified time: 2018-12-20 21:46:26
 */



import React from 'react';
import { Link } from 'react-router-dom';


class TopNav extends React.Component {
	constructor(props) {
		super(props);
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
							<span>欢迎，admin xxx</span>
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
		console.log('onLogout');
	}

}


export default TopNav;