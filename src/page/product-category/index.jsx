/*
 * @Author: xiaofan 
 * @Date: 2018-12-20 22:47:59 
 * @Last Modified by: xiaofan
 * @Last Modified time: 2018-12-23 15:43:25
 */

import './index.scss';
import React        from "react";
import PageTitle    from 'component/page-title/index.jsx';

class ProductCategory extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="page-wrapper">
        <div className="row">
          <PageTitle title="品类管理" />
          <div className="col-md-12">
            body
          </div>
        </div>
      </div>
    );
  }
}

export default ProductCategory;