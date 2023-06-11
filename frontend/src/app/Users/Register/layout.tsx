"use client";

import Header from "@/components/Header";
import ContextMenu from "@/app/contexts/ContextMenu";
import { useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [menu, setMenu] = useState<any>(false);
  return (
    <main>
      <ContextMenu.Provider value={[menu, setMenu]}>
        <Header />
        <div>{children}</div>
      </ContextMenu.Provider>
    </main>
  );
}
