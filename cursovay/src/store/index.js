import { combineReducers, configureStore } from '@reduxjs/toolkit';
import resultsSlice from './reducer/resultsSlice';
import searchSlice from './reducer/searchSlice';
import cardInformationSlice from './reducer/cardInformationSlice';
import statusSlice from './reducer/statusSlice';
import receptDataSlice from './reducer/receptDataSlice';
import barcodeSlice from './reducer/barcodeSlice';

const rootReducer = combineReducers({
	results: resultsSlice,
	search: searchSlice,
	cardInf: cardInformationSlice,
	status: statusSlice,
	receptData: receptDataSlice,
	barcode: barcodeSlice
});

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer
	});
};
