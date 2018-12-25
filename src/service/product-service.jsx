/*
 * @Author: xiaofan 
 * @Date: 2018-12-23 15:50:14 
 * @Last Modified by: xiaofan
 * @Last Modified time: 2018-12-25 15:50:54
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

  // 检查商品信息
  checkProduct(product) {
    let result = { status: true, msg: "验证通过" };

    if (typeof product.name !== "string" || product.name.length === 0) {
      return { status: false, msg: "商品名称不能为空" };
    }

    if (typeof product.name !== "string" || product.name.length === 0) {
      return { status: false, msg: "商品名称不能为空" };
    }

    if (typeof product.subtitle !== "string" || product.subtitle.length === 0) {
      return { status: false, msg: "商品描述不能为空" };
    }

    if (typeof product.categoryId !== "number" || !(product.categoryId > 0)) {
      return { status: false, msg: "请正确选择商品分类" };
    }

    if (typeof product.price !== "number" || !(product.price >= 0)) {
      return { status: false, msg: "请正确输入商品价格" };
    }

    if (typeof product.stock !== "number" || !(product.stock >= 0)) {
      return { status: false, msg: "请正确输入商品库存" };
    }

    return result;
  }

  // 保存商品
  saveProduct(product) {
    return _mm.request({
      url   : '/manage/product/save.do',
      type  : 'post',
      data  : product
    })
  }
}

export default Product;
