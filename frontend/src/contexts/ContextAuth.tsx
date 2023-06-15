import { createContext, useEffect, useState } from "react";
import { api } from "../app/services/api";
import {
  signInRequestCliente,
  signInRequestCorretor,
} from "../app/services/auth";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";

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
  const pathname = usePathname();
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
      if (isAuthenticated) {
        router.push("/Home");
      }
      if (!isAuthenticated) {
        router.push("/SignIn");
      }
    } else {
      if (!isAuthenticated && pathname !== "/SignIn") {
        router.push("/SignIn");
      }
    }
  }, [storage, isAuthenticated]);

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

          setCliente(token.cliente);
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
  }

  return (
    <>
      <AuthContext.Provider
        value={{ cliente, corretor, isAuthenticated, signIn, signOut }}
      >
        {children}
      </AuthContext.Provider>
      {isAuthenticated && <ToastContainer />}
    </>
  );
}
