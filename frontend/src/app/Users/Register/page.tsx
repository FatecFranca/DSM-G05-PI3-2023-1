"use client";

import Button from "@/components/Form/Button";
import Input from "@/components/Form/Input";
import React from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";

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
  const methods = useForm();
  const { handleSubmit, reset } = methods;

  const handleSignIn: SubmitHandler<UserProps> = async (data: UserProps) => {
    console.log("Data: ", data);
  };
  return (
    <div className="bg-blackMain h-auto m-24 rounded-lg py-6 px-12">
      <div>
        <h1 className="text-whiteMain text-xl uppercase">
          Cadastro de Usuário
        </h1>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(handleSignIn)}>
            <div className="flex flex-col">
              <div className="flex flex-row">
                <div className="w-full mr-6">
                  <Input
                    registerInput="nome"
                    title="Nome"
                    htmlFor="nome"
                    name="nome"
                    id="nome"
                    type="text"
                    customClassTitle="text-whiteMain"
                    customClassInput="bg-white text-whiteMain"
                  />
                </div>
                <div className="w-full">
                  <Input
                    registerInput="cpf"
                    title="CPF"
                    htmlFor="cpf"
                    name="cpf"
                    id="cpf"
                    type="text"
                    customClassTitle="text-whiteMain"
                    customClassInput="bg-white text-whiteMain"
                  />
                </div>
              </div>

              <div className="flex flex-row">
                <div className="w-full mr-6">
                  <Input
                    registerInput="email"
                    title="E-mail"
                    htmlFor="email"
                    name="email"
                    id="email"
                    type="email"
                    customClassTitle="text-whiteMain"
                    customClassInput="bg-white text-whiteMain"
                  />
                </div>
                <div className="w-full">
                  <Input
                    registerInput="telefone"
                    title="Telefone"
                    htmlFor="telefone"
                    name="telefone"
                    id="telefone"
                    type="text"
                    customClassTitle="text-whiteMain"
                    customClassInput="bg-white text-whiteMain"
                  />
                </div>
              </div>

              <div className="flex flex-row">
                <div className="w-full mr-6">
                  <Input
                    registerInput="senha"
                    title="Senha"
                    htmlFor="senha"
                    name="senha"
                    id="senha"
                    type="password"
                    customClassTitle="text-whiteMain"
                    customClassInput="bg-white text-whiteMain"
                  />
                </div>
                <div className="w-full">
                  <Input
                    registerInput="senha"
                    title="Confirmação de Senha"
                    htmlFor="senha"
                    name="senha"
                    id="senha"
                    type="password"
                    customClassTitle="text-whiteMain"
                    customClassInput="bg-white text-whiteMain"
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
                    customClassInput="bg-white text-whiteMain"
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
                    customClassInput="bg-white text-whiteMain"
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
                    customClassInput="bg-white text-whiteMain"
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
                    customClassInput="bg-white text-whiteMain"
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
                    customClassInput="bg-white text-whiteMain"
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
                    customClassInput="bg-white text-whiteMain"
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
