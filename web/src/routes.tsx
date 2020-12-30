import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './pages/Login';
import home from './pages/Home';
import register from './pages/Register';
import products from './pages/Products';
<<<<<<< HEAD
import productsForm from './pages/Products/Form'
import productsDetail from './pages/Products/Detail'
=======

>>>>>>> 682cd61696aceb753093db31c6133cd5d3ed7289
function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/home" component={home} />
                <Route path="/register" component={register} />
<<<<<<< HEAD
                <Route path="/products" exact component={products} />
                <Route path="/product_cadastro" exact component={productsForm} />
                <Route path="/product_cadastro/:id"  exact component={productsForm} />
                <Route path="/product/:id" exact component={productsDetail} />
=======
                <Route path="/products" component={products} />
>>>>>>> 682cd61696aceb753093db31c6133cd5d3ed7289
            </Switch>
        </BrowserRouter>
    );
}
export default Routes;