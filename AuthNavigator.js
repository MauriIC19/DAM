import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/Login";
import SignIn from "./screens/SignIn";
import Home from "./screens/Home";
import Loading from "./screens/Loading";

import { useAuth } from './AuthContext';

export default function AuthNavigator() {
  const Stack = createNativeStackNavigator();

  const { loading, signout, user } = useAuth();

  if (loading) {
    return <Loading />;
  }

  return (
    <NavigationContainer>
        <Stack.Navigator>
          {user == null ? (
            <>
              <Stack.Screen
                name="Login"
                component={Login}
                options={{
                  headerShown: false,
                  animationTypeForReplace: signout ? "pop" : "push",
                }}
              />
              <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{ headerShown: false }}
              />
            </>
          ) : (
            <Stack.Screen name="Home" component={Home} />
          )}
        </Stack.Navigator>
    </NavigationContainer>
  );
}