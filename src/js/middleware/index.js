import { ADD_ARTICLE, FOUND_BAD_WORD } from "../constants/action-types";
import { foundBadWord } from "../actions/index";

const forbiddenWords = ["spam", "money"];

// export function forbiddenWordsMiddleware({ dispatch }) {
//   return function(next) {
//     return function(action) {
//       // do your stuff
//       if (action.type === ADD_ARTICLE) {
//         const foundWord = forbiddenWords.filter(word =>
//           action.payload.title.includes(word)
//         );
//         if (foundWord.length) {
//           return dispatch({ type: "FOUND_BAD_WORD" });  // old
//         }
//       }
//       return next(action);
//     };
//   };
// }

// export const forbiddenWordsMiddleware2 = ({ dispatch }) => {
//   return next => {
//     return action => {
//       // do your stuff
//       return next(action);
//     };
//   };
// };

export const forbiddenWordsMiddleware3 = ({ dispatch }) => next => action => {
  // do your stuff
  if (action.type === ADD_ARTICLE) {
    const foundWord = forbiddenWords.filter(word =>
      action.payload.title.includes(word)
    );
    if (foundWord.length) {
      const errMessage = `Forbidden word found: ${foundWord}`;
      return dispatch(foundBadWord(errMessage));
    }
  }
  if (action.type === FOUND_BAD_WORD) {
    console.log("Middleware intercept for FOUND_BAD_WORD action.");
    console.log(action.payload);
  }
  return next(action);
};
