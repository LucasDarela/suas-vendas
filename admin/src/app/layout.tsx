"use client";

import "./globals.css";
import Sidebar from "../app/components/Sidebar";
import { ThemeProvider } from "../context/ThemeContext";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname(); // Obtém a URL atual
    const isLoginPage = pathname === "/auth/login"; // Verifica se está na tela de login
  
  
  return (
    <html lang="pt">
      <body>
        <ThemeProvider>
          <div className="flex">
            {/* O Sidebar só aparece se NÃO estiver na tela de login */}
            {!isLoginPage && <Sidebar />}

            <main className="flex-1 p-6">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}