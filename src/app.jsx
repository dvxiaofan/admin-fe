/*
 * @Author: xiaofan
 * @Date: 2018-12-07 23:49:58
 * @Last Modified by: xiaofan
 * @Last Modified time: 2018-12-20 22:11:23
 */

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Redirect, Route, Link } from "react-router-dom";

// 页面
import Home from 'page/home/index.jsx';

// layout
import Layout from 'component/layout/index.jsx';

class App extends React.Component {

  render() {
    return (
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/product" component={ Home } />
            <Route path="/product-category" component={ Home } />
            <Route path="/order" component={ Home } />
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
