import React, { Component } from 'react';
import { connect } from 'react-redux';
// import axios from 'axios';
import { View, Text } from 'react-native';
import { Card, CardSection, Header } from './common';
import { getAssessments } from '../actions';
import QualityOfLife from './tests/QualityOfLife';

class MainReady extends Component {
	state = { assessments: [], assessment: '' }

	componentWillMount() {
		this.setState({ assessment: '' });
		console.log('props ', this.props);
		this.triggerGetAssessments();
	}

	triggerGetAssessments() {
		this.props.getAssessments();
	}

	renderAssessments() {
		return (
			<Text>renderAssessments</Text>
			// this.state.assessments.map(assessment => 
			// 	<CardSection>
			// 		<Button 
			// 			key={assessment.title}
			// 			onPress={() => console.log('Assessment: ', assessment.title)}
			// 		/>
			// 	</CardSection>
			// )
		);
	}


	renderContent() {
		switch (this.state.assessment) {
			case 'qualityOfLife':
				return (
					<View>
						<QualityOfLife />
					}
					</View>
					);
			default:
				return (
					<View>
						<View>
							{this.renderAssessments()}
						</View>
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

export default connect(null, { getAssessments })(MainReady);
