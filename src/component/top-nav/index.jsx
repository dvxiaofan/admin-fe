/*
 * @Author: xiaofan 
 * @Date: 2018-12-18 21:12:58 
 * @Last Modified by: xiaofan
 * @Last Modified time: 2018-12-18 21:59:53
 */



import React from 'react';


class TopNav extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-default top-navbar" role="navigation">
				<div className="navbar-header">
					<a className="navbar-brand" href="index.html"><b>X</b>Mall</a>
				</div>

				<ul className="nav navbar-top-links navbar-right">
					<li className="dropdown">
						
						<a className="dropdown-toggle" data-toggle="dropdown" href="#" aria-expanded="false">
							<i className="fa fa-user fa-fw"></i> <i className="fa fa-caret-down"></i>
						</a>

						<ul className="dropdown-menu dropdown-user">
							
							<li><a href="#"><i className="fa fa-sign-out fa-fw"></i> 退出登录</a>
							</li>
						</ul>

					</li>
				</ul>
			</nav>
		)
	}
}


export default TopNav;