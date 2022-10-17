import { combineReducers, configureStore } from '@reduxjs/toolkit';
import resultsSlice from './reducer/resultsSlice';
import searchSlice from './reducer/searchSlice';

const rootReducer = combineReducers({
	results: resultsSlice,
	search: searchSlice
});

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer
	});
};
