import React, { Component } from 'react';
// import { Button, Card, CardSection, Input, Spinner } from '../common';
import { FlatList, View, Text, TextInput } from 'react-native';
// import { Card, Input } from '../common';

class QualityOfLife extends Component {
	state = { 
		questions: [],
		text: ''
	};

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
				// renderItem={({ item, index }) => 
					// console.log('index and item.question ', index, item.question)}
				renderItem={({ item, index }) => 
					<View style={{ padding: 10 }}>
						<Text style={{ padding: 10, fontSize: 22 }}>
							{index}) {item.question}
						</Text>
						<TextInput
							style={{ height: 20 }}
							placeholder="your response"
							onChangeText={(text) => this.setState({ text })}
						/>
					</View>
				}
				// <Text>{item.question} id:{index}</Text>}
					// console.log('flatlist item ', item.question);
			/>
		);
	}
}

export default QualityOfLife;
