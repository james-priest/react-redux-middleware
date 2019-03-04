// src/js/actions/index.js

//const ADD_ARTICLE = "ADD_ARTICLE";
import { ADD_ARTICLE } from "../constants/action-types";

export function addArticle(payload) {
  return {
    type: ADD_ARTICLE,
    payload
  };
}
