/*
 * @Author: DevZhang 
 * @Date: 2019-05-29 22:45:03 
 * @Last Modified by: DevZhang
 * @Last Modified time: 2019-05-29 22:49:35
 */


import React from 'react';
import PageTitle from 'component/page-title/index.jsx';
import { Link } from 'react-router-dom';

class ErrorPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="page-wrapper">
                <PageTitle title='出错啦!' />
                <div className="row">
                    <div className="col-md-12">
                        <span>页面不存在</span>
                        <Link to='/'>点我返回主页</Link>
                    </div>
                </div>
            </div>
        )
    }
}


export default ErrorPage;
