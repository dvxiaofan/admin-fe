/*
 * @Author: xiaofan 
 * @Date: 2018-12-23 15:50:14 
 * @Last Modified by: xiaofan
 * @Last Modified time: 2018-12-24 21:59:14
 */

import MUtil from 'util/mm.jsx';

const _mm = new MUtil();

class Product {
  // 获取商品列表信息（分搜索和默认）
  getProductList(listParam) {

    let url = '',
      data = {};

    //  默认list
    if (listParam.listType === 'list') {
      url = '/manage/product/list.do';
      data.pageNum = listParam.pageNum;
    }
    // 搜索事件
    else if (listParam.listType === 'search') {
      url = '/manage/product/search.do';
      data.pageNum                = listParam.pageNum;
      data[listParam.searchType]  = listParam.keyword;
    };

    return _mm.request({
      type: "post",
      url: url,
      data: data
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

  // 获取商品分类
  getCategoryList(parentCateId) {
    return _mm.request({
      url   : '/manage/category/get_category.do',
      type  : 'post',
      data  : {
        categoryId: parentCateId || 0
      }
    })
  }
}

export default Product;