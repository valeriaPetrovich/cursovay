import { combineReducers, configureStore } from '@reduxjs/toolkit';
import resultsSlice from './reducer/resultsSlice';

const rootReducer = combineReducers({
	results: resultsSlice,
});

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer
	});
};
