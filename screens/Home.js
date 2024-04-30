import { useState } from "react";
import { View, Text, Image, Alert } from "react-native";
import { Button } from "../components/Button";
import { useAuth } from "../AuthContext";

export default function Home() {
  const alumnos = [
    { nombre: "Alex", edad: 21 },
    { nombre: "Rael", edad: 21 },
    { nombre: "Benjamín", edad: 26 },
    { nombre: "Osiel", edad: 22 },
    { nombre: "Luisito", edad: 20 },
    { nombre: "Joel", edad: 19 },
    { nombre: "Rull", edad: 20 },
  ];

  const { signOut } = useAuth();
  const [dog, setDog] = useState({
    message: "https://reactnative.dev/img/tiny_logo.png",
  });

  const loadDog = async () => {
    try {
      const request = await fetch("https://dog.ceo/api/breeds/image/random");
      setDog(await request.json());
      console.log(dog.message);
    } catch (e) {
      console.log(e);
      Alert.alert("Error", "Revise su conexión a internet");
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Bienvenido</Text>
      {alumnos.map((alumno) => (
        <>
          <Text>Nombre: {alumno.nombre}</Text>
          <Text>Edad: {alumno.edad}</Text>
        </>
      ))}
      <Image
        style={{ width: "90%", maxWidth: "90%", height: 400, maxHeight: "90%" }}
        source={{
          uri: dog.message,
        }}
      />
      <Button action={loadDog} text={"Cargar foto"} />
      <Button action={signOut} text={"Cerrar sesión"} />
    </View>
  );
}
