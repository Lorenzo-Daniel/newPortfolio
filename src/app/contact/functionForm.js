// Valida cada campo y devuelve un mensaje de error si no es válido
import emailjs from "@emailjs/browser";



export const validateField = (name, value) => {
  let errorMessage = "";
  if (name !== "phone" && value.length < 3) {
    errorMessage = `${name} must be at least 3 characters`;
  }
  if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    errorMessage = "Invalid email format";
  }
  return errorMessage;
};

export const handleChange = (e, name, setFormValues, setErrors) => {
  const { value } = e.target;
  setFormValues((prevValues) => ({
    ...prevValues,
    [name]: value,
  }));

  // Limpiar el error si empieza a cumplir las condiciones
  const errorMessage = validateField(name, value);

  if (!errorMessage) {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  }
};

export const handleBlur = (e, name, setErrors) => {
  const { value } = e.target;
  // Validar el campo al perder el foco y marcar el error si lo hay
  const errorMessage = validateField(name, value);
  setErrors((prevErrors) => ({
    ...prevErrors,
    [name]: errorMessage,
  }));
};

