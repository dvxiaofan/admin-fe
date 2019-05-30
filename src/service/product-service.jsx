/*
 * @Author: DevZhang 
 * @Date: 2019-05-29 12:07:40 
 * @Last Modified by: DevZhang
 * @Last Modified time: 2019-05-30 13:16:11
 */


import MUtil from 'util/mm.jsx';

const _mm = new MUtil();


class Product {
    // 获取商品列表信息
    getProductList(listParam) {
        let url = '',
            data= {};

        // 非搜索
        if (listParam.listType === 'list') {
            url = '/manage/product/list.do';
            data.pageNum = listParam.pageNum;
        } else if (listParam.listType === 'search') {
            url = '/manage/product/search.do';
            data.pageNum = listParam.pageNum;
            data[listParam.searchType] = listParam.keyword;
        }

        return _mm.request({
            url: url,
            type: 'post',
            data: data
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















