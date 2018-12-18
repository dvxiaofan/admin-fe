/*
 * @Author: xiaofan
 * @Date: 2018-12-18 21:13:17
 * @Last Modified by: xiaofan
 * @Last Modified time: 2018-12-18 22:25:20
 */

import React from "react";

class SideNav extends React.Component {
	render() {
		return (
			<nav className="navbar-default navbar-side" role="navigation">
				<div className="sidebar-collapse">
					<ul className="nav" id="main-menu">
						<li>
							<a className="active-menu" href="">
								<i className="fa fa-bar-chart-o" />
								<span>首页</span>
							</a>
						</li>

						<li>
							<a href="">
								<i className="fa fa-list" />
								<span>商品</span>
								<span className="fa arrow" />
							</a>
							<ul className="nav nav-second-level collapse in">
								<li>
									<a href="" aria-current="false">
										<span>商品管理</span>
									</a>
								</li>
								<li>
									<a href="" aria-current="false">
										<span>品类管理</span>
									</a>
								</li>
							</ul>
						</li>

						<li>
							<a href="">
								<i className="fa fa-check-square-o" />
								<span>订单</span>
								<span className="fa arrow" />
							</a>
							<ul className="nav nav-second-level collapse in">
								<li>
									<a href="" aria-current="false">
										<span>订单管理</span>
									</a>
								</li>
							</ul>
						</li>
						<li>
							<a href="">
								<i className="fa fa-user" />
								<span>用户</span>
							</a>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default SideNav;
