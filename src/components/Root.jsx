import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '../css/index.css';

import App from './App';
import Details from './Details';
import NotFound from './NotFound';

const Root = () => (
  <BrowserRouter>
    <div className="root">
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="artist/:artist/" component={Details} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Root;