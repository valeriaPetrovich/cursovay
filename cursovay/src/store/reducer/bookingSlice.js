import { createSlice } from '@reduxjs/toolkit';
import { cloneDeep } from 'lodash';

const initialState = {
	data: [],
    time:[],
    guases:[]
};

export const bookingSlice = createSlice({
	name: 'results',
	initialState,
	reducers: {
		setData: (state, action) => {
			state.data = cloneDeep(action.payload);
		},
		setTime: (state, action) => {
			state.time = cloneDeep(action.payload);
		},
		setGuases: (state, action) => {
			state.guases = cloneDeep(action.payload);
		}

	}
});

export default bookingSlice.reducer;

export const { setData, setGuases, setTime
 } = bookingSlice.actions;