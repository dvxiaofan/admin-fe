/*
 * @Author: xiaofan
 * @Date: 2018-12-07 23:49:58
 * @Last Modified by: xiaofan
 * @Last Modified time: 2018-12-18 21:07:58
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
            <Redirect from="*" to="/" />
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
