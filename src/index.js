import { registerRootComponent } from 'expo';
import { ExpoRoot } from 'expo-router'; // Make sure this import is correct
import React from 'react';

// Must be exported or Fast Refresh won't update the context
const App = () => {
  const ctx = require.context('./app'); // Make sure the path is correct
  return <ExpoRoot context={ctx} />;
};

registerRootComponent(App);

export default App; // Export the component to be used elsewhere if needed
