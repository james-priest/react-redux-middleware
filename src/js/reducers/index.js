// src/js/reducers/index.js

import { ADD_ARTICLE, FOUND_BAD_WORD } from "../constants/action-types";

const initialState = {
  articles: [],
  notices: []
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  } else if (action.type === FOUND_BAD_WORD) {
    // console.log(state);
    return Object.assign({}, state, {
      // notice: "Bad word dude!"
      notices: state.notices.concat(action.payload)
    });
  }
  return state;
}

export default rootReducer;
