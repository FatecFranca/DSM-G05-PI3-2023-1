"use client";

import Card from "@/components/Card";
import React, { useEffect, useState } from "react";
import { useImovelService } from "@/app/services/imovel.service";
import { Imovel } from "@/app/models/Imovel";

const Home = () => {
  const imovelService = useImovelService();
  const [imoveis, setImoveis] = useState([]);

  useEffect(() => {
    imovelService.GETALL().then((res: any) => {
      setImoveis(res);
    });
  }, []);

  console.log("Imoveis: ", imoveis);

  return (
    <div className="flex flex-col items-center justify-center mt-24">
      {imoveis.map((imovel: Imovel) => (
        <Card
          key={imovel.id}
          title={imovel.titulo}
          description={imovel.descricao}
          pathname="/Realty/View"
          query={imovel.id}
        />
      ))}
    </div>
  );
};

export default Home;
