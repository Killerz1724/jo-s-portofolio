import Layout from "@/components/Layout";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Jo's Portofolio",
  description: "My career's journey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={poppins.className}
      >

        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
