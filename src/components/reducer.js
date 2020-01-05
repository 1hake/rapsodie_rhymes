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
    sentence: "",
    matches: null,
    panelOpen: false
  },
  action
) {
  switch (action.type) {
    case ACTIONS.OPEN_PANEL:
      return {
        ...state,
        panelOpen: action.data
      };
    case ACTIONS.CLOSE_PANEL:
      return {
        ...state,
        panelOpen: false
      };
    case ACTIONS.ADD_MATCHES:
      return {
        ...state,
        matches: action.data
      };
    case ACTIONS.RESET:
      return {
        ...state,
        rhymeBlock: [],
        matches: null
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
      const newList = currentList.filter(elem => {
        if (action.indexSentence == elem.indexSentence) {
          if (action.index - 1 == elem.index) {
            return false;
          }
          return true;
        }
        return true;
      });
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
