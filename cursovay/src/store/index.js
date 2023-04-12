import { combineReducers, configureStore } from '@reduxjs/toolkit';
import searchSlice from './reducer/searchSlice';
import statusSlice from './reducer/statusSlice';
import barcodeSlice from './reducer/barcodeSlice';
import commentSlice from './reducer/commentSlice';

const rootReducer = combineReducers({
	search: searchSlice,
	status: statusSlice,
	barcode: barcodeSlice,
	comment: commentSlice,
});

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer
	});
};
