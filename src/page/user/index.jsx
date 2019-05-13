/*
 * @Author: DevZhang 
 * @Date: 2019-05-13 13:40:46 
 * @Last Modified by: DevZhang
 * @Last Modified time: 2019-05-13 13:53:25
 */


import React from 'react';
import PageTitle from 'component/page-title/index.jsx';

import './index.css';


class User extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="page-wrapper">
                <div className="row">
                    <PageTitle title="用户管理" />
                    <div className="col-md-12">
                        user
                    </div>
                </div>
            </div>
        )
    }
}

export default User;