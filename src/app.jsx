/*
 * @Author: xiaofan
 * @Date: 2018-12-07 23:49:58
 * @Last Modified by: xiaofan
 * @Last Modified time: 2018-12-17 22:47:04
 */

import React from "react";
import ReactDOM from "react-dom";

class Component extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "again",
			age: 18
		}

		// 绑定this
		// this.handleClick = this.handleClick.bind(this);
	}

	render() {
		return (
			<div>
				<h1>this is { this.state.name }</h1>
				<p>age: { this.state.age }</p>
				<button onClick={ (e) => { this.handleClick(e) } }>add</button>
				<input type="text" onChange={ (e) => { this.onValueChange(e) } } />
			</div>
		);
	}

	handleClick() {
		this.setState({
			age: this.state.age + 1
		})
	}

	onValueChange(e) {
		this.setState({
			age: e.target.value
		})
	}
}

class App extends React.Component {
	render() {
		return (
			<div className="app">
				<h1>App</h1>
				<hr />
				<Component />
			</div>
		)
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
);
