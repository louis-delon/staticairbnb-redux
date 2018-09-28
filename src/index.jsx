import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import '../assets/stylesheets/application.scss';

import flatsReducer from './reducers/flats_reducer';
import selectedFatReducer from './reducers/selected_flat_reducer';


// here we have the redux state tree
const reducers = combineReducers({
 flats: flatsReducer,
 selectedFat: selectedFatReducer
});

import App from './components/app'

const root = document.getElementById('root');

ReactDOM.render(
  <Provider store={createStore(reducers)}>
  <App />
  </Provider>,
  root
 );

