import { TouchableOpacity, View, Text, StyleSheet, Alert } from "react-native";

export default Button = () => {
  
    const login = () => {
    Alert.alert("Bienvenido", "¡Hola, Mundo!");
  };

  return (
    <TouchableOpacity onPress={login}>
      <View style={styles.button_container}>
        <Text style={styles.button_text}>Iniciar sesión</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button_container: {
    backgroundColor: "white",
    width: 150,
    height: 50,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  button_text: {
    color: "rgba(0, 0, 0, 0.6)",
    fontFamily: "Helvetica",
  },
});
