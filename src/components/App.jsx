import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import HomePage from '../layouts/HomePage';
import ProductPage from '../layouts/ProductPage';
import ProfilePage from '../layouts/ProfilePage';
import NotFoundPage from '../layouts/NotFoundPage';

function App() {

    const isAuthenticated = false;

    return (
        <div className="app">
            <h1>Amazon Clone</h1>
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/products" component={ProductPage} />
                    <Route path="/profile" render={()=>{
                        return isAuthenticated ? <ProfilePage /> : <Redirect to="/" />
                    }} />
                    <Route path="*" component={NotFoundPage} />
                </Switch>
            </BrowserRouter>
        </div>
    )

}

export default App;