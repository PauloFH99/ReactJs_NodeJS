import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './pages/Login';
import home from './pages/Home';
import register from './pages/Register';
import products from './pages/Products';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/home" component={home} />
                <Route path="/register" component={register} />
                <Route path="/products" component={products} />
            </Switch>
        </BrowserRouter>
    );
}
export default Routes;