/*
 * @Author: DevZhang 
 * @Date: 2019-05-09 17:34:36 
 * @Last Modified by: DevZhang
 * @Last Modified time: 2019-05-09 17:49:21
 */


import React from 'react';

class Layout extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div id="wrapper">
            layout 
                {/* <TopNav />
                <SideNav /> */}
                {this.props.children}
            </div>
        )
    }
}

export default Layout;