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

interface RealtyProps {
  valor?: string;
  finalidade?: string;
  qtde_quartos?: number;
  qtde_banheiros?: number;
  area?: string;
  nome?: string;
  email?: string;
  telefone?: string;
  endereco?: Address;
}

const RegisterRealty = () => {
  const methods = useForm();
  const { handleSubmit, reset } = methods;

  const handleSignIn: SubmitHandler<RealtyProps> = async (
    data: RealtyProps
  ) => {
    console.log("Data: ", data);
  };
  return (
    <div className="bg-blackMain h-auto m-24 rounded-lg py-6 px-12">
      <div>
        <h1 className="text-whiteMain text-xl uppercase">Cadastro de Imóvel</h1>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(handleSignIn)}>
            <div className="flex flex-col">
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

              <div className="flex flex-row">
                <div className="w-1/3 mr-6">
                  <Input
                    registerInput="valor"
                    title="Preço"
                    htmlFor="valor"
                    name="valor"
                    id="valor"
                    type="text"
                    customClassTitle="text-whiteMain"
                    customClassInput="bg-white text-whiteMain"
                  />
                </div>
                <div className="w-1/3 mr-6">
                  <Input
                    registerInput="finalidade"
                    title="Tipo de Imóvel"
                    htmlFor="finalidade"
                    name="finalidade"
                    id="finalidade"
                    type="text"
                    customClassTitle="text-whiteMain"
                    customClassInput="bg-white text-whiteMain"
                  />
                </div>
                <div className="w-1/3 mr-6">
                  <Input
                    registerInput="qtde_quartos"
                    title="Quartos"
                    htmlFor="qtde_quartos"
                    name="qtde_quartos"
                    id="qtde_quartos"
                    type="number"
                    customClassTitle="text-whiteMain"
                    customClassInput="bg-white text-whiteMain"
                  />
                </div>
                <div className="w-1/3">
                  <Input
                    registerInput="qtde_banheiros"
                    title="Banheiros"
                    htmlFor="qtde_banheiros"
                    name="qtde_banheiros"
                    id="qtde_banheiros"
                    type="number"
                    customClassTitle="text-whiteMain"
                    customClassInput="bg-white text-whiteMain"
                  />
                </div>
              </div>
              <div className="flex flex-row">
                <div className="w-1/3">
                  <Input
                    registerInput="area"
                    title="Area Total"
                    htmlFor="area"
                    name="area"
                    id="area"
                    type="text"
                    customClassTitle="text-whiteMain"
                    customClassInput="bg-white text-whiteMain"
                  />
                </div>
              </div>
              <hr className="mt-12" />

              <h1 className="mt-6 text-whiteMain text-xl">
                Responsável/Proprietário
              </h1>

              <div className="flex flex-row">
                <div className="w-full">
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

export default RegisterRealty;
