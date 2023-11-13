import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import Calculadora from './components/Calculadora';
import Titol from './components/Titol';

const App = () => {

  return (
    <View style={styles.container}>
      <View style={styles.titol}>
      <Titol />
      </View>
      <Calculadora />
      
  
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    padding: 20,
  },
  titol: {
    flex : 0.2,

  },
  inputContainer: {
    marginBottom: 20,
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    flex: 0.5,
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  errorText: {
    flex: 0.5,
    color: 'red',
    marginLeft: 10,
  },
  buttonContainer: {
    marginTop: 10,
  },
  button: {
    paddingVertical: 10,
    backgroundColor: 'blue',
  },
  resultContainer: {
    marginTop: 20,
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;