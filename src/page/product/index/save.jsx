/*
 * @Author: xiaofan 
 * @Date: 2018-12-24 20:20:16 
 * @Last Modified by: xiaofan
 * @Last Modified time: 2018-12-24 22:54:53
 */

import React        			from "react";
import PageTitle    			from 'component/page-title/index.jsx';
import Product 						from 'service/product-service.jsx';
import MUtil 							from 'util/mm.jsx';
import CategorySelector 	from 'page/product/index/category-selector.jsx';

const _product 	= new Product();
const _mm 			= new MUtil();

// 通用分页组件
class ProductSave extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			categoryId	: 0,
			parentId		: 0
		}
	}

	// 分类变化事件
	onCategoryChange(categoryId, parentId) {
		this.setState({
			categoryId,
			parentId
		})				
	}

	render() {
		return (
			<div id="page-wrapper">
				<PageTitle title="添加商品" />
				<form className="form-horizontal">
					<div className="form-group">
						<label className="col-md-2 control-label">商品名称</label>
						<div className="col-md-5">
							<input
								type="text"
								className="form-control"
								placeholder="请输入商品名称"
							/>
						</div>
					</div>

					<div className="form-group">
						<label className="col-md-2 control-label">商品描述</label>
						<div className="col-md-5">
							<input
								type="text"
								className="form-control"
								placeholder="请输入商品描述"
							/>
						</div>
					</div>

					<div className="form-group">
						<label className="col-md-2 control-label">所属分类</label>
						<CategorySelector onCateChange={ (categoryId, parentId) => this.onCategoryChange(categoryId, parentId) } />
					</div>

					<div className="form-group">
						<label className="col-md-2 control-label">商品价格</label>
						<div className="col-md-3">
							<div className="input-group">
								<input
									type="number"
									className="form-control"
									placeholder="价格"
								/>
								<span className="input-group-addon">元</span>
							</div>
						</div>
					</div>

					<div className="form-group">
						<label className="col-md-2 control-label">商品库存</label>
						<div className="col-md-3">
							<div className="input-group">
								<input
									type="number"
									className="form-control"
									placeholder="库存"
								/>
								<span className="input-group-addon">件</span>
							</div>
						</div>
					</div>

					<div className="form-group">
						<label className="col-md-2 control-label">商品图片</label>
						<div className="col-md-10">
							<p>请上传图片</p>
							<button className="btn btn-default">上传图片</button>
						</div>
					</div>

					<div className="form-group">
						<label className="col-md-2 control-label">商品详情</label>
						<div className="col-md-10">
							<p>富文本</p>
						</div>
					</div>

					<div className="form-group">
						<div className="col-md-offset-2 col-md-10">
							<button type="text" className="btn btn-primary">
								提交
              </button>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default ProductSave;