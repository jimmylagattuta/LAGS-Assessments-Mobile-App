import React, { Component } from 'react';
// import { Button, Card, CardSection, Input, Spinner } from '../common';
import { FlatList, View, Text } from 'react-native';
import { Card } from '../common';

class AssessmentThree extends Component {
	state = { questions: [] };

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

	setStateQuestions(qs) {
		// console.log('triggered ', qs);
		const list = [];
		qs.forEach((question) => {
			list.push(question);
		});
		// console.log('triggered');
	}

	render() {
		// console.log('newList', this.newList);
		// console.log('AssessmentThree componentWillMount with props object: ', this.props.object);
		const list = [];
		this.props.object.questions.forEach((question) => {
			list.push(question);
		});
		// console.log('list ', list);
		const newList = {
			content: list
		};
		// console.log('new_list.content', newList.content);

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

export default AssessmentThree;
