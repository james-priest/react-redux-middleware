// src/js/store/index.js

import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/index";
import { forbiddenWordsMiddleware3 } from "../middleware/index";
import thunk from "redux-thunk";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  storeEnhancers(applyMiddleware(forbiddenWordsMiddleware3, thunk))
);

// Comment out to remove state output to console
store.subscribe(() => console.log(store.getState()));

export default store;
