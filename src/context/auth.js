import { createContext, useContext, useReducer } from "react";

const authFunction = (authState, action) => {};
const authContext = createContext(null);

const AuthContextProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authFunction, {
    stepOne: false,
    stepTwo: false,
    stepThree: false,
  });
  return (
    <authContext.Provider value={{ authState, authDispatch }}>
      {children}
    </authContext.Provider>
  );
};

const useAuthContext = () => useContext(authContext);

export { AuthContextProvider, useAuthContext };
