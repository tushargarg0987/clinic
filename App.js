/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import HomePage from './screens/home';


function App(){

  const backgroundStyle = {
    backgroundColor: 'white',
  };

  return (
    <SafeAreaView style={{backgroundColor: 'white',flex: 1}}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'#F2F2F2'}
      />
      <HomePage />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
});

export default App;
