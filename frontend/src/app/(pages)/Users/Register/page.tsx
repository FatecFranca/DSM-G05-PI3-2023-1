"use client";

import Button from "@/components/Form/Button";
import Input from "@/components/Form/Input";
import React, { useState } from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useClienteService } from "@/app/services/cliente.service";
import { useCorretorService } from "@/app/services/corretor.service";

interface Address {
  cep?: string;
  rua?: string;
  numero?: string;
  bairro?: string;
  cidade?: string;
  estado?: string;
}

interface UserProps {
  nome?: string;
  cpf?: string;
  email?: string;
  telefone?: string;
  senha?: string;
  endereco?: Address;
}

const RegisterUsers = () => {
  const serviceCliente = useClienteService();
  const serviceCorretor = useCorretorService();
  const [selectedUser, setSelectedUser] = useState("cliente");
  const methods = useForm();
  const { handleSubmit, reset } = methods;

  const handleUserChange = (event: any) => {
    setSelectedUser(event.target.value);
  };

  const handleRegister: SubmitHandler<UserProps> = async (data: UserProps) => {
    if (selectedUser == "cliente") {
      serviceCliente
        .POST(data)
        .then(() => {
          toast.success("Cliente salvo com sucesso!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          reset();
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (selectedUser == "corretor") {
      serviceCorretor
        .POST(data)
        .then(() => {
          toast.success("Corretor salvo com sucesso!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          reset();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div className="bg-blackMain h-auto m-24 rounded-lg py-6 px-12">
      <div>
        <h1 className="text-whiteMain text-xl uppercase">
          Cadastro de Usuário
        </h1>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(handleRegister)}>
            <div className="flex flex-col">
              <h1 className="text-yellow my-5 font-bold text-lg ">
                Escolha que tipo de usuário deseja cadastrar
              </h1>
              <div className="flex flex-row">
                <div className="mr-6">
                  <input
                    {...methods.register("cliente_radio")}
                    id="cliente_radio"
                    name="inputRadio"
                    type="radio"
                    className="w-4 bg-yellow"
                    value="cliente"
                    defaultChecked
                    onChange={handleUserChange}
                  />
                  <label
                    htmlFor="cliente_radio"
                    className="ml-2 text-lg font-medium text-whiteMain"
                  >
                    Cliente
                  </label>
                </div>

                <div className="mr-6">
                  <input
                    {...methods.register("corretor_radio")}
                    id="corretor_radio"
                    name="inputRadio"
                    type="radio"
                    className="w-4 bg-yellow border border-solid"
                    value="corretor"
                    onChange={handleUserChange}
                  />
                  <label
                    htmlFor="corretor_radio"
                    className="ml-2 text-lg font-medium text-whiteMain"
                  >
                    Corretor
                  </label>
                </div>
              </div>
              <div className="flex flex-row">
                <div className="w-full mr-6">
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
                <div className="w-full">
                  <Input
                    registerInput="cpf"
                    validation={{ required: "Campo obrigatório" }}
                    title="CPF"
                    htmlFor="cpf"
                    name="cpf"
                    id="cpf"
                    type="text"
                    customClassTitle="text-whiteMain"
                    customClassInput="text-whiteMain"
                  />
                </div>
              </div>

              <div className="flex flex-row">
                <div className="w-full mr-6">
                  <Input
                    registerInput="email"
                    validation={{
                      required: "Campo obrigatório",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "E-mail inválido",
                      },
                    }}
                    title="E-mail"
                    htmlFor="email"
                    name="email"
                    id="email"
                    type="email"
                    customClassTitle="text-whiteMain"
                    customClassInput="text-whiteMain"
                  />
                </div>
                <div className="w-full">
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
              </div>

              <div className="flex flex-row">
                <div className="w-full mr-6">
                  <Input
                    registerInput="senha"
                    validation={{ required: "Campo obrigatório" }}
                    title="Senha"
                    htmlFor="senha"
                    name="senha"
                    id="senha"
                    type="password"
                    customClassTitle="text-whiteMain"
                    customClassInput="text-whiteMain"
                  />
                </div>
                <div className="w-full">
                  <Input
                    registerInput="repetirSenha"
                    validation={{ required: "Campo obrigatório" }}
                    title="Confirmação de Senha"
                    htmlFor="repetirSenha"
                    name="repetirSenha"
                    id="repetirSenha"
                    type="password"
                    customClassTitle="text-whiteMain"
                    customClassInput="text-whiteMain"
                  />
                </div>
              </div>
              <hr className="mt-12" />

              <div className="flex flex-row">
                <div className="w-1/3 mr-6">
                  <Input
                    registerInput="endereco.cep"
                    title="CEP"
                    htmlFor="cep"
                    name="endereco.cep"
                    id="cep"
                    type="text"
                    customClassTitle="text-whiteMain"
                    customClassInput="text-whiteMain"
                  />
                </div>
                <div className="w-1/3 mr-6">
                  <Input
                    registerInput="endereco.numero"
                    title="Número"
                    htmlFor="numero"
                    name="endereco.numero"
                    id="numero"
                    type="text"
                    customClassTitle="text-whiteMain"
                    customClassInput="text-whiteMain"
                  />
                </div>
                <div className="w-full">
                  <Input
                    registerInput="endereco.rua"
                    title="Rua"
                    htmlFor="rua"
                    name="endereco.rua"
                    id="rua"
                    type="text"
                    customClassTitle="text-whiteMain"
                    customClassInput="text-whiteMain"
                  />
                </div>
              </div>

              <div className="flex flex-row">
                <div className="w-full mr-6">
                  <Input
                    registerInput="endereco.bairro"
                    title="Bairro"
                    htmlFor="bairro"
                    name="endereco.bairro"
                    id="bairro"
                    type="text"
                    customClassTitle="text-whiteMain"
                    customClassInput="text-whiteMain"
                  />
                </div>
                <div className="w-1/3 mr-6">
                  <Input
                    registerInput="endereco.cidade"
                    title="Cidade"
                    htmlFor="cidade"
                    name="endereco.cidade"
                    id="cidade"
                    type="text"
                    customClassTitle="text-whiteMain"
                    customClassInput="text-whiteMain"
                  />
                </div>
                <div className="w-1/3">
                  <Input
                    registerInput="endereco.estado"
                    title="Estado"
                    htmlFor="estado"
                    name="endereco.estado"
                    id="estado"
                    type="text"
                    customClassTitle="text-whiteMain"
                    customClassInput="text-whiteMain"
                  />
                </div>
              </div>
              <div className="mt-12">
                <Button
                  customClassButton="bg-yellow"
                  customClassTitle="text-blackMain"
                  title="Cadastrar"
                />
              </div>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default RegisterUsers;
