/*
 * @Author: xiaofan 
 * @Date: 2018-12-20 22:47:03 
 * @Last Modified by: xiaofan
 * @Last Modified time: 2018-12-20 23:03:59
 */


import React        from "react";
import PageTitle    from 'component/page-title/index.jsx';
import './index.css';

class Product extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="page-wrapper">
        <div className="row">
          <PageTitle title="商品管理" />
          <div className="col-lg-12">
            body
          </div>
        </div>
      </div>
    );
  }
}

export default Product;