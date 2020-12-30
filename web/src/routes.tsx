import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './pages/Login';
import home from './pages/Home';
import register from './pages/Register';
import products from './pages/Products';
import productsForm from './pages/Products/Form'
import productsDetail from './pages/Products/Detail'
function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/home" component={home} />
                <Route path="/register" component={register} />
                <Route path="/products" exact component={products} />
                <Route path="/product_cadastro" exact component={productsForm} />
                <Route path="/product_cadastro/:id"  exact component={productsForm} />
                <Route path="/product/:id" exact component={productsDetail} />
            </Switch>
        </BrowserRouter>
    );
}
export default Routes;