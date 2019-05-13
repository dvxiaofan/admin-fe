/*
 * @Author: DevZhang 
 * @Date: 2019-05-13 13:55:04 
 * @Last Modified by: DevZhang
 * @Last Modified time: 2019-05-13 13:57:56
 */


import React from 'react';
import PageTitle from 'component/page-title/index.jsx';

import './index.css';


class Product extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="page-wrapper">
                <div className="row">
                    <PageTitle title="商品管理" />
                    <div className="col-md-12">
                        Product
                    </div>
                </div>
            </div>
        )
    }
}

export default Product;