"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/images/LogoX.png";

function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
      <Link href="/" className="mr-6 hidden lg:flex" prefetch={false}>
        <Image src={logo} alt="Logo SmartHome" className="w-[60px]" />
      </Link>
      <nav className="flex-1 hidden md:flex">
        <ul className="flex items-center gap-6 text-sm font-medium">
          <li>
            <Link
              href="/"
              className="group relative inline-flex items-center gap-2 py-2 transition-colors hover:text-[#588157]"
              prefetch={false}
            >
              Inicio
              <span className="absolute bottom-0 left-0 h-[2px] w-full scale-x-0 bg-[#588157] transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          </li>
          <li>
            <Link
              href="/home"
              className="group relative inline-flex items-center gap-2 py-2 transition-colors hover:text-[#588157]"
              prefetch={false}
            >
              Ver Tienda
              <span className="absolute bottom-0 left-0 h-[2px] w-full scale-x-0 bg-[#588157] transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          </li>
          <li>
            <Link
              href="/checkout"
              className="group relative inline-flex items-center gap-2 py-2 transition-colors hover:text-[#588157]"
              prefetch={false}
            >
              Mi Carrito
              <span className="absolute bottom-0 left-0 h-[2px] w-full scale-x-0 bg-[#588157] transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          </li>
        </ul>
      </nav>

      <div className="ml-auto hidden md:flex items-center gap-2">
        {isAuthenticated ? (
          <>
            <Link href="/user-dashboard">
              <button className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-[#588157] hover:text-white">
                Mi Cuenta
              </button>
            </Link>
            <button
              onClick={handleLogout}
              className="inline-flex h-9 items-center justify-center rounded-md border border-transparent bg-transparent px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-muted focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            >
              Cerrar sesión
            </button>
          </>
        ) : (
          <>
            <Link href="/login">
              <button className="inline-flex h-9 items-center justify-center rounded-md border border-transparent bg-transparent px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-muted focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                Iniciar sesión
              </button>
            </Link>
            <Link href="/register">
              <button className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-[#588157] hover:text-white">
                Registrarse
              </button>
            </Link>
          </>
        )}
      </div>
    </header>
  );
}

export default Navbar;
