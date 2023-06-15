"use client";

import React, { useContext, useState } from "react";
import Image from "next/image";
import Input from "@/components/Form/Input";
import Button from "@/components/Form/Button";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { AuthContext } from "@/contexts/ContextAuth";

type SignInProps = {
  email: string;
  senha: string;
  cliente_radio: string;
  corretor_radio: string;
};

const SignIn = () => {
  const methods = useForm<SignInProps>();
  const { handleSubmit } = methods;
  const { signIn } = useContext(AuthContext);
  const [selectedOption, setSelectedOption] = useState("cliente");

  const handleOptionChange = (event: any) => {
    setSelectedOption(event.target.value);
  };

  const handleSignIn: SubmitHandler<SignInProps> = async (
    data: SignInProps
  ) => {
    if (selectedOption == "cliente") {
      data.cliente_radio = "cliente";
    } else if (selectedOption == "corretor") {
      data.corretor_radio = "corretor";
    }
    await signIn(data);
    console.log("Data: ", data);
  };
  return (
    <main className="h-screen w-full">
      <div className="flex flex-row relative">
        <section className="bg-blackMain w-7/12 h-screen z-0">
          <div className="flex flex-col justify-center -ml-36 items-center h-full">
            <div>
              <Image
                src="img/Logo_SignIn.svg"
                width={350}
                height={350}
                alt={""}
              />
            </div>
            <div>
              <h1 className="text-3xl mt-5">
                <span className="text-yellow">S</span>
                <span className="text-whiteMain">ee</span>
                <span className="text-yellow">M</span>
                <span className="text-whiteMain">y</span>
                <span className="text-yellow">P</span>
                <span className="text-whiteMain">lace</span>
              </h1>
            </div>
          </div>
        </section>

        <section className="flex justify-center   items-center bg-yellow rounded rounded-l-signIn w-6/12 absolute right-0 h-screen shadow-lg">
          <div className="flex flex-col  w-1/2">
            <h1 className="text-3xl font-bold">Acessar</h1>
            <FormProvider {...methods}>
              <form onSubmit={handleSubmit(handleSignIn)}>
                <div className="flex flex-row mt-12">
                  <div className="mr-6">
                    <input
                      {...methods.register("cliente_radio")}
                      id="cliente_radio"
                      name="inputRadio"
                      type="radio"
                      className="w-4 bg-yellow"
                      value="cliente"
                      onChange={handleOptionChange}
                    />
                    <label
                      htmlFor="cliente_radio"
                      className="ml-2 text-lg font-medium text-blackMain"
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
                      onChange={handleOptionChange}
                    />
                    <label
                      htmlFor="corretor_radio"
                      className="ml-2 text-lg font-medium text-blackMain"
                    >
                      Corretor
                    </label>
                  </div>
                </div>
                <div>
                  <Input
                    registerInput="email"
                    title="E-mail"
                    htmlFor="email"
                    name="email"
                    id="email"
                    type="text"
                  />
                </div>
                <div>
                  <Input
                    registerInput="senha"
                    title="Senha"
                    htmlFor="senha"
                    name="senha"
                    id="senha"
                    type="password"
                  />
                </div>
                <div className="mt-12">
                  <Button title="Entrar" />
                </div>
              </form>
            </FormProvider>
          </div>
        </section>
      </div>
    </main>
  );
};

export default SignIn;
