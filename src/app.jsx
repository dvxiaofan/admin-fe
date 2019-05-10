/*
 * @Author: DevZhang 
 * @Date: 2019-04-30 15:26:41 
 * @Last Modified by: DevZhang
 * @Last Modified time: 2019-05-09 17:45:56
 */

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Redirect, Switch, Link } from 'react-router-dom';
// 页面
import Home from 'page/home/index.jsx';
import Layout from 'component/layout/index.jsx';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Layout >
          <Switch>
            <Route exact path="/" component={Home} />
            <Redirect from="*" to = "/" />1
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