import { Cliente } from "../models/Cliente";
import { api } from "./api";
import { AxiosResponse } from "axios";

const resourceURL: string = "/cliente";

export const useClienteService = () => {
  const POST = async (cliente: Cliente): Promise<Cliente> => {
    const response: AxiosResponse<Cliente> = await api.post<Cliente>(
      resourceURL,
      cliente
    );
    return response.data;
  };

  const GETALL = async (): Promise<Cliente[]> => {
    const url: string = `${resourceURL}`;
    const response: AxiosResponse<Cliente[]> = await api.get(url);
    return response.data;
  };

  return {
    POST,
    GETALL,
  };
};
