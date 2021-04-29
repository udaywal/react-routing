import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import ProductIdPage from './ProductIdPage';

function ProductPage() {
    return (
        <div>
            <h2>Product Page</h2>
            <BrowserRouter>
                <div>
                    <Link to="/products/1">id#1</Link>
                    <br/>
                    <Link to="/products/2">id#2 </Link>
                    <br/>
                    <Link to="/">home </Link>
                </div>
                <Switch>
                    <Route path="/products/:id" component={ProductIdPage} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default ProductPage;
