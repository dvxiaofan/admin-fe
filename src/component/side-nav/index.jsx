/*
 * @Author: xiaofan
 * @Date: 2018-12-18 21:13:17
 * @Last Modified by: xiaofan
 * @Last Modified time: 2018-12-20 22:59:51
 */

import React from "react";
import { Link, NavLink } from 'react-router-dom';

class SideNav extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<nav className="navbar-default navbar-side" role="navigation">
				<div className="sidebar-collapse">
					<ul className="nav">
						<li>
							<NavLink activeClassName="active-menu" exact to="/">
								<i className="fa fa-bar-chart-o" />
								<span>首页</span>
							</NavLink>
						</li>

						<li className="active">
							<Link to="/product">
								<i className="fa fa-list" />
								<span>商品</span>
								<span className="fa arrow" />
							</Link>
							<ul className="nav nav-second-level collapse in">
								<li>
									<NavLink to="/product" activeClassName="active-menu">
										<span>商品管理</span>
									</NavLink>
								</li>
								<li>
									<NavLink to="/product-category" activeClassName="active-menu">
										<span>品类管理</span>
									</NavLink>
								</li>
							</ul>
						</li>

						<li className="active">
							<Link to="/order">
								<i className="fa fa-check-square-o" />
								<span>订单</span>
								<span className="fa arrow" />
							</Link>
							<ul className="nav nav-second-level collapse in">
								<li>
									<NavLink to="/order" activeClassName="active-menu">
										<span>订单管理</span>
									</NavLink>
								</li>
							</ul>
						</li>

						<li className="active">
							<Link to="/user">
								<i className="fa fa-user" />
								<span>用户</span>
								<span className="fa arrow" />
							</Link>
							<ul className="nav nav-second-level collapse in">
								<li>
									<NavLink to="/user" activeClassName="active-menu">
										<span>用户列表</span>
									</NavLink>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default SideNav;
