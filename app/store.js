import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import dataReducer from './reducers/dataReducer';

import {composeWithDevTools} from 'redux-devtools-extension';

const reducers = combineReducers({
  // Reducers go here
  data: dataReducer,
});

let middlewares = applyMiddleware(thunk);

const initState = {
  data : {
    categories : [],
    locations : [],
  }
};

const store = createStore(
  reducers,
  initState,
  composeWithDevTools(middlewares),
);

export default store;
