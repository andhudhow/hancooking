import React from "react";
import Main from '../components/main/main'
import Modal from '../components/modals/modal';
import RecipeShowContainer from '../components/recipe/recipe_show_container';
import NavBarContainer from '../components/main/navbar/nav_container';

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
            <Route path="/recipes/:recipeId" component={RecipeShowContainer} />
            <Route path="/" component={Main} />
        </Switch>
        
    </div>
    )
};

export default App;