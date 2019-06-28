import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore} from 'redux';
import { Provider } from 'react-redux';

import promise from 'redux-promise' // sempre que retorna uma promise espera ser resolvida para disparar reducer
import multi from 'redux-multi' // dentro de uma action retorna array com actions
import thunk from 'redux-thunk' // usa o dispatch responsavel por disparar os eventos para os reducers

import App from './main/app';
import reducers from './main/reducers'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(thunk, multi, promise)(createStore)(reducers, devTools)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('app'))