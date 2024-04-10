import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, TextInput, Text, Alert } from "react-native";

import Button from "../components/Button";

export default function SignIn() {
  const userForm = {
    user: null,
    mail: null,
    password: null,
    password_check: null
  }

  const signin = () => {
    console.log(userForm)
    Alert.alert("Bienvenido", "Registro exitoso");
  };

  return (
    <View style={styles.container}>
      <View style={styles.upper_container}>
        <Text style={[styles.header, {width: "90%", fontSize: 50, textAlign: "left"}]}>Registro</Text>
        <TextInput
          onChangeText={(text) => userForm.user = text}
          style={styles.input}
          placeholder="Usuario..."
        />
        <TextInput
          onChangeText={(text) => userForm.mail = text}
          style={styles.input}
          placeholder="Correo..."
        />
        <TextInput
          onChangeText={(text) => userForm.password = text}
          style={styles.input}
          placeholder="Contraseña..."
          secureTextEntry={true}
        />
         <TextInput
          onChangeText={(text) => userForm.password_check = text}
          style={styles.input}
          placeholder="Confirmar contraseña..."
          secureTextEntry={true}
        />
        <Button
          text={"Registrarme"}
          style={{ backgroundColor: "white" }}
          action={signin}
        />
      </View>
      <View style={styles.bottom_container}>
        <Text onPress={()=>{console.log()}} style={styles.link}>Ya tengo cuenta</Text>
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
