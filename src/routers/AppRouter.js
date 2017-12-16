import React from 'react';
import Header from '../components/Header';
import MainPage from '../components/MainPage'; 
import AddUserPage from '../components/AddUserPage';
//import EditUserPage from '../components/EditUserPage';
import NotFoundPage from '../components/NotFoundPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={MainPage} exact={true} />
        <Route path="/create" component={AddUserPage} />
        {/*<Route path="/edit/:id" component={EditUserPage} />*/}
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;