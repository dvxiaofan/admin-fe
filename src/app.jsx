/*
 * @Author: xiaofan
 * @Date: 2018-12-07 23:49:58
 * @Last Modified by: xiaofan
 * @Last Modified time: 2018-12-22 22:12:48
 */

import { BrowserRouter as Router, Switch, Redirect, Route, Link } from "react-router-dom";
import React              from "react";
import ReactDOM           from "react-dom";

// layout
import Layout             from 'component/layout/index.jsx';

// 页面
import Home               from 'page/home/index.jsx';
import Product            from 'page/product/index.jsx';
import ProductCategory    from 'page/product-category/index.jsx';
import Order              from 'page/order/index.jsx';
import UserList           from 'page/user/index.jsx';
import Login              from 'page/login/index.jsx';
import ErrorPage          from 'page/error/index.jsx';


class App extends React.Component {

  render() {
    let LayoutRouter = (
      <Layout>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/product" component={ Product } />
          <Route path="/product-category" component={ ProductCategory } />
          <Route path="/order" component={ Order } />
          <Route path="/user/index" component={ UserList } />
          <Redirect exact form="/user" to='/user/index' />
  
          {/* 么有匹配页面，就显示错误也页面 */ }
          <Route component={ ErrorPage } />
        </Switch>
      </Layout>
    );
    
    return (
      <Router>
        <Switch>
          <Route path="/login" component={ Login } />
          <Route path="/" render={ props => LayoutRouter} />
        </Switch>
      </Router>
    )
  }
  
}

ReactDOM.render(
  <App />,
  document.getElementById("app")
);
