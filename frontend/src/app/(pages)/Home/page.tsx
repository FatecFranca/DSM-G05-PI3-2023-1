"use client";

import Card from "@/components/Card";
import React, { useContext, useEffect, useState } from "react";
import { useImovelService } from "@/app/services/imovel.service";
import { Imovel } from "@/app/models/Imovel";
import ContextSearch from "@/contexts/ContextSearch";

const Home = () => {
  const imovelService = useImovelService();
  const [imoveis, setImoveis] = useState([]);
  const [search, setSearch] = useContext<any>(ContextSearch);

  useEffect(() => {
    if (search !== "") {
      imovelService.SEARCH(search).then((res: any) => {
        setImoveis(res);
      });
    } else {
      imovelService.GETALL().then((res: any) => {
        setImoveis(res);
      });
    }
  }, [search]);

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
