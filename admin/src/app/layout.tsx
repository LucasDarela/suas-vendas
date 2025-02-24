export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className="bg-gray-100 text-gray-900">
        <div className="flex">
          <aside className="w-64 bg-gray-800 text-white p-5 h-screen">
            <h2 className="text-xl font-bold">Painel Administrativo</h2>
            <nav className="mt-4">
              <ul>
                <li className="mb-2">
                  <a href="/clientes" className="block p-2 rounded hover:bg-gray-700">Clientes</a>
                </li>
                <li>
                  <a href="/produtos" className="block p-2 rounded hover:bg-gray-700">Produtos</a>
                </li>
              </ul>
            </nav>
          </aside>
          <main className="flex-1 p-5">{children}</main>
        </div>
      </body>
    </html>
  );
}