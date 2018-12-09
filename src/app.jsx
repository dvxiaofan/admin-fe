/*
 * @Author: xiaofan 
 * @Date: 2018-12-07 23:49:58 
 * @Last Modified by: xiaofan
 * @Last Modified time: 2018-12-09 23:53:08
 */

import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

// let style = {
// 	color: 'blue',
// 	fontSize: '38px'
// }
let flag = true;
let name1 = 'name';
let name2 = 'name2';

let names = ['name1', 'name2', 'name3', 'name4'];

let jsx = (
	<div className="jsx">
		{/* 条件判断 */}
		{
			flag ? <p>Hello {name1}</p> : <p>Hello {name2}</p>
		}
		{/* 循环 */}
		{
			names.map((name, index) => <p key={index}>Hello {name}</p>)
		}
	</div>
);


ReactDOM.render(jsx, document.getElementById('app'));