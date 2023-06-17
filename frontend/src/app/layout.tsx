"use client";

import "./globals.css";
import { Josefin_Sans } from "next/font/google";
const josefin = Josefin_Sans({ subsets: ["latin"] });
import { AuthProvider } from "../contexts/ContextAuth";
import { useState } from "react";
import ContextMenu from "../contexts/ContextMenu";
import Header from "@/components/Header";
import ContextSearch from "@/contexts/ContextSearch";

export const metadata = {
  title: "See My Place",
  description: "Gestão Imobiliária",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [menu, setMenu] = useState<any>(false);
  const [search, setSearch] = useState<any>("");
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={josefin.className}>
        <AuthProvider>
          <ContextSearch.Provider value={[search, setSearch]}>
            <ContextMenu.Provider value={[menu, setMenu]}>
              <Header />
              {children}
            </ContextMenu.Provider>
          </ContextSearch.Provider>
        </AuthProvider>
      </body>
    </html>
  );
}
