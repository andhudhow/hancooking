import React from "react";
import Modal from './modals/modal';
import RecipeShowContainer from './recipe/recipe_show_container';
import RecipeBoxContainer from './recipe_box/recipe_box_container';
import NavBarContainer from './main/navbar/nav_container';
import MainContainer from './main/main_container';

import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

const App = () => {
    
    return (
    <div className="site-container">
        <Modal />
        <NavBarContainer />
            <Switch>
                <Route path="/recipe-box" component={RecipeBoxContainer} />
                <Route path="/recipes/:recipeId" component={RecipeShowContainer} />
                <Route path="/" component={MainContainer} />
            </Switch>
    </div>
    )
};

export default App;