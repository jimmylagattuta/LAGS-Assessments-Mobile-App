//  index.js Placce code in here for IOS!!!

// Import a library to help create a component 
import React from 'react';
import { Text, AppRegistry } from 'react-native';

// Create a component
const App = () => (
      <Text id="the_text"> Some Text </Text>
);

// Render it to the device
AppRegistry.registerComponent('LAGS_Assessments', () => App);
