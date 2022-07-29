import { createContext, useContext, useState } from "react";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../firebase";

const authContext = createContext(null);

const AuthContextProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    stepOne: false,
    stepTwo: false,
    stepThree: false,
  });

  const setUpRecaptch = (num) => {
    const recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {},
      auth
    );
    recaptchaVerifier.render();
    return signInWithPhoneNumber(auth, num, recaptchaVerifier);
  };

  return (
    <authContext.Provider value={{ authState, setAuthState, setUpRecaptch }}>
      {children}
    </authContext.Provider>
  );
};

const useAuthContext = () => useContext(authContext);

export { AuthContextProvider, useAuthContext };
