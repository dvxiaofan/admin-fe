/*
 * @Author: xiaofan 
 * @Date: 2018-12-24 21:36:10 
 * @Last Modified by: xiaofan
 * @Last Modified time: 2018-12-24 21:37:42
 */

"react-router-dom";
import React        from "react";

class CategorySelector extends React.Component {
  render() {
    return (
      <div className="col-md-2">
        <select className="form-control cate-select">
          <option value="">请选择一级品类</option>
        </select>
        <select className="form-control cate-select">
          <option value="">请选择二级品类</option>
        </select>
      </div>
    );
  }
}

export default CategorySelector;