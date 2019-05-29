/*
 * @Author: DevZhang 
 * @Date: 2019-04-30 15:26:41 
 * @Last Modified by: DevZhang
 * @Last Modified time: 2019-05-29 22:54:30
 */

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Redirect, Switch, Link } from 'react-router-dom';
// 页面
import Home from 'page/home/index.jsx';
import UserList from 'page/user/index.jsx';
import Order from 'page/order/index.jsx';
import ProductRouter from 'page/product/router.jsx';
import Layout from 'component/layout/index.jsx';
import Login from 'page/login/index.jsx';
import ErrorPage from 'page/error/index.jsx';

class App extends React.Component {
  render() {

    let LayoutRouter = (
      <Layout >
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/product" component={ ProductRouter } />
          <Route path="/product-category" component={ ProductRouter } />
          <Route path="/order" component={ Order } />
          <Route path="/user/index" component={ UserList } />
          <Redirect exact form='/user' to='/user/index' />

          {/* 没有相匹配的页面, 显示错误页面 */}
          <Route component={ ErrorPage } />
        </Switch>
      </Layout>
    )


    return (
      <Router>
        <Switch>
          <Route path="/login" component={ Login } />
          <Route path="/" render={ props => LayoutRouter } />
        </Switch>
      </Router>
    )
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById("app")
);