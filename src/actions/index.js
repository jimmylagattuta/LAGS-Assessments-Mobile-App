import axios from 'axios';
import { GET_ASSESSMENTS, SEND_ANSWER } from './types';

export const getAssessments = () => {
	const request = axios.get('http://localhost:3000/api/v1/lagz_forms/assessments/get_assessments');
		console.log('request', request);
	return {
		type: GET_ASSESSMENTS,
		payload: request
	};
};

export const sendAnswer = (bundle) => {
	const request = axios.post('http://localhost:3000/api/v1/lagz_forms/assessments/answers', bundle);
	console.log('request ', request);
	return {
		type: SEND_ANSWER,
		payload: request
	};
};
