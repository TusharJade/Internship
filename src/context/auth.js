import { createContext, useContext, useState } from "react";

const authContext = createContext(null);

const AuthContextProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    stepOne: false,
    stepTwo: false,
    stepThree: false,
  });
  return (
    <authContext.Provider value={{ authState, setAuthState }}>
      {children}
    </authContext.Provider>
  );
};

const useAuthContext = () => useContext(authContext);

export { AuthContextProvider, useAuthContext };
