import { useContext, useReducer, createContext } from "react";

const dataContext = createContext(null);

const storedDataFunction = (storedDataState, action) => {
  switch (action.type) {
    case "MOBILE_NUMBER":
      return {
        ...storedDataState,
        mobileNumber: action.payload,
      };
    case "STEP_ONE_SUBMISSION":
      return {
        ...storedDataState,
        gender: action.payload.gender,
        name: action.payload.name,
      };

    default:
      return storedDataState;
  }
};

const DataContextProvider = ({ children }) => {
  const [storedDataState, storedDataDispatch] = useReducer(storedDataFunction, {
    mobileNumber: "",
    name: "",
    gender: "",
    email: "",
    hometown: "",
    jobRole: "",
    experience: "",
  });
  return (
    <dataContext.Provider value={{ storedDataState, storedDataDispatch }}>
      {children}
    </dataContext.Provider>
  );
};
const useDataContext = () => useContext(dataContext);

export { DataContextProvider, useDataContext };
