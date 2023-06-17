import { Corretor } from "../models/Corretor";
import { api } from "./api";
import { AxiosResponse } from "axios";

const resourceURL: string = "/corretor";

export const useCorretorService = () => {
  const POST = async (corretor: Corretor): Promise<Corretor> => {
    const response: AxiosResponse<Corretor> = await api.post<Corretor>(
      resourceURL,
      corretor
    );
    return response.data;
  };

  const GETALL = async (): Promise<Corretor> => {
    const url: string = `${resourceURL}`;
    const response: AxiosResponse<Corretor> = await api.get(url);
    return response.data;
  };

  return {
    POST,
    GETALL,
  };
};
