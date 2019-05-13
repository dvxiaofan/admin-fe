/*
 * @Author: DevZhang 
 * @Date: 2019-05-09 15:40:23 
 * @Last Modified by: DevZhang
 * @Last Modified time: 2019-05-13 13:49:47
 */


import React from 'react';
import PageTitle from 'component/page-title/index.jsx';


class Home extends React.Component {
    render() {
        return (
            <div id="page-wrapper" >
                <div className="row">
                    <PageTitle title="首页" />
                    <div className="col-lg-12">
                        home
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;