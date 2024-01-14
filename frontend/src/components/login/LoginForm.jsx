"use client";

import { useState } from "react";
// Importar iconos de alguna librería como 'react-icons'
import { AiOutlineUser, AiOutlineLock } from "react-icons/ai";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = () => {
    setError(null);
    if (!username || !password) {
      setError("Por favor, complete todos los campos.");
      return;
    }

    // Simular inicio de sesión
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      // Aquí se puede agregar la lógica de autenticación real
      console.log("Usuario logueado:", username);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-8 text-center">SmartSell P O S</h2>
        {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
        <div className="mb-4 flex items-center border-b border-gray-300">
          <AiOutlineUser className="text-gray-400 mr-2" />
          <input
            className="appearance-none w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none"
            id="username"
            type="text"
            placeholder="Nombre de Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-6 flex items-center border-b border-gray-300">
          <AiOutlineLock className="text-gray-400 mr-2" />
          <input
            className="appearance-none w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none"
            id="password"
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between mb-6">
          <button
            className={`bg-black text-white py-2 px-4 rounded focus:outline-none ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            type="button"
            onClick={handleLogin}
            disabled={isLoading}
          >
            {isLoading ? "Cargando..." : "Iniciar sesión"}
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-black hover:text-gray-800"
            href="#"
          >
            ¿Olvidaste la contraseña?
          </a>
        </div>
        <div>
          <button
            className="bg-red-600 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="button"
          >
            Registrarse
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
