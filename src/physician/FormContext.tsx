import {
    Dispatch,
    ReactNode,
    SetStateAction,
    createContext,
    useContext,
    useState,
  } from "react";
  import { updatePatientDetails } from "../actions/api";
  import { UpdatePatientDto } from "../dto/UpdatePatientDto";
  import Patient from "../models/Patient";
  
  interface IFormContext {
    patientId: any;
    patientData: any;
    setPatientData: Dispatch<SetStateAction<any>>;
    onHandleBack: () => void;
    onHandleNext: () => void;
    step: number;
    steppedBack: boolean;
  }
  
  const FormContext = createContext<IFormContext>({
    patientId: "",
    patientData: new Patient(),
    onHandleBack: () => {},
    onHandleNext: () => {},
    setPatientData: () => {},
    step: 0,
    steppedBack: false,
  });
  
  interface IProps {
    children: ReactNode;
  }
  
  export function FormProvider({ children }: IProps) {
    const [patientData, setPatientData] = useState(new Patient());
    var [patientId, setPatientId] = useState(0);
    const [step, setStep] = useState(1);
    const [steppedBack, setSteppedBack] = useState(false);
  
    function onHandleNext() {
      setStep((prev) => prev + 1);
      //if (!steppedBack) setSteppedBack(false);
    }
  
    function onHandleBack() {
      setStep((prev) => prev - 1);
      //setSteppedBack(true);
      console.log(patientData);
    }
  
    return (
      <FormContext.Provider
        value={{
          patientId,
          patientData,
          setPatientData,
          onHandleBack,
          onHandleNext,
          step,
          steppedBack,
        }}
      >
        {children}
      </FormContext.Provider>
    );
  }
  
  export function useFormState() {
    return useContext(FormContext);
  }
  