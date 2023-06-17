import { Agenda } from "../models/Agenda";
import { api } from "./api";
import { AxiosResponse } from "axios";

const resourceURL: string = "/agenda";

export const useAgendaService = () => {
  const POST = async (agenda: Agenda): Promise<Agenda> => {
    const response: AxiosResponse<Agenda> = await api.post<Agenda>(
      resourceURL,
      agenda
    );
    return response.data;
  };

  const GETALL = async (): Promise<Agenda[]> => {
    const url: string = `${resourceURL}`;
    const response: AxiosResponse<Agenda[]> = await api.get(url);
    return response.data;
  };

  return {
    POST,
    GETALL,
  };
};
