/*
 * @Author: DevZhang 
 * @Date: 2019-05-10 14:09:45 
 * @Last Modified by: DevZhang
 * @Last Modified time: 2019-05-11 15:20:41
 */


import React from 'react';
import { Link } from 'react-router-dom';


class NavTop extends React.Component {
    constructor(props) {
        super(props);
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
							<span>欢迎，admin用户</span>
							<i className="fa fa-caret-down"></i>
						</a>

						<ul className="dropdown-menu dropdown-user">
							<li><a><i className="fa fa-sign-out fa-fw"></i> 退出登录</a>
							</li>
						</ul>

					</li>
				</ul>
			</nav>
		)
    }
}


export default NavTop;