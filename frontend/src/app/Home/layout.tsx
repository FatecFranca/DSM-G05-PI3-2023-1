"use client";

import Header from "@/components/Header";
import ContextMenu from "../contexts/ContextMenu";
import { useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [menu, setMenu] = useState<any>(false);
  return (
    <main>
      <Header />
      <div>{children}</div>
    </main>
  );
}
