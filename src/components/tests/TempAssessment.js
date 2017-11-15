import React, { Component } from 'react';
import axios from 'axios';
// import { Button, Card, CardSection, Input, Spinner } from '../common';
import { FlatList, Text, TextInput, View, ScrollView } from 'react-native';
import { Card, Header, Button } from '../common';

class TempAssessment extends Component {
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
								<TextInput
									style={{ height: 20 }}
									placeholder="your response"
									onChangeText={(text) => {
										console.log('props', this.props);
										console.log('B) patient name: ', this.props.patient);
										console.log('packageJSON 0', packageJSON);
										this.setState({ text });
										console.log('packageJSON 1', packageJSON);
										console.log('text: ', text);
										const q = item.question;
										console.log('packageJSON 2', packageJSON);
										console.log(this.state.toApi);
										const newText = {
											question: q,
											answer: text, 
											patient: this.props.patient,
											assessment: this.props.assessment,
											masterObject: this.state.toApi
										};
										console.log('packageJSON 3', packageJSON);
										this.setState({ tempValue: newText,
														compareQuestion: item.question 
													});
										if (this.state.compareQuestion && this.state.compareQuestion !== item.question) {
											axios.post('http://localhost:3000/api/v1/lagz_forms/assessments/answers', this.state.tempValue).then((response) => {
											console.log('response ', response.data.data);
											});
										} 
										console.log('packageJSON 4', packageJSON);
										console.log('tempValue ', this.state.tempValue);
										packageJSON.push(newText);
										console.log('packageJSON 5', packageJSON);

											// this.sendTheContent(packageJSON).bind(this);
											// this.props.sendAnswers(packageJSON)
											// 	.then((response) => {
											// 		console.log('response in component ', response);
											// 	});
									}} 
								/>
							</View>
						}
						// <Text>{item.question} id:{index}</Text>}
							// console.log('flatlist item ', item.question);
					/>
					<Button
						style={{ paddingTop: 50 }}
						onPress={() => {
							console.log('newText ', this.state.tempValue);
							const pack = {
								message: 'Finished',
								assessment: this.props.assessment,
								patient: this.props.patient,
								question: this.state.tempValue
							};
							console.log('pack', pack);
							axios.post('http://localhost:3000/api/v1/lagz_forms/assessments/answers', pack)
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

export default TempAssessment;
