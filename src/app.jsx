/*
 * @Author: xiaofan
 * @Date: 2018-12-07 23:49:58
 * @Last Modified by: xiaofan
 * @Last Modified time: 2018-12-17 22:30:27
 */

import React from "react";
import ReactDOM from "react-dom";

class Component extends React.Component {
	// props 只读
	constructor(props) {
		super(props);
		this.state = {
			name: 'xiaofan'
		}
	}
	
	render() {
		setTimeout(() => {
			this.setState({
				name: 'xiaofan 2000'
			})
		}, 2000);
		return <h2>{this.state.name} and {this.props.name}</h2>
	}
}

ReactDOM.render(
	<div>
		<Component name="mingming" />
	</div>,
	document.getElementById("app")
);
