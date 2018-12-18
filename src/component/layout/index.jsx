/*
 * @Author: xiaofan 
 * @Date: 2018-12-18 20:59:02 
 * @Last Modified by: xiaofan
 * @Last Modified time: 2018-12-18 21:14:32
 */

import React from 'react';
import TopNav from 'component/top-nav/index.jsx';
import SideNav from 'component/side-nav/index.jsx';


import './theme.css';

class layout extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div id="wrapper">
				<TopNav />
				<SideNav />
				{this.props.children}
			</div>
		);
	}
}

export default layout;