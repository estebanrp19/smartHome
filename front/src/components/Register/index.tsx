"use client";
import { useState } from "react";
import { validateRegister } from "@/helpers/validation";
import Link from "next/link";
import { useRouter } from "next/navigation";

function RegisterForm() {
  const router = useRouter();
  const [registerValues, setRegisterValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    phone: "",
    address: "",
  });

  const [errors, setErrors] = useState({} as { [key: string]: string });
  const [message, setMessage] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setRegisterValues({ ...registerValues, [name]: value });
    setErrors(validateRegister({ ...registerValues, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:3002/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registerValues),
      });
      const data = await response.json();
        router.push("/login")
    } catch (error) {
      setMessage("Error al registrar al usuario, por favor intente de nuevo.")
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-sm space-y-10">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Registrarse</h1>
      </div>
      <div className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="email" className="block">
            Correo electrónico
          </label>
          <input
            name="email"
            id="email"
            type="email"
            onChange={handleChange}
            placeholder="ejemplo@dominio.com"
            className="w-full appearance-none py-2 px-3 border border-gray-200 rounded-lg"
            required
          />
          {errors.email && (
            <span className="text-red-500 text-xs mt-1">{errors.email}</span>
          )}
        </div>
        <div className="space-y-2">
          <label htmlFor="password" className="block">
            Contraseña
          </label>
          <input
            name="password"
            id="password"
            type="password"
            onChange={handleChange}
            className="w-full appearance-none py-2 px-3 border border-gray-200 rounded-lg"
            required
          />
          {errors.password && (
            <span className="text-red-500 text-xs mt-1">{errors.password}</span>
          )}
        </div>
        <div className="space-y-2">
          <label htmlFor="confirmPassword" className="block">
            Confirmar Contraseña
          </label>
          <input
            name="confirmPassword"
            id="confirmPassword"
            type="password"
            onChange={handleChange}
            className="w-full appearance-none py-2 px-3 border border-gray-200 rounded-lg"
            required
          />
          {errors.confirmPassword && (
            <span className="text-red-500 text-xs mt-1">
              {errors.confirmPassword}
            </span>
          )}
        </div>
        <div className="space-y-2">
          <label htmlFor="name" className="block">
            Nombre
          </label>
          <input
            name="name"
            id="name"
            type="text"
            onChange={handleChange}
            className="w-full appearance-none py-2 px-3 border border-gray-200 rounded-lg"
            required
          />
          {errors.name && (
            <span className="text-red-500 text-xs mt-1">{errors.name}</span>
          )}
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="block">
            Número de teléfono
          </label>
          <input
            name="phone"
            id="phone"
            type="text"
            onChange={handleChange}
            className="w-full appearance-none py-2 px-3 border border-gray-200 rounded-lg"
            required
          />
          {errors.phone && (
            <span className="text-red-500 text-xs mt-1">{errors.phone}</span>
          )}
        </div>
        <div className="space-y-2">
          <label htmlFor="address" className="block">
            Dirección
          </label>
          <input
            name="address"
            id="address"
            type="text"
            onChange={handleChange}
            className="w-full appearance-none py-2 px-3 border border-gray-200 rounded-lg"
            required
          />
          {errors.address && (
            <span className="text-red-500 text-xs mt-1">{errors.address}</span>
          )}
        </div>
        <input
          type="submit"
          disabled={Object.keys(errors).length > 0}
          value="Registrarse"
          className="w-full my-10 rounded-lg bg-[#588157] text-white p-3 hover:bg-[#3A5A40] disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
        />
      </div>

      <div className="text-center">
        <p>
          ¿Ya tienes una cuenta?{" "}
          <Link href="/login" className="text-blue-600">
            Inicia Sesión
          </Link>
        </p>
      </div>
    </form>
  );
}

export default RegisterForm;
