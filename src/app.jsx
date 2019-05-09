/*
 * @Author: DevZhang 
 * @Date: 2019-04-30 15:26:41 
 * @Last Modified by: DevZhang
 * @Last Modified time: 2019-05-09 15:42:42
 */

import React from "react";
import ReactDOM from "react-dom";
import Home from 'page/home/index.jsx';

class App extends React.Component {

  render() {
    return (
      <Home />
    )
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById("app")
);