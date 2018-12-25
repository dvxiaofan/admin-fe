/*
 * @Author: xiaofan 
 * @Date: 2018-12-25 16:58:18 
 * @Last Modified by: xiaofan
 * @Last Modified time: 2018-12-25 17:05:37
 */



import React              from "react";
import PageTitle          from "component/page-title/index.jsx";
import Product            from "service/product-service.jsx";
import MUtil              from "util/mm.jsx";
import CategorySelector   from "page/product/index/category-selector.jsx";
import FileUploader       from "util/file-uploader/index.jsx";
import RichEditor         from "util/rich-editor/index.jsx";

const _product  = new Product();
const _mm       = new MUtil();


class ProductCategory extends React.Component {
  render() {
		return (
			<div className="page-warpper">
				<PageTitle title="品类管理" />
				
			</div>
		)
  }
}

export default ProductCategory;