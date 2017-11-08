import axios from 'axios';
import { GET_ASSESSMENTS } from './types';

export const getAssessments = () => {
	const request = axios.get('http://localhost:3000/api/v1/lagz_forms/assessments/get_assessments');
		console.log('request', request);
	return {
		type: GET_ASSESSMENTS,
		payload: request
	};
};
