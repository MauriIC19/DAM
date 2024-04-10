import * as React from 'react';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, TextInput, Text, Alert } from "react-native";

import Button from "../components/Button";

export default function Login() {
  const userForm = {
    mail: null,
    password: null,
  }

  const login = () => {
    Alert.alert("Bienvenido", "Sesión iniciada");
    signIn(name, password);
  };

  const signin = () => {
    Alert.alert("Bienvenido", "Registro exitoso");
  };

  return (
    <View style={styles.container}>
      <View style={styles.upper_container}>
        <Text style={styles.header}>Hola, Mundo.</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => { userForm.mail = text }}
          placeholder="Usuario..."
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => { userForm.password = text }}
          placeholder="Contraseña..."
          secureTextEntry={true}
        />
        <Button
          text={"Iniciar sesión"}
          style={{ backgroundColor: "white" }}
          action={login}
        />
      </View>
      <View style={styles.bottom_container}>
        <Text onPress={()=>{console.log()}} style={styles.link}>¿No tienes cuenta? ¡Regístrate!</Text>
      </View>
      <StatusBar backgroundColor="red" style="light" hidden={false} />
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
    borderRadius: 10,
    padding: 10,
    backgroundColor: "white",
    fontFamily: "Helvetica",
  },
  header: {
    color: "white",
    fontSize: 80,
    fontFamily: "Helvetica",
  },
  link: {
    color: "skyblue",
    fontSize: 18,
  },
  upper_container: {
    flex: 3,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  bottom_container: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 25
  },
});
