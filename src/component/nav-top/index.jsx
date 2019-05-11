/*
 * @Author: DevZhang 
 * @Date: 2019-05-10 14:09:45 
 * @Last Modified by: DevZhang
 * @Last Modified time: 2019-05-11 14:46:46
 */


import React from 'react';


class NavTop extends React.Component {
    constructor(props) {
        super(props);
    }
    
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


export default NavTop;