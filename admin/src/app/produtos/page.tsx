"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";

interface Produto {
  id: number;
  name: string;
  price: number;
  stock: number;
}

export default function ProdutosPage() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);

    const token = Cookies.get("token");

    if (!token) {
      setError("Você precisa estar logado para acessar esta página.");
      setLoading(false);
      return;
    }

    fetch("http://localhost:3000/products", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Erro ao buscar produtos");
        return res.json();
      })
      .then((data) => setProdutos(data))
      .catch((err) => {
        setError("Erro ao carregar produtos. Verifique sua conexão.");
        console.error(err);
      })
      .finally(() => setLoading(false));
  }, []);

  if (!hydrated) return null;

  return (
    <div className="min-h-screen p-6 bg-white text-black">
      <h1 className="text-3xl font-bold mb-6 text-black">Produtos</h1>

      {loading ? (
        <p className="text-lg font-bold text-black">Carregando...</p>
      ) : error ? (
        <p className="text-lg text-red-500">{error}</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse rounded-lg overflow-hidden bg-white text-black">
            <thead className="bg-black text-white">
              <tr>
                <th className="p-3 text-left">ID</th>
                <th className="p-3 text-left">Nome</th>
                <th className="p-3 text-left">Preço</th>
                <th className="p-3 text-left">Estoque</th>
              </tr>
            </thead>
            <tbody>
              {produtos.map((produto) => (
                <tr key={produto.id} className="border-b border-gray-300 hover:bg-gray-100">
                  <td className="p-3">{produto.id}</td>
                  <td className="p-3">{produto.name}</td>
                  <td className="p-3">R$ {produto.price.toFixed(2)}</td>
                  <td className="p-3">{produto.stock}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}