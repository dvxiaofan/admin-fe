/*
 * @Author: DevZhang 
 * @Date: 2019-05-13 13:55:32 
 * @Last Modified by: DevZhang
 * @Last Modified time: 2019-05-13 13:57:39
 */


import React from 'react';
import PageTitle from 'component/page-title/index.jsx';

import './index.css';


class Order extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="page-wrapper">
                <div className="row">
                    <PageTitle title="订单管理" />
                    <div className="col-md-12">
                        Order
                    </div>
                </div>
            </div>
        )
    }
}

export default Order;