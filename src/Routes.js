import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { PostsPage } from './containers';

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={PostsPage} />
        </Switch>
    );
};

export default Routes;