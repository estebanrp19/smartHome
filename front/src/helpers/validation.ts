import { error } from "console";

const regex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/

export const validateLogin = (loginValues : {
    email: string;
    password: string;
}) => {
    let errors = {};
    if (!loginValues.email) {
        errors = {...errors, email: "El correo electronico es obligatorio"}
    }
    if (!loginValues.password) {
      errors = { ...errors, password: "La contraseña es obligatoria" };
    }
    if (!regex.test(loginValues.email)) {
      errors = { ...errors, email: "El correo electronico es invalido" };
    }
    if (loginValues.password.length < 6) {
        errors = {...errors, password: "La contraseña debe tener al menos 6 caracteres"}
    }
    if (!/[A-Z]/.test(loginValues.password)) {
        errors = {...errors, password: "La contraseña debe tener al menos una mayuscula"}
    }
    if (!/[a-z]/.test(loginValues.password)) {
        errors = {...errors, password: "La contraseña debe tener al menos una minuscula"}
    }
    if (!/\d/.test(loginValues.password)) {
        errors = {...errors, password: "La contraseña debe tener al menos un numero"}
    }

    return errors;
}

export const validateRegister = (registerValues : {
    email: string;
    password: string;
    confirmPassword: string;
    name: string;
    phone: string;
    address: string;
}) => {
    let errors = {};
    if (!registerValues.email) {
        errors = {...errors, email: "El correo electronico es obligatorio"}
    }
    if (!registerValues.password) {
        errors = {...errors, password: "La contraseña es obligatoria"}
    }
    if (!registerValues.name) {
        errors = {...errors, name: "El nombre es obligatorio"}
    }
    if (!registerValues.phone) {
        errors = {...errors, phone: "El numero de telefono es obligatorio"}
    }
    if (!registerValues.address) {
        errors = {...errors, address: "La direccion es obligatoria"}
    }
    if (!regex.test(registerValues.email)) {
      errors = { ...errors, email: "El correo electronico es invalido" };
    }
    if (registerValues.password.length < 6) {
      errors = {...errors, password: "La contraseña debe tener al menos 6 caracteres",
      };
    }
    if (!/[A-Z]/.test(registerValues.password)) {
      errors = {...errors, password: "La contraseña debe tener al menos una mayuscula",
      };
    }
    if (!/[a-z]/.test(registerValues.password)) {
      errors = {...errors, password: "La contraseña debe tener al menos una minuscula",
      };
    }
    if (!/\d/.test(registerValues.password)) {
      errors = {...errors, password: "La contraseña debe tener al menos un numero",
      };
    }
    if (!/^\d+$/.test(registerValues.phone)) {
        errors = {...errors, phone: "El numero de telefono solo debe contener numeros"}
    }
    if (registerValues.phone.length < 8) {
        errors = {...errors, phone: "El numero de telefono no es valido"}
    }
    if (registerValues.password !== registerValues.confirmPassword) {
        errors = {...errors, confirmPassword: "Las contraseñas deben ser iguales"}
    }

    return errors;
}