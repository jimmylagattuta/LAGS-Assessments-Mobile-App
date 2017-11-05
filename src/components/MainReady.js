import React, { Component } from 'react';
import axios from 'axios';
import { View, Text, Picker } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';
import QualityOfLife from './tests/QualityOfLife';

class MainReady extends Component {
	state = { assessment: '' }

	componentWillMount() {
		this.setState({ assessment: '' });
	}


	renderContent() {
		switch (this.state.assessment) {
			case 'QualityOfLife':
				return (
					<View>
						<QualityOfLife />
					</View>
					);
			default:
				return (
					<View>
						<QualityOfLife />
					</View>
				);
		}
	}

	render() {
		return (
			<View>
				<Card>
					<CardSection>
					{this.renderContent()}
					</CardSection>
				</Card>
			</View>
		);
	}
}

export default MainReady;
