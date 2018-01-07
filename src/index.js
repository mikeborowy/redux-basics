import React from 'react';
import ReactDOM from 'react-dom';
import * as ReactRedux from 'react-redux';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import * as Store from './store/createStore';

let store = Store.initStore();

ReactDOM.render(
    <ReactRedux.Provider store={store}>
        <App />
    </ReactRedux.Provider>
    , document.getElementById('root'));
registerServiceWorker();
