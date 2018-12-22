/*
 * @Author: xiaofan 
 * @Date: 2018-12-22 20:59:53 
 * @Last Modified by: xiaofan
 * @Last Modified time: 2018-12-22 21:13:22
 */

import React        from "react";
import { Link }     from 'react-router-dom';
import PageTitle		from 'component/page-title/index.jsx';


class ErrorPage extends React.Component {
	constructor(props) {
		super(props);

	}

	render() {
		return (
			<div id="page-wrapper">
			<PageTitle title="出错啦"/>
        <div className="row">
          <div className="col-md-12">
					<span>页面不存在 </span>
					<Link to="/">点我返回首页</Link>
          </div>
        </div>
      </div>
		);
	}

}

export default ErrorPage;