import { createSlice } from '@reduxjs/toolkit';
import { cloneDeep } from 'lodash';

const initialState = {
	values: []
};

export const statusSlice = createSlice({
	name: 'results',
	initialState,
	reducers: {
		setStatusSlise: (state, action) => {
			state.values = cloneDeep(action.payload);
		}
	}
});

export default statusSlice.reducer;

export const { setStatusSlise } = statusSlice.actions;