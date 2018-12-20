/*
 * @Author: xiaofan
 * @Date: 2018-12-07 23:49:58
 * @Last Modified by: xiaofan
 * @Last Modified time: 2018-12-20 22:54:24
 */

import React            from "react";
import ReactDOM         from "react-dom";
import { BrowserRouter as Router, Switch, Redirect, Route, Link } from "react-router-dom";

// layout
import Layout           from 'component/layout/index.jsx';

// 页面
import Home             from 'page/home/index.jsx';
import Product          from 'page/product/index.jsx';
import ProductCategory  from 'page/product-category/index.jsx';
import Order            from 'page/order/index.jsx';
import User             from 'page/user/index.jsx';


class App extends React.Component {

  render() {
    return (
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/product" component={ Product } />
            <Route path="/product-category" component={ ProductCategory } />
            <Route path="/order" component={ Order } />
            <Route path="/user" component={ User } />
          </Switch>
        </Layout>
      </Router>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("app")
);
