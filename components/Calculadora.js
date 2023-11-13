import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import Resultado from './Resultado';

const Calculadora = () => {
  const [pes, setPes] = useState('');
  const [alcada, setAlcada] = useState('');
  const [resultat, setResultat] = useState('');
  const [errorPes, setErrorPes] = useState('');
  const [errorAlcada, setErrorAlcada] = useState('');
  const [visibleResultado, setVisibleResultado] = useState(false);

  const calculateIMC = () => {
    const pesFloat = parseFloat(pes);
    const alcadaFloat = parseFloat(alcada);

    if (pesFloat > 0 && alcadaFloat > 0) {
      const imc = pesFloat / (alcadaFloat * alcadaFloat);
      setResultat(imc.toFixed(2));
      setVisibleResultado(true);
    } else {
      setResultat('');
      setVisibleResultado(false);
    }
  };

  const handlePesChange = (text) => {
    if (text.trim() === '') {
      setPes('');
      setErrorPes('');
    } else {
      const numericValue = parseFloat(text);
      if (numericValue === 0) {
        setErrorPes('L\'alçada ha de ser major de 0.0 m. Escriu l\'alçada en m. i amb valors positius (ex: 1.25)');
        setPes(text);
      } else if (numericValue < 0) {
        setPes(text);
        setErrorPes('L\'alçada ha de ser un número positiu. Escriu l\'alçada en m. i amb valors positius (ex: 1.25)');
      } else {
        setPes(text);
        setErrorPes('');
      }
    }
    setVisibleResultado(false); // Oculta el resultado al cambiar el valor
  };

  const handleAlcadaChange = (text) => {
    if (text.trim() === '') {
      setAlcada('');
      setErrorAlcada('');
    } else {
      const numericValue = parseFloat(text);
      if (numericValue === 0) {
        setErrorAlcada('L\'alçada ha de ser major de 0.0 m. Escriu l\'alçada en m. i amb valors positius (ex: 1.25)');
        setAlcada(text);
      } else if (numericValue < 0) {
        setAlcada(text);
        setErrorAlcada('L\'alçada ha de ser un número positiu. Escriu l\'alçada en m. i amb valors positius (ex: 1.25)');
      } else {
        setAlcada(text);
        setErrorAlcada('');
      }
    }
    setVisibleResultado(false); // Oculta el resultado al cambiar el valor
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <View style={styles.textInputContainer}>
          <TextInput
            mode="outlined"
            style={styles.input}
            label="Pes (Kg)"
            value={pes}
            onChangeText={handlePesChange}
            keyboardType="numeric"
            right={<TextInput.Affix text="Kg." />}
            outlineColor='green'
            activeOutlineColor='green'
          />
          <Text style={styles.errorText}>{errorPes}</Text>
        </View>
        <View style={styles.textInputContainer}>
          <TextInput
            mode='outlined'
            style={styles.input}
            label="Alçada (m)"
            value={alcada}
            onChangeText={handleAlcadaChange}
            keyboardType="numeric"
            right={<TextInput.Affix text="m." />}
            outlineColor='red'
            activeOutlineColor='red'
          />
          <Text style={styles.errorText}>{errorAlcada}</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          icon="calculator"
          mode="contained"
          onPress={() => {
            calculateIMC();
          }}
        >
          Calcula
        </Button>
      </View>
      <Resultado imc={resultat} visible={visibleResultado} />
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
    marginLeft: 15,
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

export default Calculadora;
