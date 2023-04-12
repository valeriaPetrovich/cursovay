import { createSlice } from '@reduxjs/toolkit';
import { cloneDeep } from 'lodash';

const initialState = {
	comment: [],
    receptName:[],
};

export const commentSlice = createSlice({
	name: 'results',
	initialState,
	reducers: {
		setCommentSlise: (state, action) => {
			state.comment = cloneDeep(action.payload);
		},
		setReceptNameSlise: (state, action) => {
			state.receptName = cloneDeep(action.payload);
		},

	}
});

export default commentSlice.reducer;

export const { setReceptNameSlise, setCommentSlise } = commentSlice.actions;