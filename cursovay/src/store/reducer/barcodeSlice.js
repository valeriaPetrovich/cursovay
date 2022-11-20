import { createSlice } from '@reduxjs/toolkit';
import { cloneDeep } from 'lodash';

const initialState = {
	values: []
};

export const barcodeSlice = createSlice({
	name: 'results',
	initialState,
	reducers: {
		setBarcodeSlise: (state, action) => {
			state.values = cloneDeep(action.payload);
		}
	}
});

export default barcodeSlice.reducer;
export const { setBarcodeSlise } = barcodeSlice.actions;