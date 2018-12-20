/*
 * @Author: xiaofan 
 * @Date: 2018-12-20 22:52:59 
 * @Last Modified by: xiaofan
 * @Last Modified time: 2018-12-20 22:55:16
 */

import React        from "react";
import PageTitle    from 'component/page-title/index.jsx';
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
            body
          </div>
        </div>
      </div>
    );
  }
}

export default User;
