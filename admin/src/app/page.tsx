import Image from "next/image";
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/auth/login"); // Redireciona para a página de login
  return null;
}