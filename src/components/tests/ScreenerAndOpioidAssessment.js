import React, { Component } from 'react';
import CheckBox from 'react-native-checkbox';
import axios from 'axios';
// import { Button, Card, CardSection, Input, Spinner } from '../common';
import { FlatList, Text, TextInput, View, ScrollView } from 'react-native';
import { Card, Header, Button } from '../common';

class ScreenerAndOpioidAssessment extends Component {
	state = {
		toAPI: [],
		questionObject: [],
		arrayOfQ: [],
		tempValue: [],
		compareQuestion: ''
	}

	componentWillMount() {
		console.log('STATE', this.state);
		console.log('PROPS', this.props);
		// console.log('props temp assessment ', this.props);
		// console.log('props temp assessment sendAnswers', this.props.sendAnswers);

		if (this.state.questionObject) {
			console.log('questionObject', this.state.questionObject);
			if (this.state.arrayOfQ) {
				const newQuestions = [];
				newQuestions.push(this.state.questionObject[0]);
				newQuestions.push(this.state.arrayOfQ[0]);
				this.setState({ arrayOfQ: newQuestions[0],
								questionObject: []
							});
				console.log('arrayOfQ 1', this.state.arrayOfQ);
			} else {
				const newQuestion = [];
				newQuestion.push(this.state.questionObject[0]);
				this.setState({ arrayOfQ: newQuestion[0],
								questionObject: []
							});
				console.log('arrayOfQ 2', this.stata.arrayOfQ);
			}

			// this.props.sendAnswers(this.state.newQuestion);
		}
		// console.log('AssessmentThree componentWillMount with props: ', this.props);
		// console.log('AssessmentThree componentWillMount with props object: ', this.props.object);
		// console.log('props object questions: ', this.props.object.questions);
		// console.log('state ', this.state.questions);
		// const list = [];
		// this.props.object.questions.forEach((question) => {
			// list.push(question);
		// });
		// this.setStateQuestions(this.props.object.questions);
		// console.log('list ', list);
		// const newList = {
			// content: list
		// };
		// console.log('new_list.content', newList.content);
		// this.setState({ questions: newList.content });
	}

	// sendTheContent(content) {
	// 	if (content) {
	// 		this.props.sendAnswers(content);
	// 	}
	// }

	onButtonPress() {
		this.setState({ compareQuestion: '' });
	}

	render() {
		// console.log('newList', this.newList);
		// console.log('Temp Assessment componentWillMount with props object: ', this.props.object);
		const list = [];
		this.props.object.questions.forEach((question) => {
			list.push(question);
		});
		// console.log('list ', list);
		const newList = {
			content: list
		};
		// console.log('new_list.content', newList.content);
		const packageJSON = [];


		return (
			<View style={{ paddingBottom: 400 }}>
				<ScrollView>
					<Text style={{ margin: 5 }}>Screener and Opioid Assessment for Patients with Pain-Revised (SOAPP®-R)</Text>
					<Text style={{ margin: 5 }}>
						The following are some questions given to patients who are on or being considered for medication for their pain. Please answer each question as honestly as possible. There are no right or wrong answers.
					</Text>
					<View
						style={{
							flexDirection: 'column',
							justifyContent: 'space-between',
							paddingLeft: 4
						}}
					>
						<CheckBox
							label='0 Never'
						/>
						<CheckBox
							label='1 Seldom'
						/>
						<CheckBox
							label='2 Sometimes'
						/>
						<CheckBox
							label='3 Often'
						/>
						<CheckBox
							label='4 Very Often'
						/>
					</View>
					<FlatList 
						data={newList.content}
						keyExtractor={(x, i) => i}
						// renderItem={({ item, index }) => 
							// console.log('index and item.question ', index, item.question)}
						renderItem={({ item, index }) => 
							<View style={{ padding: 10 }}>
								<Text style={{ padding: 10, fontSize: 22 }}>
									{index + 1}) {item.question}
								</Text>
								<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
									<CheckBox
										name={item.question}
										label='0'
										onChange={(checked) => {
											console.log('I am checked yes', checked);
											console.log('I am checked yes initial state name', this.state.name);
											if (this.state.checkedYes) {
												this.setState({
													checkedYes: false,
													checkedNo: false,
													name: null
												});
											} else {
												this.setState({ 
													checkedYes: true,
													checkedNo: false,
													name: item.question
												});	
											}
											console.log('I am checked yes @_@', checked);
											console.log('I am checked yes initial state name @_@', this.state.name);
										}}
									/>
									<CheckBox
										name={item.question}
										label='1'
										onChange={(checked) => {
											console.log('I am checked no', checked);
											console.log('I am checked no initial state name', this.state.name);
											if (this.state.checkedNo) {
												this.setState({
													checkedNo: false,
													checkedYes: false,
													name: null
												});
											} else {
												this.setState({
													checkedNo: true,
													checkedYes: false,
													name: item.question
												});
											}
											console.log('I am checked no @_@', checked);
											console.log('I am checked no initial state name @_@', this.state.name);
										}}
									/>
									<CheckBox
										name={item.question}
										label='2'
										onChange={(checked) => {
											console.log('I am checked yes', checked);
											console.log('I am checked yes initial state name', this.state.name);
											if (this.state.checkedYes) {
												this.setState({
													checkedYes: false,
													checkedNo: false,
													name: null
												});
											} else {
												this.setState({ 
													checkedYes: true,
													checkedNo: false,
													name: item.question
												});	
											}
											console.log('I am checked yes @_@', checked);
											console.log('I am checked yes initial state name @_@', this.state.name);
										}}
									/>
									<CheckBox
										name={item.question}
										label='3'
										onChange={(checked) => {
											console.log('I am checked yes', checked);
											console.log('I am checked yes initial state name', this.state.name);
											if (this.state.checkedYes) {
												this.setState({
													checkedYes: false,
													checkedNo: false,
													name: null
												});
											} else {
												this.setState({ 
													checkedYes: true,
													checkedNo: false,
													name: item.question
												});	
											}
											console.log('I am checked yes @_@', checked);
											console.log('I am checked yes initial state name @_@', this.state.name);
										}}
									/>
									<CheckBox
										name={item.question}
										label='4'
										onChange={(checked) => {
											console.log('I am checked yes', checked);
											console.log('I am checked yes initial state name', this.state.name);
											if (this.state.checkedYes) {
												this.setState({
													checkedYes: false,
													checkedNo: false,
													name: null
												});
											} else {
												this.setState({ 
													checkedYes: true,
													checkedNo: false,
													name: item.question
												});	
											}
											console.log('I am checked yes @_@', checked);
											console.log('I am checked yes initial state name @_@', this.state.name);
										}}
									/>
								</View>
							</View>
						}
						// <Text>{item.question} id:{index}</Text>}
							// console.log('flatlist item ', item.question);
					/>
					<Button
						style={{ paddingTop: 20 }}
						onPress={() => {
							console.log('newText ', this.state.tempValue);
							const pack = {
								message: 'Finished',
								assessment: this.props.assessment,
								patient: this.props.patient,
								question: this.state.tempValue
							};
							console.log('pack', pack);
							axios.post('https:lags-assessments-mobileapp-api.herokuapp.com/api/v1/lagz_forms/assessments/answers', pack)
								.then((response) => {
									console.log('response!', response.data);
									if (response.data.data === 'Finished') {
										console.log('Finished');
										this.props.setPage;
									}
								});
						}}
					>
						Done
					</Button>
				</ScrollView>
			</View>
		);
	}
}

export default ScreenerAndOpioidAssessment;
