import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Titol = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    sectionStyle: {
      textAlign: 'center',
      alignItems: 'center'
    },
    redLetterStyle: {
      color: 'red',
      fontWeight: 'bold',
    },
    greenLetterStyle: {
      color: 'green',
      fontWeight: 'bold',
    },
    blueLetterStyle: {
      color: 'blue',
      fontWeight: 'bold',
    },
    titleText: {
      fontSize: 20,
      color: 'black',
    },
  });

  return (
    <View style={styles.container}>
        <View style={styles.sectionStyle}>
          <Text style={styles.titleText}>
            Calculadora
          </Text>
        </View>
      <View style={styles.titleStyle}>
          <Text style={styles.titleText}>
            <Text style={styles.redLetterStyle}>I</Text>
            <Text style={styles.greenLetterStyle}>M</Text>
            <Text style={styles.blueLetterStyle}>C</Text>
          </Text>
      </View>
    </View>
  );
};

export default Titol;
