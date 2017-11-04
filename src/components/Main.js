import React, { Component } from 'react';
import axios from 'axios';
import { View } from 'react-native';
import MainReady from './MainReady';
import { Button, Card, CardSection, Input, Spinner } from './common';

class Main extends Component {
	state = { patientName: '', dateOfBirth: '', page: '', loading: false };

	componentWillMount() {
		axios.get('http://localhost:3000/api/v1/lagz_forms/assessments/check')
			.then(response => {
				console.log('response is here: ', response.data.message);
				if (response.data.message === 'Params, no content') {
					this.setState({ page: '' });
				} else if (response.data.message !== 'Params, no content') {
					this.setState({ page: 'PatientReady' });
				}
			});
	}


	onButtonPress() {
		const { patientName, dateOfBirth } = this.state;

		this.setState({ loading: true });

		const items = {
			Name: patientName,
			dateOB: dateOfBirth
		};

		axios.post('http://localhost:3000/api/v1/lagz_forms/assessments/reciever', items)
			.then(this.patientReady())
			.catch(() => console.log('error'));
	}

	patientReady() {
		this.setState({ loading: false,
						page: 'PatientReady' });
	}

	renderContent() {
		switch (this.state.page) {
			case 'PatientReady':
				return (
					<MainReady />
				);
			default:
				return (
					<Card>
						<CardSection>
							<Input
								placeholder="Jane Smith"
								label="Patient Name"
								value={this.state.patientName}
								onChangeText={text => this.setState({ patientName: text })}
							/>
						</CardSection>

						<CardSection>
							<Input
								placeholder="01/02/1983"
								label="DOB"
								value={this.state.dateOfBirth}
								onChangeText={text => this.setState({ dateOfBirth: text })}
							/>
						</CardSection>

						<CardSection>
							{this.renderButton()}
						</CardSection>

					</Card>
				);
		}
	}

	renderButton() {
		if (this.state.loading) {
			return (
				<Spinner size="small" />
			);
		}

		return (
			<Button onPress={this.onButtonPress.bind(this)}>
				Submit
			</Button>
		);
	}

	render() {
		console.log('patient_name: ', this.state.patientName);

		return (
			<View>
				{this.renderContent()}
			</View>
		);
	}
}

export default Main;
