import { combineReducers } from 'redux';
import AssessmentsReducer from './AssessmentsReducer';

export default combineReducers({
	getAssessments: AssessmentsReducer
});
