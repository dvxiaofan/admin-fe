/*
 * @Author: xiaofan 
 * @Date: 2018-12-23 22:07:16 
 * @Last Modified by: xiaofan
 * @Last Modified time: 2018-12-23 22:30:44
 */

import React        from "react";


class ListSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchType: "productId",
      searchKeyword: ""
    };
  }
  // 搜索值改变
  onValueChange(e) {
    let name = e.target.name,
      value = e.target.value;
    this.setState({
      [name]: value
    });
  }
  // 搜索事件
  onSearch() {
    this.props.onSearch(this.state.searchType, this.state.searchKeyword);
	}
	// 点击回车
	onSearchKeywordKeyUp(e) {
		if(e.keyCode === 13) this.onSearch();
	}
	render() {
		return (
			<div className="row search-wrap">
				<div className="col-md-12">
					<div className="form-inline">
						<div className="form-group">
							<select
								className="form-control"
								name="searchType"
								onChange={ e => this.onValueChange(e) }>
								<option value="productId">按商品ID查询</option>
								<option value="productName">按商品名称查询</option>
							</select>
						</div>
						<div className="form-group">
							<input
								type="text"
								className="form-control"
								placeholder="关键词"
								name="searchKeyword"
								onKeyUp={ e => this.onSearchKeywordKeyUp(e) }
								onChange={ e => this.onValueChange(e) }
							/>
						</div>
						<button
							className="btn btn-primary"
							onClick={ e => this.onSearch(e) }>
							<span>查询</span>
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default ListSearch;