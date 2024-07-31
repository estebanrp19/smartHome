"use client";
import React from "react";
import { useAuth } from "@/context/AuthContext";


function userDashboard() {
  const { user } = useAuth();

  if (!user) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="max-w-md mx-auto mb-10">
      <div className="grid gap-6">
        <div className="grid gap-2">
          <div className="text-2xl font-bold text-[#588157]">
            Perfil de Usuario
          </div>
          <div className="text-muted">Está Activo</div>
        </div>
      </div>
    </div>
  );
}

export default userDashboard;
