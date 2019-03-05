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
