/*
 * @Author: DevZhang 
 * @Date: 2019-05-29 12:22:49 
 * @Last Modified by: DevZhang
 * @Last Modified time: 2019-05-29 23:09:02
 */


import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import React from 'react';
import ProductList from 'page/product/index/index.jsx';

class ProductRouter extends React.Component {

    render() {
        return (
            <Switch>
                <Route path="/product/index" component={ProductList} />
                <Redirect exact form="/product" to="product/index" />
            </Switch>
        )
    }
};


export default ProductRouter;