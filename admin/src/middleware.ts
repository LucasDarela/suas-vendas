import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value; // Pega o token dos cookies

  // Se o usuário não estiver autenticado e tentar acessar páginas do painel, redireciona para login
  if (!token && !req.nextUrl.pathname.startsWith("/auth/login")) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  return NextResponse.next();
}

// Configura quais rotas o middleware deve ser aplicado
export const config = {
  matcher: ["/clientes/:path*", "/produtos/:path*", "/clientes-saas/:path*"],
};