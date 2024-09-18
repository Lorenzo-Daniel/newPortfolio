"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { handleChange, handleBlur, validateField } from "./functionForm";
import InputForm from "./InputForm";
// import { CiCircleCheck } from "react-icons/ci";
// import { CiCircleAlert } from "react-icons/ci";

//prettier-ignore
let inputArray = [
    { name: "name",     type: "text",   placeholder:  "Enter your name here",   error: false ,tagName:'input'},
    { name: "email",    type: "email",  placeholder:  "Enter your email here",  error: false ,tagName:'input'},
    { name: "phone",    type: "text",   placeholder:  "Enter your phone here",  error: false ,tagName:'input'},
    { name: "message",  type: "text",   placeholder:  "Enter your phone here",  error: false ,tagName:'textarea'},
];

export const Contact = () => {
  const form = useRef();
  const [buttonState, setButtonState] = useState("SEND");
  const [inputs, setInputs] = useState(inputArray);
  const [success, setSuccess] = useState({
    message: "",
    color: "",
    bg: "",
  });
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const checkFormValidity = () => {
    let isFormValid = true;
    let updatedErrors = {};

    // Validar todos los campos
    Object.keys(formValues).forEach((key) => {
      const errorMessage = validateField(key, formValues[key]);
      if (errorMessage) {
        isFormValid = false;
        updatedErrors[key] = errorMessage;
      }
    });

    setErrors(updatedErrors);
    return isFormValid;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!checkFormValidity(formValues)) return;
    console.log(formValues);
    setButtonState("SENDING...");
    console.log("enviado my friend");
    const serviceID = "default_service";
    const templateID = "template_0ra71df";
    const publicKey = "32WkBY9c16zRle6EC";
    emailjs
      .sendForm(serviceID, templateID, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          setFormValues({ name: "", email: "", phone: "", message: "" });
          setSuccess({
            message: "El mesnaje fue enviado correctamente!",
            color: "text-green-500",
            bg: "bg-green-100",
          });
          setTimeout(() => {
            setSuccess({
              message: "",
              color: "",
              bg: "",
            });
          }, 3000);
          setButtonState("SEND");
        },
        (error) => {
          console.error("fallo Api emailJS", error.text);
          setSuccess({
            message: "Upss! Algo salio mal",
            color: "text-red-500",
            bg: "bg-red-100",
          });

          setButtonState("SEND");
          setTimeout(() => {
            setSuccess({
              message: "",
              color: "",
              bg: "",
            });
          }, 3000);
        }
      );
  };

  return (
    <div className="w-dvw flex flex-col items-center p-3 gap-5">
      <div>
        <div className=" text-xl md:text-3xl mt-10 mb-5">
          <h1 className="">I&apos;m here to help!</h1>
        </div>
        <div className="text-start min-w-80 max-w-lg">
          <p>
            If you have any questions about my projects, want to discuss a
            collaboration opportunity, or simply want to get in touch, feel free
            to reach out. I&apos;m always open to new connections and opportunities.
            I look forward to hearing from you soon!
          </p>
        </div>
      </div>
      <div className="flex w-dvw justify-center h-full items-center">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="container max-w-lg flex flex-col gap-4 border border-slate-200 border-2 rounded px-5 py-12 shadow mx-10 "
        >
          {inputs.map((input, i) => {
            return (
              <InputForm
                key={i}
                handleChange={handleChange}
                handleBlur={handleBlur}
                input={input}
                errors={errors}
                setErrors={setErrors}
                formValues={formValues}
                setFormValues={setFormValues}
                tagName={input.tagName}
              />
            );
          })}
          <input
            type="submit"
            value={buttonState}
            className="border p-2 cursor-pointer rounded bg-[#b7cce3] hover:border-[#8eb2d8] active:border-[#80afe1] text-slate-700 focus:outline-none "
          />
          <div
            className={`flex justify-center items-center gap-1  w-80 m-auto p-2 ${success.bg}`}
          >
            <div className="text-center text-sm">
              <p className={success.color}>{success.message} </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
