import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { AddressBar } from "../ui/navigation-bar/AddressBar";
import { GlobalNav } from "../ui/navigation-bar/GlobalNavigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://localhost.com"), 
  title: "Website Portfolio",
  description: "Generated by create next app"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="[color-scheme:dark] overflow-x-hidden overflow-y-scroll"
    >
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
      <body className="bg-gray-1100 pb-12 overflow-x-hidden">
        <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
        <GlobalNav />
        <div id="modal-root"></div>
        <div className="lg:pl-72">
          <div className="mx-6">
            <div className="container mx-auto w-full space-y-8 pt-20 lg:py-8">
              <div className="h-10 w-full rounded-md bg-gradient-to-r from-cyan-500 via-cyan-200 to-gray-500 p-[0.1rem]">
                <div className="flex h-full w-full items-center justify-start bg-gray-800 back rounded-md">
                  <AddressBar />
                </div>
              </div>
            </div>
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
