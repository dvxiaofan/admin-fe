/*
 * @Author: DevZhang 
 * @Date: 2019-05-29 12:38:42 
 * @Last Modified by: DevZhang
 * @Last Modified time: 2019-05-29 12:42:57
 */


import 'rc-pagination/dist/rc-pagination.min.css';
import React from 'react';
import RcPagination from 'rc-pagination';

class Pagination extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <RcPagination
                        {...this.props}
                        hideOnSinglePage
                        showQuickJumper
                    />
                </div>
            </div>
        )
    }
}


export default Pagination;