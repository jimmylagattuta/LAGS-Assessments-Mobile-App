
import React, { Component } from 'react';
import CheckBox from 'react-native-checkbox';
import axios from 'axios';
import { FlatList, Text, TextInput, View, ScrollView } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from '../common';

class PatientHealthQuestionnaire extends Component {
	state = { 
		questions: [],
		index: 0,
		id: 0,
		textInState: '',
		packageToPackage: [],
		packageForApi: [],
		text: '',
		checkedYes: false,
		checkedNo: false,
		name: ''
	};

	componentWillMount() {
		console.log('PatientHealthQuestionnaire props object: ', this.props.object.questions);
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
								<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
									<CheckBox
										name={item.question}
										label='Yes'
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
										label='No'
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

export default PatientHealthQuestionnaire;

				// if (item.question.starts_with('If you checked off any problems')) {
				// 	<Card key={item.id}>
				// 		<CardSection>
				// 			<form
				// 				style={{ justifyContent: 'center', paddingLeft: 5, paddingRight: 5 }}
				// 				placeholder='your response'
				// 				label={item.question}
				// 				value={this.state.text}
				// 				onChangeText={(text) => this.setState({ text })}
				// 			>
				// 				<input type="checkbox" value="Not difficult at all" />Not difficult at all
				// 				<input type="checkbox" value="Somewhat difficult" />Somewhat difficult
				// 				<input type="checkbox" value="Very difficult" />Very difficult
				// 				<input type="checkbox" value="Extremely difficult" />Extremely difficult
				// 			</form>
				// 		</CardSection>
				// 	</Card>;
				// } else {
				// 	<Card key={item.id}>
				// 		<CardSection>
				// 			<form
				// 				style={{ justifyContent: 'center', paddingLeft: 5, paddingRight: 5 }}
				// 				label={item.question}
				// 				value={this.state.text}
				// 				onChangeText={(text) => this.setState({ text })}
				// 			>
				// 				<input type="checkbox" value="0" />0
				// 				<input type="checkbox" value="1" />1
				// 				<input type="checkbox" value="2" />2
				// 				<input type="checkbox" value="3" />3
				// 			</form>
				// 		</CardSection>
				// 	</Card>;
				// )
