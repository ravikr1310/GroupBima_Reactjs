import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import FormBody from '../../groupbima/src/components/proposer-form/FormBody';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<FormBody />, document.getElementById('root'));
serviceWorker.unregister();
