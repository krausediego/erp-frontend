// "use client";
import { cookies } from "next/headers";
import { AuthProvider } from "@/contexts/auth";

async function cookie() {
  const la = cookies();

  console.log("LALA", la);
}

// eslint-disable-next-line @next/next/no-async-client-component
export default async function Dashboard() {
  await cookie();

  return (
    // <AuthProvider>
    <div>Diego!!!!</div>
    // </AuthProvider>
  );
}
