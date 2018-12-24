/*
 * @Author: xiaofan 
 * @Date: 2018-12-23 15:29:14 
 * @Last Modified by: xiaofan
 * @Last Modified time: 2018-12-24 20:25:34
 */


import { BrowserRouter as Router, Switch, Redirect, Route, Link } from "react-router-dom";
import React        from "react";
import ProductList  from 'page/product/index/index.jsx';
import ProductSave  from 'page/product/index/save.jsx';

class ProductRouter extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/product/index" component={ ProductList } />
        <Route path="/product/save" component={ ProductSave } />
        <Redirect exact form="/product" to="/product/index" />
      </Switch>
    )
  }
}

export default ProductRouter;