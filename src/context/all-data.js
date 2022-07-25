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
    case "STEP_TWO_SUBMISSION":
      return {
        ...storedDataState,
        email: action.payload.email,
        city: action.payload.city,
      };
    case "STEP_THREE_SUBMISSION":
      return {
        ...storedDataState,
        jobRole: action.payload.jobRole,
        experience: action.payload.experience,
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
    city: "",
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
