import { Imovel } from "../models/Imovel";
import { api } from "./api";
import { AxiosResponse } from "axios";

const resourceURL: string = "/imovel";

export const useImovelService = () => {
  const POST = async (imovel: Imovel): Promise<Imovel> => {
    const response: AxiosResponse<Imovel> = await api.post<Imovel>(
      resourceURL,
      imovel
    );
    return response.data;
  };

  const GETALL = async (): Promise<Imovel[]> => {
    const url: string = `${resourceURL}`;
    const response: AxiosResponse<Imovel[]> = await api.get(url);
    return response.data;
  };

  return {
    POST,
    GETALL,
  };
};
