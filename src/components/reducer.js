import { applyMiddleware, createStore } from "redux";
import createLogger from "redux-logger";
import thunk from "redux-thunk";
import { ACTIONS } from "./actions";

function reducer(
  state = {
    currentSentence: "",
    error: false,
    loading: false,
    rhymeBlock: [],
    sentence: ""
  },
  action
) {
  switch (action.type) {
    case ACTIONS.RESET:
      return {
        ...state,
        rhymeBlock: []
      };

    case ACTIONS.STORE_DATA:
      return {
        ...state,
        rhymeBlock: [
          ...state.rhymeBlock,
          {
            indexSentence: action.indexSentence,
            index: action.index,
            word: action.word,
            rhymes: action.data
          }
        ]
      };
    case ACTIONS.SET_LOADING:
      return {
        ...state,
        loading: action.data
      };
    case ACTIONS.SET_LOADING_FALSE:
      return {
        ...state,
        loading: false
      };
    case ACTIONS.SET_ERROR:
      return {
        ...state,
        error: true
      };
    case ACTIONS.DO_NOTHING:
      return {
        ...state
      };
    case "STORE_STUFF":
      return {
        ...state,
        sentence: action.data
      };
    case "DELETE_WORD":
      const currentList = state.rhymeBlock;
      console.log("currentList", currentList, action);
      const newList = currentList.filter(elem => {
        console.log(elem);
        if (action.indexSentence == elem.indexSentence) {
          if (action.index - 1 == elem.index) {
            return false;
          }
          return true;
        }
        return true;
      });
      console.log("newList", newList);
      return {
        ...state,
        rhymeBlock: newList
      };
    default:
      return state;
  }
}

const logger = createLogger();

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
