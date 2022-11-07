import { createSlice } from '@reduxjs/toolkit';
import { cloneDeep } from 'lodash';

const initialState = {
	values: []
};

export const receptDataSlise = createSlice({
	name: 'results',
	initialState,
	reducers: {
		setreceptDataSlise: (state, action) => {
			state.values = cloneDeep(action.payload);
		}
	}
});

export default receptDataSlise.reducer;

export const { setreceptDataSlise } = receptDataSlise.actions;