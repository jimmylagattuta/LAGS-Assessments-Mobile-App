import React, { Component } from 'react';
import CheckBox from 'react-native-checkbox';
import axios from 'axios';
import { FlatList, View, Text, TextInput, ScrollView } from 'react-native';
import { Button } from '../common';
import QuestionTypeDetail from '../detailedcomponents/QuestionTypeDetail';
// import { Card, Input } from '../common';

class QualityOfLife extends Component {
	state = { 
		questions: [],
		index: 0,
		id: 0,
		textPlace: '',
		textInState: '',
		packageToPackage: [],
		packageForApi: []
	};

	componentWillMount() {
		// console.log('componentWillMount!!! heres the props: ', this.props);
		// console.log('QualityOfLife componentWillMount with props object: ', this.props.object);
		// console.log('props object questions: ', this.props.object.questions);
		// console.log('state ', this.state.questions);
		const list = [];
		this.props.object.questions.forEach((question) => {
			list.push(question);
		});
		// this.setStateQuestions(this.props.object.questions);
		// console.log('list ', list);
		// const newList = {
		// 	content: list
		// };
		// console.log('new_list.content', newList.content);
		console.log('STATE', this.state);
		console.log('PROPS', this.props);
		console.log('this.state.packageToPackage cwm', this.state.packageToPackage);
	}

	renderQuestionType(item, index) {
		console.log('renderQuestionType item and index', item, index);

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
					<Text style={{ margin: 5, fontSize: 20 }}>Quality of Life Questionnaire</Text>
					<FlatList 
						data={newList.content}
						keyExtractor={(x, i) => i}
						// renderItem={({ item, index }) => 
							// console.log('index and item.question ', index, item.question)}
						renderItem={({ item, index }) => 
							<QuestionTypeDetail item={item} index={index} />
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

export default QualityOfLife;
			// WELL WRITTEN Component
							// <View style={{ padding: 10 }}>
								// <Text style={{ padding: 10, fontSize: 22 }}>
									// {index + 1}) {item.question}
								// </Text>
								// <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
									// <CheckBox
										// name={item.question}
										// label='Yes'
										// onChange={(checked) => {
											// console.log('I am checked yes', checked);
											// console.log('I am checked yes initial state name', this.state.name);
											// if (this.state.checkedYes) {
												// this.setState({
													// checkedYes: false,
													// checkedNo: false,
													// name: null
												// });
									// 		} else {
									// 			this.setState({ 
									// 				checkedYes: true,
									// 				checkedNo: false,
									// 				name: item.question
									// 			});	
									// 		}
									// 		console.log('I am checked yes @_@', checked);
									// 		console.log('I am checked yes initial state name @_@', this.state.name);
									// 	}}
									// />
									// <CheckBox
									// 	name={item.question}
									// 	label='No'
									// 	onChange={(checked) => {
									// 		console.log('I am checked no', checked);
									// 		console.log('I am checked no initial state name', this.state.name);
											// if (this.state.checkedNo) {
											// 	this.setState({
											// 		checkedNo: false,
											// 		checkedYes: false,
											// 		name: null
											// 	});
											// } else {
											// 	this.setState({
											// 		checkedNo: true,
											// 		checkedYes: false,
											// 		name: item.question
											// 	});
											// }
											// console.log('I am checked no @_@', checked);
											// console.log('I am checked no initial state name @_@', this.state.name);
										// }}
									// />
								// </View>
							// </View>
