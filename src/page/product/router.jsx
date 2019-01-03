/*
 * @Author: xiaofan 
 * @Date: 2018-12-23 15:29:14 
 * @Last Modified by: xiaofan
 * @Last Modified time: 2019-01-03 22:15:40
 */


import { BrowserRouter as Router, Switch, Redirect, Route, Link } from "react-router-dom";
import React            from "react";
import ProductList      from 'page/product/index/index.jsx';
import ProductSave      from 'page/product/index/save.jsx';
import ProductDetail    from 'page/product/index/detail.jsx';

class ProductRouter extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/product/index" component={ ProductList } />
        <Route path="/product/save/:pid?" component={ ProductSave } />
        <Route path="/product/detail/:pid" component={ ProductDetail } />
        <Redirect exact form="/product" to="/product/index" />
      </Switch>
    )
  }
}

export default ProductRouter;