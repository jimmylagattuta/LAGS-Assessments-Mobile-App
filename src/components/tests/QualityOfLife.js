import React, { Component } from 'react';
// import { Button, Card, CardSection, Input, Spinner } from '../common';
import { Text } from 'react-native';
import { Card } from '../common';

class QualityOfLife extends Component {
	componentWillMount() {
		console.log('componentWillMount!!! heres the props: ', this.props);
	}

	render() {
		return (
			<Card>
				<Text>QualityOfLife</Text>
			</Card>
		);
	}
}

export default QualityOfLife;
