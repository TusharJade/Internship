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
    case "STEP_TWO_SUBMISSION":
      return {
        ...storedDataState,
        email: action.payload.email,
      };
    case "STEP_THREE_SUBMISSION":
      return {
        ...storedDataState,
        jobRole: action.payload.jobRole,
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
    case "ADD_GENDER":
      return {
        ...storedDataState,
        gender: action.payload,
      };
    case "ADD_NAME":
      return {
        ...storedDataState,
        name: action.payload,
      };

    case "ADD_JOB_ROLE":
      return {
        ...storedDataState,
        jobRole: storedDataState.jobRole.includes(action.payload)
          ? [...storedDataState.jobRole]
          : [...storedDataState.jobRole, action.payload],
      };
    case "REMOVE_JOB_ROLE":
      return {
        ...storedDataState,
        jobRole: storedDataState.jobRole.filter(
          (item) => item !== action.payload
        ),
      };
    case "EXPERIENCE":
      return {
        ...storedDataState,
        experience: action.payload,
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
