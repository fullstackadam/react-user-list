import React from 'react';
import MainPage from '../components/MainPage'; 
import AddUserPage from '../components/AddUserPage';
import EditUserPage from '../components/EditUserPage';
import NotFoundPage from '../components/NotFoundPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const AppRouter = () => (
  <BrowserRouter>
    <div className="container">
      <div className="row">
        <div className="col-xs-6 offset-xs-3 col-sm-6 offset-sm-3 col-md-6 offset-md-3 col-lg-6 offset-lg-3">
          <Switch>
            <Route path="/" component={MainPage} exact={true} />
            <Route path="/create" component={AddUserPage} />
            <Route path="/edit/:id" component={EditUserPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </div>
    </div>
  </BrowserRouter>
);

export default AppRouter;