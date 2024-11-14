import type { Metadata } from "next";
import { Sidebar, TopMenu } from "./components";

export const metadata: Metadata = {
  title: "Rest todos",
  description: "Rest todos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
     <Sidebar />
       <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] min-h-screen">
          <TopMenu />
          <div className="w-full h-full px-6 pt-6">
            {children}
          </div>
       </div>
    </>
  );
}
