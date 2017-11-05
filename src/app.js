//  index.js Placce code in here for IOS!!!

// Import a library to help create a component 
import React, { Component } from 'react';
import axios from 'axios';
import { View } from 'react-native';
import Main from './components/Main';
import { Header } from './components/common';
// Create a component
class App extends Component {
	state = { page: '' }

	render() {
		return (
			<View>
				<Header headerText="LAGS Assessments" />
				<Main page={this.state.page} />
			</View>
		);
	}
}

export default App;
