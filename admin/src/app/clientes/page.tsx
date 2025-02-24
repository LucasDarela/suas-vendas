"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useTheme } from "../../context/ThemeContext";

interface Cliente {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export default function ClientesPage() {
  const { theme } = useTheme() as { theme: 'default' | 'blue' | 'green' | 'yellow' };
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hydrated, setHydrated] = useState(false); // 🔥 Corrigindo Hydration Error

  useEffect(() => {
    setHydrated(true); // 🔥 Garante que só renderizamos o componente no cliente

    const token = Cookies.get("token");

    if (!token) {
      setError("Você precisa estar logado para acessar esta página.");
      setLoading(false);
      return;
    }

    fetch("http://localhost:3000/customers", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Erro ao buscar clientes");
        return res.json();
      })
      .then((data) => setClientes(data))
      .catch((err) => {
        setError("Erro ao carregar clientes. Verifique sua conexão.");
        console.error(err);
      })
      .finally(() => setLoading(false));
  }, []);

  if (!hydrated) return null; // 🔥 Evita erro de Hydration no Next.js

  // Definição de cores para cada tema
  const themeClasses = {
    default: "bg-white text-black",
    blue: "bg-blue-100 text-blue-900",
    green: "bg-green-100 text-green-900",
    yellow: "bg-yellow-100 text-yellow-900",
  };

  return (
    <div className={`min-h-screen p-6 ${themeClasses[theme]}`}>
      <h1 className="text-3xl font-bold mb-6">Clientes</h1>

      {loading ? (
        <p className="text-lg font-bold">Carregando...</p>
      ) : error ? (
        <p className="text-red-500 text-lg">{error}</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse rounded-lg overflow-hidden">
            <thead className="bg-gray-300 text-black">
              <tr>
                <th className="p-3 text-left">ID</th>
                <th className="p-3 text-left">Nome</th>
                <th className="p-3 text-left">E-mail</th>
                <th className="p-3 text-left">Telefone</th>
              </tr>
            </thead>
            <tbody>
              {clientes.map((cliente) => (
                <tr key={cliente.id} className="border-b border-gray-400 hover:bg-gray-200">
                  <td className="p-3">{cliente.id}</td>
                  <td className="p-3">{cliente.name}</td>
                  <td className="p-3">{cliente.email}</td>
                  <td className="p-3">{cliente.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}