/*
 * @Author: xiaofan 
 * @Date: 2018-12-23 15:29:14 
 * @Last Modified by: xiaofan
 * @Last Modified time: 2018-12-23 15:37:04
 */


import { BrowserRouter as Router, Switch, Redirect, Route, Link } from "react-router-dom";
import React        from "react";
import ProductList  from 'page/product/index/index.jsx';

class ProductRouter extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/product/index" component={ ProductList } />
        <Redirect exact form="/product" to="/product/index" />
      </Switch>
    )
  }
}

export default ProductRouter;