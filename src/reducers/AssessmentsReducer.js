import { GET_ASSESSMENTS } from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case GET_ASSESSMENTS:
			console.log('action.payload.data[0].content', action.payload.data[0].content);
			return [action.payload, ...state];
		default:
			return state;
	}
};
