import { View, Text } from "react-native";
import { Button } from "../components/Button";
import { useAuth } from "../AuthContext";

export default function Home() {
  const { signOut } = useAuth();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Bienvenido</Text>
      <Button action={signOut} text={"Cerrar sesión"}/>
    </View>
  );
}