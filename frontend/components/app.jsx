import React from "react";
import Main from '../components/main/main'
import Modal from '../components/modals/modal';

import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

const App = () => {
    
    return (
    <div>
        <Modal />
        <Main />
    </div>
    )
};

export default App;