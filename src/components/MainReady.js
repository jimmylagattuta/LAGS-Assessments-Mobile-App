import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Card, CardSection, Header, Button } from './common';
import { getAssessments } from '../actions';
import QualityOfLife from './tests/QualityOfLife';
import TempAssessment from './tests/TempAssessment';
import AssessmentThree from './tests/AssessmentThree';
// import AssessmentDetail from './detailedcomponents/AssessmentDetail';

class MainReady extends Component {
	state = { assessments: [], assessment: '', object: [], headerTextPlaceholder: 'Choose Assessment'
			}

	componentWillMount() {
		console.log('@__@ assessment: ', this.state.assessment);
		console.log('props ', this.props);
		this.triggerGetAssessments();
	}

	onButtonPress(title) {
		console.log('title onButtonPress ', title);
		let toStateAsObject = [];
		this.state.assessments.forEach((item) => {
			if (item.title === title) {
				toStateAsObject = item;
			}
		});
		console.log('TO SEND TO CHILD ASSESSMENT COMPONENT toStateAsObject ', toStateAsObject);

		this.setState({ assessment: title,
						object: toStateAsObject,
						headerTextPlaceholder: title });
		console.log('@__@ assessment: ', this.state.assessment);
	}

	triggerGetAssessments() {
		this.props.getAssessments()
			.then((response) => this.setState({ assessments: response.payload.data[0].content }));
	}

	renderAssessments() {
		console.log('the assessments should be here : ', this.state.assessments);

		return (
			this.state.assessments.map(assessment => 
				<CardSection 
					centerStyle={{
						alignItems: 'center',
						justifyContent: 'center'
					}}
					key={assessment.title}
				>
					<Button onPress={() => this.onButtonPress(assessment.title)}>
						{assessment.title}
					</Button>
				</CardSection>
			)
		);
	}


	renderContent() {
		switch (this.state.assessment) {
			case 'Quality Of Life Assessment':
				return (
					<View>
						<QualityOfLife assessment={this.state.assessment} object={this.state.object} />
					</View>
				);
			case 'Temp Assessment':
				return (
					<View>
						<TempAssessment assessment={this.state.assessment} object={this.state.object} />
					</View>
				);
			case 'Assessmen Three':
				return (
					<View>
						<AssessmentThree assessment={this.state.assessment} object={this.state.object} />
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
				<Header headerText={this.state.headerTextPlaceholder} />
				<Card>
					<CardSection>
						{this.renderContent()}
					</CardSection>
				</Card>
			</View>
		);
	}
}

// const styles = {
// 	centerStyle: {
// 		justifyContent: 'center',
// 		alignItems: 'center',
// 		marginRight: 10,
// 		marginLeft: 10 
// 	}
// };

export default connect(null, { getAssessments })(MainReady);
