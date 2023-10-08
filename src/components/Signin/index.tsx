import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import eyeOpen from "../../../public/eye-open-icon-1.svg";
import eyeClose from "../../../public/eye-closed-icon-1.svg";
import loginIllusion from "../../../public/login-illusion.svg";

import * as yup from "yup";
import { Formik } from "formik";

interface dataTypes {
  username: string;
  password: string;
}
const data: dataTypes = {
  username: "",
  password: "",
};
const dataSchema = yup.object().shape({
  password: yup.string().required("Password is required*"),
  username: yup.string().required("User Name is required*"),
});
export default function Signin() {
  const [showPassword, setShowPassword] = useState(false);
  const formRef: any = useRef();

  useEffect(() => {
    const handleKeyPress = (event: any) => {
      if (event.key === "Enter") {
        if (formRef.current) {
          formRef?.current.handleSubmit();
        }
      }
    };
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);
  return (
    <Formik
      innerRef={formRef}
      initialValues={data}
      validationSchema={dataSchema}
      validateOnBlur={false}
      validateOnChange={false}
      onSubmit={(values, formData) => {}}
    >
      {({
        values,
        errors,
        handleChange,
        handleSubmit,
        isSubmitting,
        resetForm,
      }) => (
        <div className=" h-full lg:h-auto flex w-full lg:w-[90%] 2xl:w-[60%] bg-white lg:rounded-[8px] p-4 sm:p-10 md:p-4 overflow-hidden ">
          <div className="hidden w-full md:block lg:w-[50%] bg-blue-500  lg:rounded-l-[8px] overflow-hidden">
            <Image
              src={loginIllusion}
              alt="login_image"
              className="h-full w-full object-cover"
            />
          </div>
          <div className=" w-full lg:w-[50%] flex items-center ">
            <div className="w-full m-5 lg:m-10 xl:m-20">
              <h1 className="font-[700] text-[30px] text-center text-blue-600">
                Login Account
              </h1>
              <p className="text-[#51516F] mt-12 ">User Name</p>
              <input
                id="username"
                type="text"
                placeholder="Enter User Name"
                name="username"
                className=" px-3 py-2 mt-2 font-[400] w-full placeholder:text-[#A9A9A9] text-[#A9A9A9] focus:text-[#151517]   border-[#CBCBCB] focus:border-[#151517] border-[1px] rounded-[6px] focus:ring-none focus:outline-none before:text-[#A9A9A9] after:text-[#151517]"
                value={values?.username}
                onChange={handleChange}
              />
              {errors.username && (
                <p className="text-red-700 text-[14px]">{errors.username}</p>
              )}
              <p className="text-[#51516F] mt-2">Password</p>
              <div className="relative w-full">
                <input
                  id="password"
                  type={showPassword ? "password" : "text"}
                  placeholder="Enter Password"
                  name="password"
                  className=" px-3 pr-10 py-2 mt-2 font-[400] w-full placeholder:text-[#A9A9A9] text-[#A9A9A9] focus:text-[#151517]   border-[#CBCBCB] focus:border-[#151517] border-[1px] rounded-[6px] focus:ring-none focus:outline-none before:text-[#A9A9A9] after:text-[#151517]"
                  value={values?.password}
                  onChange={handleChange}
                />
                <Image
                  className=" absolute w-6 h-6  right-3 top-[35%] cursor-pointer "
                  src={!showPassword ? eyeOpen : eyeClose}
                  alt="password_Icon"
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                />
              </div>

              {errors.password && (
                <p className="text-red-700 text-[14px]">{errors.password}</p>
              )}
              <p className="text-[#51516F] underline mt-2 cursor-pointer ">
                Forgot your password?
              </p>
              <button
                onClick={() => handleSubmit()}
                className="bg-blue-600 hover:bg-blue-500 w-full h-[44px] mt-12 rounded-lg text-[white]"
              >
                Sign In
              </button>
              <p className="text-[#51516F] text-[14.5px] mt-5 ">
                <span>By clicking sign in button you agree to our </span>
                <span className="underline cursor-pointer text-blue-600">
                  Terms of Service
                </span>{" "}
                and
                <span className="underline cursor-pointer text-blue-600">
                  {" "}
                  Privacy Notice
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
}
