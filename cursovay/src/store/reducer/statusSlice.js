import { createSlice } from '@reduxjs/toolkit';
import { cloneDeep } from 'lodash';

const initialState = {
	mains: [],
    desert:[],
    vegan:[]
};

export const statusSlice = createSlice({
	name: 'results',
	initialState,
	reducers: {
		setMainsSlise: (state, action) => {
			state.mains = cloneDeep(action.payload);
		},
		setDesertSlise: (state, action) => {
			state.desert = cloneDeep(action.payload);
		},
		setVeganSlise: (state, action) => {
			state.vegan = cloneDeep(action.payload);
		},

	}
});

export default statusSlice.reducer;

export const { setMainsSlise, setDesertSlise, setVeganSlise  } = statusSlice.actions;