import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';

import registerServiceWorker from './utils/registerServiceWorker';

import base from './constants/base';

import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

injectGlobal`${base}`;

registerServiceWorker();
