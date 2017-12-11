import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './css/index.css';

import App from './components/App';
import Details from './components/Details';
import NotFound from './components/NotFound';

import registerServiceWorker from './services/registerServiceWorker';

const Root = () => (
  <BrowserRouter>
      <div className="root">
          <Switch>
              <Route exact path="/" component={App} />
              <Route path="artist/:artist/" component={Details} />
              <Route component={NotFound}/>
          </Switch>
      </div>
  </BrowserRouter>
);

render(<Root />, document.getElementById('root'));
registerServiceWorker();
