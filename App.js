import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/Login";
import SignIn from "./screens/SignIn";
import Home from "./screens/Home";
import Loading from "./screens/Loading";

export default function App() {
  const Stack = createNativeStackNavigator();

  const isLoading = false;
  const isSignout = false;
  const userToken = null;


  if (isLoading) {
    return <Loading />;
  }

  return (
    <NavigationContainer>
        <Stack.Navigator>
          {userToken == null ? (
            <>
              <Stack.Screen
                name="Login"
                component={Login}
                options={{
                  headerShown: false,
                  animationTypeForReplace: isSignout ? "pop" : "push",
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
