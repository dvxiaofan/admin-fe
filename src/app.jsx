/*
 * @Author: DevZhang 
 * @Date: 2019-04-30 15:26:41 
 * @Last Modified by: DevZhang
 * @Last Modified time: 2019-05-13 14:11:16
 */

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Redirect, Switch, Link } from 'react-router-dom';
// 页面
import Home from 'page/home/index.jsx';
import User from 'page/user/index.jsx';
import Order from 'page/order/index.jsx';
import Product from 'page/product/index.jsx';
import ProductCategory from 'page/product-category/index.jsx';
import Layout from 'component/layout/index.jsx';
import Login from 'page/login/index.jsx';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={ Login } />
          <Route path="/" render={ props => (
            <Layout >
              <Switch>
                <Route exact path="/" component={ Home } />
                <Route path="/product" component={ Product } />
                <Route path="/product.category" component={ ProductCategory } />
                <Route path="/order" component={ Order } />
                <Route path="/user" component={ User } />
              </Switch>
            </Layout>
          )} />
        </Switch>
      </Router>
    )
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById("app")
);