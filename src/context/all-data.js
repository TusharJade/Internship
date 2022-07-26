import axios from "axios";
import { useContext, useReducer, createContext } from "react";
import { toast } from "react-toastify";

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
      };
    case "STEP_THREE_SUBMISSION":
      return {
        ...storedDataState,
        jobRole: action.payload.jobRole,
        experience: action.payload.experience,
      };
    case "ADD_CITY":
      return {
        ...storedDataState,
        city: storedDataState.city.includes(action.payload)
          ? [...storedDataState.city]
          : [...storedDataState.city, action.payload],
      };
    case "DELETE_CITY":
      return {
        ...storedDataState,
        city: storedDataState.city.filter((item) => item !== action.payload),
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
    city: [],
    jobRole: [],
    experience: "",
  });

  const postRequest = async (data) => {
    try {
      const response = await axios.post(
        "https://api.fastjobs.io/frontendtask",
        {
          data,
        }
      );
      console.log(response);
      toast.success("API request send successfully", {
        autoClose: 2000,
      });
    } catch (error) {
      toast.error("API request failed", { autoClose: 2000 });
    }
  };
  return (
    <>
      <dataContext.Provider
        value={{ storedDataState, storedDataDispatch, postRequest }}
      >
        {children}
      </dataContext.Provider>
    </>
  );
};
const useDataContext = () => useContext(dataContext);

export { DataContextProvider, useDataContext };
