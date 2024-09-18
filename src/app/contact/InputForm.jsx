import React from "react";

function InputForm({
  handleChange,
  handleBlur,
  input,
  errors,
  setErrors,
  formValues,
  setFormValues,
  tagName,
}) {
  //-------------------------
  const labelClass = `absolute left-2 top-1 text-gray-500 transition-all duration-200 
  peer-placeholder-shown:top-5 peer-placeholder-shown:left-5 peer-focus:text-[#34577b] peer-placeholder-shown:text-[#34577b]
  peer-focus:top-1 peer-focus:left-1 peer-focus:text-xs 
  ${formValues[input.name] ? "top-1 left-1 text-xs" : ""}`;

  const tagCLass = ` border  rounded p-5 peer placeholder-transparent resize-none ${
    errors[input.name]
      ? "border border-red-500 focus:outline-none"
      : "focus:outline focus:outline-1 focus:outline-slate-400 border-[#b7cce3]"
  }`;
  //-------------------------------------
  return (
    <>
      {tagName === "input" && (
        <div className="flex flex-col max-w-md relative">
          <input
            type={input.type}
            name={input.name}
            className={tagCLass} // placeholder-transparent es clave
            onChange={(e) =>
              handleChange(e, input.name, setFormValues, setErrors)
            }
            onBlur={(e) => handleBlur(e, input.name, setErrors)}
            placeholder=" "
            value={formValues[input.name]}
          />
          {errors[input.name] && (
            <span className="text-xs text-red-500">{errors[input.name]}</span>
          )}
          <label className={labelClass}>{input.name}</label>
        </div>
      )}
      {tagName === "textarea" && (
        <div className="flex flex-col max-w-md relative">
          <textarea
            name={input.name}
            className={tagCLass}
            onChange={(e) =>
              handleChange(e, input.name, setFormValues, setErrors)
            }
            onBlur={(e) => handleBlur(e, input.name, setErrors)}
            placeholder=" "
            value={formValues[input.name]}
          />
          {errors[input.name] && (
            <span className="text-xs text-red-500">{errors[input.name]}</span>
          )}
          <label className={labelClass}>{input.name}</label>
        </div>
      )}
    </>
  );
}

export default InputForm;
