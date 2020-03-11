import React from "react";
import Modal from './modals/modal';
import RecipeIndexContainer from './recipe/recipe_index_container';
import RecipeShowContainer from './recipe/recipe_show_container';
import RecipeBoxContainer from './recipe_box/recipe_box_container';
import NavBarContainer from './main/navbar/nav_container';
import SearchResultContainer from './search/search_result_container'
import Footer from './footer';
import MainContainer from './main/main_container';
import { ProtectedRoute } from '../util/route_util';

import {
    Route,
    Switch,
    useLocation
} from 'react-router-dom';

const App = (props) => {
    return (
    <div className="site-container">
        <Modal />
        <NavBarContainer />
            <Switch>
                <ProtectedRoute path="/recipe-box" component={ RecipeBoxContainer } />
                <ProtectedRoute path="/search/:searchQuery" component={ SearchResultContainer } />
                <ProtectedRoute path="/recipes/:recipeId" component={ RecipeShowContainer } />
                <ProtectedRoute path="/recipes" component={ RecipeIndexContainer } />
                <Route path="/" component={MainContainer} />
            </Switch>
        <Footer />
    </div>
    )
};

export default App;