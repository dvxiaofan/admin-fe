/*
 * @Author: xiaofan 
 * @Date: 2018-12-20 22:47:03 
 * @Last Modified by: xiaofan
 * @Last Modified time: 2018-12-23 22:58:16
 */

import './index.scss';
import 'rc-pagination/dist/rc-pagination.min.css';
import React 					from "react";
import PageTitle 			from 'component/page-title/index.jsx';
import Pagination 		from 'util/pagination/index.jsx';
import Product 				from 'service/product-service.jsx';
import MUtil 					from 'util/mm.jsx';
import TableList 			from 'util/table-list/index.jsx';
import ListSearch 		from './index-list-search.jsx';
import { Link } 			from "react-router-dom";

const _product 	= new Product();
const _mm 			= new MUtil();

class ProductList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			list			: [],
			pageNum		: 1,
			listType	: 'list',		// 定义list类型，看是否为搜索类型
		}
	}

	componentDidMount() {
		this.loadProductList();
	}

	// 加载商品信息
	loadProductList() {
		let listParam = {};
		listParam.listType 	= this.state.listType;
		listParam.pageNum		= this.state.pageNum;
		// 搜索情况下， 需要传入搜索类型和关键字
		if(this.state.listType === 'search') {
			listParam.searchType 	= this.state.searchType;
			listParam.keyword 		= this.state.searchKeyword;
		}
		_product.getProductList(listParam).then(res => {
			this.setState(res);
		}, errMsg => {
			// 有错误的时候清空list
			this.setState({
				list: []
			})
			_mm.errorTips(errMsg);
		});
	}

	// 页数发生变化的时候
	onPageNumChange(pageNum) {
		this.setState({
			pageNum: pageNum
		}, () => {
			this.loadProductList();
		})
	}

	// 操作商品状态
	onSetProductStatus(e, productId, currentStatus) {
		let newStatus = currentStatus == 1 ? 2 : 1,
			confirmTips = currentStatus == 1 ? '确认下架该商品吗？' : '确认上架该商品吗？';
		if (window.confirm(confirmTips)) {
			_product.setProductStatus({
				productId	: productId, 
				status		: newStatus
			}).then(res => {
				_mm.successTips(res);
				this.loadProductList();
			}, errMsg => {
				_mm.errorTips(errMsg);
			});
		}
	}

	// 搜索事件
	onSearch(searchType, searchKeyword) {
		// 确定是搜索还是默认list
		let listType = searchKeyword === '' ? 'list' : 'search';

		this.setState({
			listType			: listType,
			searchType		: searchType,
			searchKeyword	: searchKeyword,
			pageNum				: 1
		}, () => {
			this.loadProductList();
		})	
	}

	render() {
		let tableHeads = [
			{ name: 'ID', width: '10%' },
			{ name: '信息', width: '50%' },
			{ name: '价格', width: '10%' },
			{ name: '状态', width: '15%' },
			{ name: '操作', width: '15%' }
		];
		return <div id="page-wrapper">
			<PageTitle title="商品管理" />
			{/* 搜索组件 */ }
			<ListSearch onSearch={ (searchType, searchKeyword) => { this.onSearch(searchType, searchKeyword) } } />
			{/* tableList组件 */ }
			<TableList tableHeads={ tableHeads }>
				{ this.state.list.map((product, index) => {
					return <tr key={ index }>
						<td>{ product.id }</td>
						<td>
							<p>{ product.name }</p>
							<p>{ product.subtitle }</p>
						</td>
						<td>￥{ product.price }</td>
						<td>
							<p>{ product.status === 1 ? "在售" : "已下架" }</p>
							<button className="btn btn-xs btn-warning" onClick={ e => {
								this.onSetProductStatus(e, product.id, product.status);
							} }>
								{ product.status === 1 ? "下架" : "上架" }
							</button>
						</td>
						<td>
							<Link className="opera" to={ `/product/detail/${product.id}` }>
								查看
                  </Link>
							<Link className="opera" to={ `/product/save/${product.id}` }>
								编辑
                  </Link>
						</td>
					</tr>;
				}) }
			</TableList>
			{/* 分页组件 */ }
			<Pagination total={ this.state.total } current={ this.state.pageNum } onChange={ pageNum => this.onPageNumChange(pageNum) } />
		</div>;
	}
}

export default ProductList;
