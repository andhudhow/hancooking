import React from "react";
import Modal from './modals/modal';
import RecipeIndexContainer from './recipe/recipe_index_container';
import RecipeShowContainer from './recipe/recipe_show_container';
import RecipeBoxContainer from './recipe_box/recipe_box_container';
import NavBarContainer from './main/navbar/nav_container';
import MainContainer from './main/main_container';
import { ProtectedRoute } from '../util/route_util';
import RedirectToLogin from '../components/main/login_redirect'

import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

const App = (props) => {
    const loggedIn = getState().session.currentUser === 'undefined'

    return (
    <div className="site-container">
        <Modal />
        <NavBarContainer />
            <Switch>
                <Route path="/recipe-box" component={ loggedIn ? RecipeBoxContainer : RedirectToLogin } />
                <Route path="/recipes/:recipeId" component={ loggedIn ? RecipeShowContainer : RedirectToLogin } />
                <Route path="/recipes" component={ loggedIn ? RecipeIndexContainer : RedirectToLogin } />
                <Route path="/" component={MainContainer} />
            </Switch>
    </div>
    )
};

export default App;