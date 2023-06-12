"use client";

import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { signInRequestCliente, signInRequestCorretor } from "../services/auth";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import SignIn from "../SignIn/page";

type ClienteProps = {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  senha: string;
};

type CorretorProps = {
  id: string;
  nome: string;
  cpf: string;
  telefone: string;
  email: string;
  senha: number;
};

type SignInData = {
  email: string;
  senha: string;
  cliente_radio: string;
  corretor_radio: string;
};

type AuthContextType = {
  isAuthenticated: boolean;
  cliente: ClienteProps;
  corretor: CorretorProps;
  signIn: (data: SignInData) => Promise<void>;
  signOut: () => Promise<void>;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: any) {
  const router = useRouter();
  const [cliente, setCliente] = useState<ClienteProps | any>(null);
  const [corretor, setCorretor] = useState<CorretorProps | any>(null);
  const isAuthenticated = !!cliente || !!corretor;

  let storage;

  if (typeof window !== "undefined") {
    storage = localStorage.getItem("@seemyplace");
  }

  useEffect(() => {
    const token = localStorage.getItem("@seemyplace");
    if (token) {
      api.defaults.headers["Authorization"] = `Bearer ${token}`;
      setCliente(JSON.parse(token).cliente);
      setCorretor(JSON.parse(token).corretor);
      return;
    }
  }, [storage]);

  async function signIn({
    email,
    senha,
    cliente_radio,
    corretor_radio,
  }: SignInData) {
    if (cliente_radio !== null) {
      await signInRequestCliente({
        email,
        senha,
      })
        .then((token) => {
          localStorage.setItem("@seemyplace", JSON.stringify(token));

          api.defaults.headers["Authorization"] = `Bearer ${token}`;

          setCliente(token.admin);
          router.push("/Home");
        })
        .catch((error) => {
          toast.error(error.response, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        });
    }

    if (corretor_radio !== null) {
      await signInRequestCorretor({
        email,
        senha,
      })
        .then((token) => {
          localStorage.setItem("@seemyplace", JSON.stringify(token));

          api.defaults.headers["Authorization"] = `Bearer ${token}`;

          setCorretor(token.corretor);
          router.push("/Home");
        })
        .catch((error) => {
          toast.error(error.response, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        });
    }
  }

  async function signOut() {
    localStorage.clear();
    setCliente(null);
    setCorretor(null);
    router.push("/");
  }

  return (
    <>
      <AuthContext.Provider
        value={{ cliente, corretor, isAuthenticated, signIn, signOut }}
      >
        {isAuthenticated ? (
          children
        ) : (
          <>
            <SignIn />
            <ToastContainer />
          </>
        )}
      </AuthContext.Provider>
    </>
  );
}
