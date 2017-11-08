import React, { Component } from 'react';
import axios from 'axios';
import { View } from 'react-native';
import { connect } from 'react-redux';
import MainReady from './MainReady';
import { getAssessments } from '../actions';
import { Button, Card, CardSection, Input, Spinner } from './common';

class Main extends Component {
	state = { patientName: '', dateOfBirth: '', page: '', loading: false };

	componentWillMount() {
		// this.props.getAssessments().then(response => response.json()).then(json => console.log(json));
		// .then(response => {
		// 		console.log('response is here: ', response.data.message);
		// 		if (response.data.message === 'Params, no content') {
		// 			this.setState({ page: '' });
		// 		} else if (response.data.message !== 'Params, no content') {
		// 			this.setState({ page: 'PatientReady' });
		// 		}
		// });
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
					<MainReady patient={this.state.patientName} />
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

const mapStateToProps = state => {
	const { getAssessments } = state;

	return { getAssessments };
};

export default connect(mapStateToProps, { getAssessments })(Main);
