
import React, { Component } from 'react';
import axios from 'axios';
import CheckBox from 'react-native-checkbox';
import { FlatList, Text, TextInput, View, ScrollView } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from '../common';
import QuestionTypeDetail from '../detailedcomponents/QuestionTypeDetail';

class CurrentOpioidMisuseMeasure extends Component {
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
		console.log('Current Opiod misuse measure props object: ', this.props.object.questions);
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
					<Text style={{ margin: 5, fontSize: 20 }}>Current Opioid Misuse Measure</Text>
					<Text>
						Please answer each question as honestly as possible. Keep in mind that we are only asking about the past 30 days. There are no right or wrong answers. If you are unsure about how to answer the question, please give the best answer you can.
					</Text>
					<FlatList 
						data={newList.content}
						keyExtractor={(x, i) => i}
						// renderItem={({ item, index }) => 
							// console.log('index and item.question ', index, item.question)}
						renderItem={({ item, index }) => 
							<QuestionTypeDetail item={item} index={index} title={this.props.object.title} email={this.props.email} patient_object={this.props.patient_object} />						}
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

export default CurrentOpioidMisuseMeasure;