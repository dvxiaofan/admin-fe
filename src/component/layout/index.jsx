/*
 * @Author: DevZhang 
 * @Date: 2019-05-09 17:34:36 
 * @Last Modified by: DevZhang
 * @Last Modified time: 2019-05-10 15:20:40
 */


import React from 'react';
import NavTop from 'component/nav-top/index.jsx';
import NavSide from 'component/nav-side/index.jsx';

import './theme.css';

class Layout extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div id="wrapper">
                <NavTop />
                <NavSide />
                {this.props.children}
            </div>
        )
    }
}

export default Layout;