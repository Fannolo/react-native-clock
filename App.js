import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Clock} from './components';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Clock />
      </SafeAreaView>
    </>
  );
};

export default App;
