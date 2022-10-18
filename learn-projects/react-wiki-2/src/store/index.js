import { combineReducers, configureStore } from '@reduxjs/toolkit';
import resultsSlice from './reducer/resultsSlice';
import searchSlice from './reducer/searchSlice';
import cardInformationSlice from './reducer/cardInformationSlice';

const rootReducer = combineReducers({
	results: resultsSlice,
	search: searchSlice,
	cardInf: cardInformationSlice
});

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer
	});
};
