/*
 * @Author: xiaofan 
 * @Date: 2018-12-23 15:50:14 
 * @Last Modified by: xiaofan
 * @Last Modified time: 2018-12-23 17:48:38
 */

import MUtil from 'util/mm.jsx';

const _mm = new MUtil();

class Product {
  // 获取商品列表信息
  getProductList(pageNum) {
    return _mm.request({
      url		  : "/manage/product/list.do",
      type	  : "post",
      data    : {
        pageNum	: pageNum
      }
    });
  }

  // 操作商品状态
  setProductStatus(productInfo) {
    return _mm.request({
      url		  : "/manage/product/set_sale_status.do",
      type	  : "post",
      data    : productInfo
    });
  }
}

export default Product;