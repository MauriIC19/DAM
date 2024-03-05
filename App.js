import { useState } from 'react';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, TextInput, Text } from "react-native";

export default function App() {

  const [name, setName] = useState("Mundo");
  //let name = "Mundo";

  const inputManager = (text) => {
    setName(text);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Hola, {name}.
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={inputManager}
        placeholder="useless placeholder"
        secureTextEntry={false}
      />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: "90%",
    height: 60,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white"
  },
  header: {
    color: "white",
    fontSize: 80,
    fontFamily: 'Helvetica'
  }
});
