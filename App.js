import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  function changeName() {
    if (name === '') {
      setErrorMessage('Please, fill the name');
    } else {
      setName('Alexandre');
    }
  }

  return (
    <View>
      <TextInput
        testID="txtName"
        placeholder="Insert the name"
        keyboardType="numeric"
        placeholderTextColor="#CDCDCD"
        value={name}
        onChangeText={setName}
      />
      <Button testID="btnAdd" title="Add" onPress={changeName} />

      <Text testID="txtResult">{name && name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
