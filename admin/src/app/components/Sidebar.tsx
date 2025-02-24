"use client";

import { useTheme } from "../../context/ThemeContext";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Sidebar() {
  const { theme, setTheme } = useTheme() as { theme: 'default' | 'blue' | 'green' | 'yellow', setTheme: (theme: 'default' | 'blue' | 'green' | 'yellow') => void };
  const pathname = usePathname();

  // Classes dinâmicas para os botões conforme o tema
  const buttonClasses = {
    default: "bg-black text-white hover:bg-gray-800",
    blue: "bg-blue-500 text-white hover:bg-blue-700",
    green: "bg-green-500 text-white hover:bg-green-700",
    yellow: "bg-yellow-400 text-black hover:bg-yellow-500",
  };

  if (pathname === "/auth/login") return null; // Se for a tela de login, não exibe o Sidebar

  return (
    <aside className="w-64 p-6 h-screen bg-white text-black border-r border-gray-300">
      <h2 className="text-2xl font-bold mb-4">Painel SaaS</h2>
      <nav>
        <ul>
          <li className="mb-3">
            <Link href="/clientes" className={`block p-3 rounded ${buttonClasses[theme]}`}>
              Clientes
            </Link>
          </li>
          <li className="mb-3">
            <Link href="/clientes-saas" className={`block p-3 rounded ${buttonClasses[theme]}`}>
              Clientes SaaS
            </Link>
          </li>
          <li>
            <Link href="/produtos" className={`block p-3 rounded ${buttonClasses[theme]}`}>
              Produtos
            </Link>
          </li>
        </ul>
      </nav>

      {/* Botão de Troca de Tema */}
      <div className="mt-6">
        <label className="block text-sm font-medium">Escolha um tema:</label>
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value as 'default' | 'blue' | 'green' | 'yellow')}
          className={`w-full mt-2 p-2 border rounded ${buttonClasses[theme]}`}
        >
          <option value="default">Padrão (Branco & Preto)</option>
          <option value="blue">Branco & Azul</option>
          <option value="green">Preto & Verde</option>
          <option value="yellow">Branco & Amarelo</option>
        </select>
      </div>
    </aside>
  );
}