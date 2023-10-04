"use client";

import { useContext, createContext, useState, useEffect } from "react";

import { useRouter } from "next/navigation";
import { useCookies } from "react-cookie";

const AuthContext = createContext({} as any);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [userId, setUserId] = useState();

  const router = useRouter();
  const [cookie] = useCookies();

  useEffect(() => {
    const token = document.cookie.split("; ");

    // if (!token) {
    //   router.push("/login");
    // }

    console.log("TOKEN COOKIE", token);
  }, [cookie, router]);

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  return useContext(AuthContext);
};

export { useAuth, AuthProvider };
