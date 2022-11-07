import { combineReducers, configureStore } from '@reduxjs/toolkit';
import resultsSlice from './reducer/resultsSlice';
import searchSlice from './reducer/searchSlice';
import cardInformationSlice from './reducer/cardInformationSlice';
import statusSlice from './reducer/statusSlice';
import bookingSlice from './reducer/bookingSlice';
import receptDataSlice from './reducer/receptDataSlice';

const rootReducer = combineReducers({
	results: resultsSlice,
	search: searchSlice,
	cardInf: cardInformationSlice,
	status: statusSlice,
	booking: bookingSlice,
	receptData: receptDataSlice
});

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer
	});
};
