"use client";

import React from "react";
import Image from "next/image";
import Input from "@/components/Form/Input";
import Button from "@/components/Form/Button";
import {
  useForm,
  SubmitHandler,
  FormProvider,
  FieldValues,
} from "react-hook-form";

const SignIn = () => {
  const methods = useForm();
  const { handleSubmit } = methods;
  const handleSignIn: SubmitHandler<FieldValues> = async (
    data: FieldValues
  ) => {
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
                <div>
                  <Input
                    registerInput="username"
                    title="Usuário"
                    htmlFor="username"
                    name="username"
                    id="username"
                    type="text"
                  />
                </div>
                <div>
                  <Input
                    registerInput="password"
                    title="Senha"
                    htmlFor="password"
                    name="password"
                    id="password"
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
