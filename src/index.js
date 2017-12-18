import React from 'react';
import { render } from 'react-dom';

import Root from './components/Root';

import registerServiceWorker from './services/registerServiceWorker';


render(React.createElement(Root), document.getElementById('root'));
registerServiceWorker();
