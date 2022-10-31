import { createSlice } from '@reduxjs/toolkit';
import { cloneDeep } from 'lodash';

const initialState = {
	values: []
};

export const cardInformationSlice = createSlice({
	name: 'results',
	initialState,
	reducers: {
		setCaracterInformation: (state, action) => {
			state.values = cloneDeep(action.payload);
		}
	}
});

export default cardInformationSlice.reducer;

export const { setCaracterInformation } = cardInformationSlice.actions;