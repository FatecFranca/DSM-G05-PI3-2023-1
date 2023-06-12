import { api } from "./api";

type SignInRequestClienteData = {
  email: string;
  senha: string;
};

type SignInRequestCorretorData = {
  email: string;
  senha: string;
};

export async function signInRequestCliente({
  email,
  senha,
}: SignInRequestClienteData) {
  const response = await api.post(`/auth/login/cliente`, {
    email,
    senha,
  });

  return response.data;
}

export async function signInRequestCorretor({
  email,
  senha,
}: SignInRequestCorretorData) {
  const response = await api.post(`/auth/login/corretor`, {
    email,
    senha,
  });

  return response.data;
}
