import { useFormik } from "formik";
import React from "react";
import { useState } from "react";
import { useFormState } from "./FormContext";
// import { useFormState } from './FormContext'; // Ensure this import is correct

const Physicians = () => {
  const { onHandleNext, onHandleBack, setPatientData, patientData } =
    useFormState();
  // console.log('data', JSON.stringify(patientData));

  const { values, errors, handleSubmit, handleChange } = useFormik({
    initialValues: {
      hasPhysician:
        patientData.hasPhysician !== 1 ? patientData.hasPhysician : 1,
      physicianName:
        patientData.physicianName !== "" ? patientData.physicianName : "",
    },
    onSubmit: (values) => {
      console.log("Form submitted!", values);
      // onHandleFormSubmit(values);
    },
  });

  // type TFormValues = {
  //   hasPhysician: '';
  //   physicianName: '';
  // };

  // const onHandleBackBtn = (data: TFormValues) => {
  //   setPatientData((prev) => ({ ...prev, ...data }));
  //   console.log('back', JSON.stringify(patientData));
  //   onHandleBack();
  // };

  const [selectedOption, setSelectedOption] = useState("");

  const handleRadioChange = (event) => {
    const value = event.target.value;
    setSelectedOption((prev) => (prev === value ? "" : value));
    console.log("selectedOption", selectedOption);
  };

  const optionsPhysician = [
    { label: "Yes, I have one" },
    { label: "I want one" },
    { label: "I don't want one" },
  ];
  return (
    <form onSubmit={handleSubmit}>
      <div className="p-4">
        <div className="px-4 py-5 flex flex-col justify-start items-start gap-5">
          <div className="text-black text-lg font-normal">
            Do you have a primary care physician?
          </div>
          <div className="w-full flex flex-col justify-start items-start gap-5">
            <div className="w-full flex flex-col justify-start items-start gap-5">
              <div className="w-full flex flex-col justify-start items-start gap-3">
                <div className="w-full flex justify-start items-center gap-4">
                  <div className="w-6 h-6 p-0.5 rounded-lg border border-[#0067a1] flex justify-center items-center">
                    <div className="w-5 h-5 bg-[#0067a1] rounded-md" />
                  </div>
                  <div className="flex flex-col justify-center items-start gap-2">
                    <div className="text-right text-[#2a2f31] text-base font-normal">
                      Yes, I have one.
                    </div>
                  </div>
                </div>
                <div className="w-full p-4 bg-[#e8f2f5] rounded-xl flex flex-col justify-start items-start gap-4">
                  <div className="w-full px-4 py-2 bg-white rounded-lg border border-[#dbddde] flex flex-col justify-start items-start gap-2.5">
                    <div className="w-full flex justify-start items-center gap-4">
                      <div className="flex flex-col justify-between items-start w-full">
                        <div className="text-[#6e787a] text-xs font-normal">
                          Physician’s Name
                        </div>
                        <div className="text-[#2a2f31] text-base font-normal">
                          Last Name, First Name
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-start items-center gap-4">
                <div className="w-6 h-6 relative rounded-lg border border-[#dbddde]" />
                <div className="flex flex-col justify-center items-start gap-2">
                  <div className="text-right text-[#2a2f31] text-base font-normal">
                    I want one.
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-start items-center gap-4">
                <div className="w-6 h-6 relative rounded-lg border border-[#dbddde]" />
                <div className="flex flex-col justify-center items-start gap-2">
                  <div className="text-right text-[#2a2f31] text-base font-normal">
                    I don’t want one.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* mano */}
        <div className="text-black py-5 text-lg font-normal">
          Do you have a primary care physician?
        </div>

        {optionsPhysician.map((option, index) => (
          <div className="flex-col">
            <div key={index} className="flex flex-col my-4">
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="radio"
                  value={option.label}
                  checked={selectedOption === option.label}
                  onChange={handleRadioChange}
                  className="hidden"
                />
                <div
                  className={`w-6 h-6  rounded-lg border ${
                    selectedOption === option.label
                      ? "bg-white border border-[#0067A1]"
                      : "bg-white border-[#dbddde]"
                  } justify-center items-center inline-flex`}
                >
                  <div
                    className={`w-5 h-5 rounded-md ${
                      selectedOption === option.label
                        ? "bg-[#0067a1]"
                        : "bg-white border-gray-300"
                    }`}
                  />
                </div>
                <span className="ml-2 text-[#2a2f31] text-lg font-normal">
                  {option.label}
                </span>
              </label>
            </div>
            {selectedOption === "Yes, I have one" && option.label === "Yes, I have one" && (

            <div
          className=""
        >
          <div className="mt-4 relative">
            <div className="w-full p-4 bg-[#e8f2f5] rounded-xl flex flex-col justify-start items-start gap-4">
              <div className="w-full px-4 py-2 bg-white rounded-lg border border-[#dbddde] flex flex-col justify-start items-start gap-2.5">
                <div className="w-full flex justify-start items-center gap-4">
                  <div className="flex flex-col justify-between items-start w-full gap-1 ">
                    <div className="text-[#6e787a] text-xs font-normal">
                      Physician’s Name
                    </div>
                    <div className="text-[#2a2f31] text-base font-normal">
                      <input
                        type="text"
                        id="physicianName"
                        name="physicianName"
                        onChange={handleChange}
                        value={values.physicianName}
                        placeholder="Last Name, First Name"
                        className="placeholder:text-[#2a2f31] outline-none ring-0 w-full "
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
            )}
          </div>
        ))}
    
        <div className="p-6 flex-1 h-screen flex items-end gap-4">
          <div className="w-2/6">
            <button
              type="button"
              id="back"
              // onClick={() => onHandleBackBtn(values)}
              className="w-full rounded-3xl text-black text-center py-2 border-slate-600 border-2"
            >
              Back
            </button>
          </div>
          <div className="w-4/6">
            <button
              type="submit"
              id="Next"
              className="w-full rounded-3xl text-white text-base font-semibold text-center py-2 bg-spruce-4"
            >
              Complete registration
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Physicians;
