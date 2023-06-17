"use client";

import React, { useContext, useEffect, useState } from "react";
import { Imovel } from "@/app/models/Imovel";
import { useImovelService } from "@/app/services/imovel.service";
import Image from "next/image";
import Input from "@/components/Form/Input";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "@/components/Form/Button";
import { Agenda } from "@/app/models/Agenda";
import { useAgendaService } from "@/app/services/agenda.service";
import Textarea from "@/components/Form/Textarea";
import { AuthContext } from "@/contexts/ContextAuth";
import { useCorretorService } from "@/app/services/corretor.service";
import { Corretor } from "@/app/models/Corretor";

const View = ({ searchParams }: any) => {
  const { id } = searchParams;
  const [imovel, setImovel] = useState<Imovel>();
  const [corretor, setCorretor] = useState<Corretor[]>();
  const [selectedCorretor, setSelectedCorretor] = useState("");
  const { cliente } = useContext(AuthContext);
  const imovelService = useImovelService();
  const agendaService = useAgendaService();
  const corretorService = useCorretorService();
  const methods = useForm();
  const { handleSubmit, reset } = methods;
  useEffect(() => {
    if (id) {
      imovelService.GET(id).then((res: any) => {
        setImovel(res);
      });
    }
  }, [id]);

  useEffect(() => {
    corretorService.GETALL().then((res: any) => {
      setCorretor(res);
    });
  }, []);

  const handleCorretorChange = (event: any) => {
    setSelectedCorretor(event.target.value);
  };

  const handleRegister: SubmitHandler<Agenda> = async (data: Agenda) => {
    data.cliente = cliente._id;
    data.corretor = selectedCorretor;
    data.imovel = id;
    agendaService
      .POST(data)
      .then(() => {
        toast.success("Agenda criada com sucesso!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setSelectedCorretor("");
        reset();
      })
      .catch((err) => {
        console.log(err);
      });
    console.log("Data: ", data);
  };

  return (
    <div className="flex flex-col justify-center items-center mt-24 pb-24">
      <div className="bg-blackMain p-8 rounded-xl flex  items-center w-10/12 h-auto">
        <div className="min-w-[400px] max-w-[900px] min-h-[400px] max-h-[800px] relative">
          <Image
            className="rounded-lg"
            src="/img/imovel_1.svg"
            alt="logo"
            fill
            style={{
              objectFit: "cover",
            }}
          />
        </div>
        <div className="mx-24 flex flex-col items-center justify-center">
          <div>
            <h1 className="text-yellow text-2xl font-bold">{imovel?.titulo}</h1>
            <div className="mt-4">
              <p className="text-whiteMain text-lg">{imovel?.descricao}</p>
            </div>
            <div className="mt-10 flex">
              <h1 className="text-whiteMain text-2xl">
                <span className="font-bold">$</span> {imovel?.valor}{" "}
              </h1>
              <h1 className="text-whiteMain text-2xl ml-4">
                Integer a lorem massa. Vivamus .
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blackMain p-8 rounded-xl flex items-center w-10/12 h-auto mt-12">
        <div>
          <iframe
            className="min-w-[400px] max-w-[900px] min-h-[500px] max-h-[800px] rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.8040847621614!2d-47.403395123929876!3d-20.514256056769447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b0a650b10ff691%3A0x8679dd6927e549b3!2sR.%20Ir%C3%AAnio%20Greco%2C%204607%20-%20Parque%20Sao%20Jorge%2C%20Franca%20-%20SP%2C%2014405-191!5e0!3m2!1spt-BR!2sbr!4v1686948017954!5m2!1spt-BR!2sbr"
            loading="lazy"
          ></iframe>
        </div>
        <div className="w-full">
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(handleRegister)}>
              <div className="flex flex-col mx-24">
                <div className="flex flex-row ">
                  <div className="w-1/2 mr-12">
                    <Input
                      registerInput="nome"
                      validation={{ required: "Campo obrigatório" }}
                      title="Nome"
                      htmlFor="nome"
                      name="nome"
                      id="nome"
                      type="text"
                      customClassTitle="text-whiteMain"
                      customClassInput="text-whiteMain"
                    />
                  </div>
                  <div className="flex flex-row">
                    <div className="w-full mr-6">
                      <Input
                        registerInput="data"
                        validation={{ required: "Campo obrigatório" }}
                        title="Data"
                        htmlFor="data"
                        name="data"
                        id="data"
                        type="date"
                        customClassTitle="text-whiteMain"
                        customClassInput="text-whiteMain"
                      />
                    </div>
                    <div className="w-full">
                      <Input
                        registerInput="horario"
                        validation={{ required: "Campo obrigatório" }}
                        title="Horário"
                        htmlFor="horario"
                        name="horario"
                        id="horario"
                        type="time"
                        customClassTitle="text-whiteMain"
                        customClassInput="text-whiteMain"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-row ">
                  <div className="w-1/2 mr-12">
                    <Input
                      registerInput="telefone"
                      validation={{ required: "Campo obrigatório" }}
                      title="Telefone"
                      htmlFor="telefone"
                      name="telefone"
                      id="telefone"
                      type="text"
                      customClassTitle="text-whiteMain"
                      customClassInput="text-whiteMain"
                    />
                  </div>
                  <div>
                    <div className="">
                      <Textarea
                        title="Observação"
                        htmlFor="observacao"
                        registerInput="observacao"
                        name="observacao"
                        id="observacao"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-row mt-12">
                  <div className="w-full flex flex-col mr-12">
                    <label className="text-xl text-whiteMain" htmlFor="">
                      Selecione um corretor
                    </label>
                    <select
                      className="mt-2 p-5 rounded-2xl bg-blackLight text-whiteMain"
                      name=""
                      id=""
                      value={selectedCorretor}
                      onChange={handleCorretorChange}
                    >
                      <option value="">Selecione um corretor</option>
                      {corretor?.map((corretor: Corretor) => (
                        <option key={corretor.id} value={corretor.id}>
                          {corretor.nome}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="mt-auto w-full">
                    <Button
                      customClassButton="bg-yellow"
                      customClassTitle="text-blackMain"
                      title="Agendar"
                    />
                  </div>
                </div>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
};

export default View;
