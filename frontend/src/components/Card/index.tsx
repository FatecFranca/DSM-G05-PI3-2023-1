import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CardProps {
  title: string | any;
  description: string | any;
  pathname: string | any;
  query: string | any;
}

const Card: React.FC<CardProps> = ({ title, description, pathname, query }) => {
  return (
    <div className="bg-blackMain w-10/12 flex items-center rounded-xl p-4 mb-8">
      <div className="min-w-[100px] max-w-[200px] min-h-[100px] max-h-[200px] relative">
        <Image
          className="rounded-lg"
          src="/img/imovel_1.svg"
          alt="Imóvel 1"
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <div className="flex flex-col ml-12 w-7/12">
        <div>
          <h1 className="text-yellow text-2xl text-bold">{title}</h1>
        </div>
        <div className="mt-4">
          <p className="text-whiteMain">{description}</p>
        </div>
      </div>
      <div className="ml-auto mr-12">
        <Link
          href={{
            pathname: pathname,
            query: { id: query },
          }}
        >
          <button className="bg-yellow rounded-xl p-4">
            <h1 className="text-xl">Ver mais...</h1>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
