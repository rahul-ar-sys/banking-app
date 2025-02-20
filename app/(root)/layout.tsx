import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = {
    firstname: "John",
    lastname: "Doe",
  };
  return (
   <main className="flex h-screen w-full font-inter">
    <Sidebar user={loggedIn} />

    <div className="flex flex-col w-full">
      <div className="root-layout">
        <Image src="/icons/logo.svg" alt="Menu Icon" width={30} height={30} className="size-[24px] max-xl:size-14" />
        <div>
          <MobileNav user={loggedIn} />
        </div>
      </div>
      {children}
    </div>
    </main>
  );
}
