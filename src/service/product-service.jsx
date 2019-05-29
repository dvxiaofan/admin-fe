/*
 * @Author: DevZhang 
 * @Date: 2019-05-29 12:07:40 
 * @Last Modified by: DevZhang
 * @Last Modified time: 2019-05-29 22:20:30
 */


import MUtil from 'util/mm.jsx';

const _mm = new MUtil();


class Product {
    // 获取商品列表信息
    getProductList(pageNum) {
        return _mm.request({
            url: '/manage/product/list.do',
            type: 'post',
            data: {
                pageNum: pageNum
            }
        });
    }

    // 操作商品状态
    setProductStatus(productInfo) {
        return _mm.request({
            url: '',
            type: 'post',
            data: productInfo
        })
    }
};


export default Product;















