import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Resultado = ({ imc, visible }) => {
  const calculateMessageAndColor = (imc) => {
    if (!visible) {
      return { message: '', messageColor: 'black' };
    }

    let message = `Tens un IMC de: ${imc}. `;
    let messageColor = 'black';

    if (imc < 18.5) {
      message += 'Peso insuficiente';
      messageColor = 'green';
    } else if (imc >= 18.5 && imc < 25) {
      message += 'Normopeso';
      messageColor = 'green';
    } else if (imc >= 25 && imc < 27) {
      message += 'Sobrepeso grado I';
      messageColor = 'orange';
    } else if (imc >= 27 && imc < 30) {
      message += 'Sobrepeso grado II (preobesidad)';
      messageColor = 'orange';
    } else if (imc >= 30 && imc < 35) {
      message += 'Obesidad de tipo I';
      messageColor = 'orange';
    } else if (imc >= 35 && imc < 40) {
      message += 'Obesidad de tipo II';
      messageColor = 'orange';
    } else if (imc >= 40 && imc < 50) {
      message += 'Obesidad de tipo III (mórbida)';
      messageColor = 'red';
    } else {
      message += 'Obesidad de tipo IV (extrema)';
      messageColor = 'red';
    }

    return { message, messageColor };
  };

  const { message, messageColor } = calculateMessageAndColor(parseFloat(imc));

  return (
    <View style={styles.resultContainer}>
      <Text style={[styles.resultText, { color: messageColor }]}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  resultContainer: {
    marginTop: 20,
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Resultado;
