import React, {
  createContext,
  useReducer,
  useEffect,
  useMemo,
  useContext,
} from "react";
//import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = createContext();

export default AuthContext;

export function AuthProvider(props) {
  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case "CHECK_SESSION":
          return {
            ...prevState,
            loading: false,
            user: action.user,
          };
        case "SIGN_IN":
          return {
            ...prevState,
            signout: false,
            user: action.user,
          };
        case "SIGN_OUT":
          return {
            ...prevState,
            signout: true,
            user: null,
          };
      }
    },
    {
      signout: false,
      loading: true,
      user: null,
    }
  );

  useEffect(() => {
    const check_session = async () => {
      let user;
      try {
        //user = await AsyncStorage.getItem("user");
        user = null
      } catch (e) {
        alert("Algo salió mal");
        console.log(e);
      }
      dispatch({ type: "CHECK_SESSION", user: user });
    };
    check_session();
  }, []);

  const auth = useMemo(
    () => ({
      signout: state.signout,
      loading: state.loading,
      user: state.user,
      signIn: async (user, password) => {
        console.log(user, password);
        //Aquí la lógica para validar si es un usuario válido
        //await AsyncStorage.setItem("user", JSON.stringify(data));
        dispatch({ type: "SIGN_IN", user: "dummy user" });
      },
      signOut: async () => {
        //Aquí en realidad no hay mayor lógica más resetear las variables
        //await AsyncStorage.removeItem("user");
        dispatch({ type: "SIGN_OUT" });
      },
    }),
    [state]
  );

  return <AuthContext.Provider value={auth} {...props} />;
}

export function useAuth() {
  const auth = useContext(AuthContext);
  if (!auth) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return auth;
}

export function withAuth(Component) {
  return function ComponentWithAuth(props) {
    return (
      <AuthContext.Consumer>
        {(auth) => {
          if (!auth) {
            throw new Error("useAuth must be used within a AuthProvider");
          }
          return <Component {...props} auth={auth} />;
        }}
      </AuthContext.Consumer>
    );
  };
}
