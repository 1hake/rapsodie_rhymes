import { applyMiddleware, createStore } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import { ACTIONS } from './actions';

function reducer(
	state = {
		currentSentence: '',
		error: false,
		loading: false,
		rhymeBlock: []
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
					{ indexSentence: action.indexSentence, index: action.index, word: action.word, rhymes: action.data }
				]
			};
		case ACTIONS.STORE_TRANSFORMED:
			return {
				...state,
				transformedSentence: [ ...state.transformedSentence, action.data ]
			};
		case ACTIONS.STORE_SENTENCE:
			return {
				...state,
				currentSentence: action.data,
				currentWordList: action.data.replace(/'|-/gi, ' ').split(' ')
			};
		case ACTIONS.SET_LOADING:
			return {
				...state,
				loading: true,
				transformedSentence: []
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
		default:
			return state;
	}
}

const logger = createLogger();

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
