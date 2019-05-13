/*
 * @Author: DevZhang 
 * @Date: 2019-05-13 13:33:53 
 * @Last Modified by: DevZhang
 * @Last Modified time: 2019-05-13 13:38:02
 */


import React from 'react';

class PageTitle extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        document.title = this.props.title + ' - XMALL ADMIN';
    }

    render() {
        return (
            <div className="row">
                <div className="col-lg-12">
                    <h1 className="page-header">{ this.props.title }</h1>
                    { this.props.children }
                </div>
            </div>
        )
    }
}


export default PageTitle;