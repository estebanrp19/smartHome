"use client";
import { useState } from "react";
import { validateLogin } from "@/helpers/validation";
import Link from "next/link";
import { useRouter } from "next/navigation";

function LoginForm() {
  const router = useRouter();
  const [loginValues, setLoginValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({} as { [key: string]: string });
  const [message, setMessage] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setLoginValues({ ...loginValues, [name]: value });
    setErrors(validateLogin({ ...loginValues, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:3002/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginValues),
      });

      const data = await response.json();
      localStorage.setItem("token", data.token);
      setMessage("Inicio de sesión exitoso");
      router.push("/home")
    } catch (error) {
      setMessage("Error al iniciar sesión, intente nuevamente.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-sm space-y-10">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Iniciar Sesión</h1>
      </div>
      <div className="space-y-6">
        <div className="space-y-4">
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
        <div className="space-y-4">
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
        <input
          type="submit"
          value="Iniciar Sesión"
          disabled={Object.keys(errors).length > 0}
          className="w-full my-10 rounded-lg bg-[#588157] text-white p-3 hover:bg[#3A5A40] disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
        />
      </div>

      <div className="text-center">
        <p>
          ¿Aún no tienes una cuenta?{" "}
          <Link href="/register" className="text-blue-600">
            Registrate
          </Link>
        </p>
      </div>
      {message && (
        <div className="text-center mt-4">
          <span className="text-green-500">{message}</span>
        </div>
      )}
    </form>
  );
}

export default LoginForm;
