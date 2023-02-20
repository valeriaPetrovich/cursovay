import { combineReducers, configureStore } from '@reduxjs/toolkit';
import searchSlice from './reducer/searchSlice';
import statusSlice from './reducer/statusSlice';
import barcodeSlice from './reducer/barcodeSlice';

const rootReducer = combineReducers({
	search: searchSlice,
	status: statusSlice,
	barcode: barcodeSlice
});

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer
	});
};
