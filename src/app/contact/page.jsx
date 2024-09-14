"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { handleChange, handleBlur, validateField } from "./functionForm";
import InputForm from "./InputForm";
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
          alert(`SUCCESS! ${formValues.name}`);
          setFormValues({ name: "", email: "", phone: "", message: "" });
          setButtonState("SEND...");
        },
        (error) => {
          alert("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="w-dvw flex flex-col items-center p-3  gap-5">

    <div className=" text-xl md:text-3xl mt-10">
      <h1>Pongamonos en contacto!</h1>
    </div>
    <div className="text-center w-96">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati vitae, possimus, laborum id impedit quia quos, veniam quasi ipsam doloribus omnis. Expedita explicabo culpa libero modi sint dicta dolor doloremque.</p>
    </div>
    <div className="flex w-dvw justify-center h-full items-center">

      <form
        ref={form}
        onSubmit={sendEmail}
        className="container max-w-lg flex flex-col gap-4 border border-slate-200 border-2 rounded px-5 py-12 shadow mx-10"
      >
        {inputs.map((input, i) => {
          return (
            <InputForm
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
      </form>
    </div>
    </div>
  );
};

export default Contact;
