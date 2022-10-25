import { createSlice } from '@reduxjs/toolkit';
import { cloneDeep } from 'lodash';

const initialState = {
	values: []
};

export const resultsSlice = createSlice({
	name: 'results',
	initialState,
	reducers: {
		setResults: (state, action) => {
			state.values = cloneDeep(action.payload);
		}
	}
});

export default resultsSlice.reducer;

export const { setResults } = resultsSlice.actions;
