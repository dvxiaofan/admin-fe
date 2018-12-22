/*
 * @Author: xiaofan 
 * @Date: 2018-12-22 22:37:02 
 * @Last Modified by: xiaofan
 * @Last Modified time: 2018-12-22 22:43:32
 */


import 'rc-pagination/dist/rc-pagination.min.css';
import React        	from "react";
import RcPagination   from 'rc-pagination';

// 通用分页组件
class Pagination extends React.Component {
	render() {
		return (
			<div className="row">
				<div className="col-md-12">
					<RcPagination {...this.props} 
						hideOnSinglePage
						showQuickJumper
					/>
				</div>
			</div>
		);
	}
}

export default Pagination;