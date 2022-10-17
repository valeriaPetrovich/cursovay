import { createSlice } from '@reduxjs/toolkit';
import { cloneDeep } from 'lodash';

const initialState = {
	values: []
};

export const searchSlice = createSlice({
	name: 'results',
	initialState,
	reducers: {
		setSearchSlise: (state, action) => {
			state.values = cloneDeep(action.payload);
		}
	}
});

export default searchSlice.reducer;

export const { setSearchSlise } = searchSlice.actions;