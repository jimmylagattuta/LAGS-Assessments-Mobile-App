import React, { Component } from 'react';
// import { Button, Card, CardSection, Input, Spinner } from '../common';
import { FlatList, Text } from 'react-native';
import { Card, Header } from '../common';

class TempAssessment extends Component {
	componentWillMount() {
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

	render() {
		console.log('newList', this.newList);
		console.log('Temp Assessment componentWillMount with props object: ', this.props.object);
		const list = [];
		this.props.object.questions.forEach((question) => {
			list.push(question);
		});
		console.log('list ', list);
		const newList = {
			content: list
		};
		console.log('new_list.content', newList.content);

		return (
			<FlatList 
				data={newList.content}
				keyExtractor={(x, i) => i}
				renderItem={({ item }) => <Text>{item.question}</Text>}
					// console.log('flatlist item ', item.question);
			/>
		);
	}
}

export default TempAssessment;
