/*
 * @Author: DevZhang 
 * @Date: 2019-05-13 13:54:20 
 * @Last Modified by: DevZhang
 * @Last Modified time: 2019-05-13 13:58:06
 */


import React from 'react';
import PageTitle from 'component/page-title/index.jsx';

import './index.css';


class ProductCategory extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="page-wrapper">
                <div className="row">
                    <PageTitle title="品类管理" />
                    <div className="col-md-12">
                        ProductCategory
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductCategory;