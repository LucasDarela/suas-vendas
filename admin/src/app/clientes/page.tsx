'use client'

import { useEffect, useState } from "react";

const token = localStorage.getItem("token"); // Pegando o token salvo no login

fetch("http://localhost:3000/customers", {
  headers: {
    Authorization: `Bearer ${token}`,
  },
})
  .then((res) => res.json())
  .then((data) => setClientes(data));

interface Cliente {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export default function ClientesPage() {
  const [clientes, setClientes] = useState<Cliente[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/customers")
      .then((res) => res.json())
      .then((data) => setClientes(data));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold">Clientes</h1>
      <p>Gerencia seus clientes aqui</p>
      <table className="mt-4 border w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">ID</th>
            <th className="p-2 border">Nome</th>
            <th className="p-2 border">E-mail</th>
            <th className="p-2 border">Telefone</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente) => (
            <tr key={cliente.id} className="border">
              <td className="p-2 border">{cliente.id}</td>
              <td className="p-2 border">{cliente.name}</td>
              <td className="p-2 border">{cliente.email}</td>
              <td className="p-2 border">{cliente.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function setClientes(data: any): any {
    throw new Error("Function not implemented.");
}
