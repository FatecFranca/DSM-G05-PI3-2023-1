import "./globals.css";
import { Josefin_Sans } from "next/font/google";
const josefin = Josefin_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "See My Place",
  description: "Gestão Imobiliária",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={josefin.className}>{children}</body>
    </html>
  );
}
