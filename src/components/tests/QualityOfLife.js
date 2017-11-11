import React, { Component } from 'react';
// import { Button, Card, CardSection, Input, Spinner } from '../common';
import { FlatList, Text } from 'react-native';
import { Card } from '../common';

class QualityOfLife extends Component {
	state = { questions: [] };

	componentWillMount() {
		console.log('componentWillMount!!! heres the props: ', this.props);
		console.log('QualityOfLife componentWillMount with props object: ', this.props.object);
		console.log('props object questions: ', this.props.object.questions);
		console.log('state ', this.state.questions);
		const list = [];
		this.props.object.questions.forEach((question) => {
			list.push(question);
		});
		// this.setStateQuestions(this.props.object.questions);
		console.log('list ', list);
		const newList = {
			content: list
		};
		console.log('new_list.content', newList.content);
	}

	render() {
		console.log('newList', this.newList);
		console.log('QualityOfLife componentWillMount with props object: ', this.props.object);
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

export default QualityOfLife;
