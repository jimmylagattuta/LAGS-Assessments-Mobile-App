
import React, { Component } from 'react';
import axios from 'axios';
import { FlatList, Text, TextInput, View, ScrollView } from 'react-native';
import { Button } from '../common';

class SleepHealthQuestionnaire extends Component {
	state = { 
		questions: [],
		index: 0,
		id: 0,
		textInState: '',
		packageToPackage: [],
		packageForApi: [],
		text: ''
	};

	componentWillMount() {
		console.log('SleepHealthQuestionnaire props object: ', this.props.object.questions);
		console.log('STATE', this.state);
		console.log('PROPS', this.props);
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
										if (this.state.compareQuestion && this.state.compareQuestion
												!== item.question) {
											// https:lags-assessments-mobileapp-api.herokuapp.com/
											axios.post('https:lags-assessments-mobileapp-api.herokuapp.com/api/v1/lagz_forms/assessments/answers', this.state.tempValue).then((response) => {
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

export default SleepHealthQuestionnaire;
