import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { NotFoundPage, PostsPage } from './containers';

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={PostsPage} />
            <Route component={NotFoundPage} />
        </Switch>
    );
};

export default Routes;