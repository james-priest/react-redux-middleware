// src/js/actions/index.js

//const ADD_ARTICLE = "ADD_ARTICLE";
import { ADD_ARTICLE, FOUND_BAD_WORD } from "../constants/action-types";

export function addArticle(payload) {
  return {
    type: ADD_ARTICLE,
    payload
  };
}

export function foundBadWord(payload) {
  return {
    type: FOUND_BAD_WORD,
    payload
  };
}

// export function getData() {
//   return function(dispatch) {
//     return fetch("https://jsonplaceholder.typicode.com/posts")
//       .then(response => response.json())
//       .then(json => {
//         dispatch({ type: "DATA_LOADED", payload: json });
//       });
//   };
// }

export function getData() {
  // return async function(dispatch, getState) {
  return async function(dispatch) {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await response.json();
    dispatch({ type: "DATA_LOADED", payload: json });
    // console.log(getState().remoteArticles.slice(3, 4));
  };
}
