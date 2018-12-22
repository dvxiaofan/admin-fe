/*
 * @Author: xiaofan 
 * @Date: 2018-12-20 22:19:34 
 * @Last Modified by: xiaofan
 * @Last Modified time: 2018-12-22 17:07:47
 */

import React from "react";

class PageTitle extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		document.title = this.props.title + " - XMALL ADMIN";
	}

	render() {
		return (
			<div className="row">
				<div className="col-lg-12">
					<h1 className="page-header">{ this.props.title }</h1>
					{/* 设置为容器式插件 */ }
					{ this.props.children }
				</div>
			</div>
		);
	}
}

export default PageTitle;
