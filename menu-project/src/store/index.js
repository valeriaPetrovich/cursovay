import { combineReducers, configureStore } from '@reduxjs/toolkit';
import resultsSlice from './reducer/resultsSlice';
import searchSlice from './reducer/searchSlice';
import cardInformationSlice from './reducer/cardInformationSlice';
import statusSlice from './reducer/statusSlice';

const rootReducer = combineReducers({
	results: resultsSlice,
	search: searchSlice,
	cardInf: cardInformationSlice, 
	status: statusSlice
});

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer
	});
};
