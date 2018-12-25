/*
 * @Author: xiaofan 
 * @Date: 2018-12-23 15:29:14 
 * @Last Modified by: xiaofan
 * @Last Modified time: 2018-12-25 17:08:19
 */


import { BrowserRouter as Router, Switch, Redirect, Route, Link } from "react-router-dom";
import React            from "react";
import ProductList      from 'page/product/index/index.jsx';
import ProductCagegory  from 'page/product/category/index.jsx';
import ProductSave      from 'page/product/index/save.jsx';

class ProductRouter extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/product/index" component={ ProductList } />
        <Route path="/product-category" component={ ProductCagegory } />
        <Route path="/product/save/:pid" component={ ProductSave } />
        <Redirect exact form="/product" to="/product/index" />
      </Switch>
    )
  }
}

export default ProductRouter;