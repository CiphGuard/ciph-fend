import { Card } from "@/components/ui/card";
import Image from "next/image";
import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <main className="h-screen flex">
      <div className="w-full tablet-lg:w-[45%] flex justify-center">
        <Card className="border-none shadow-none flex flex-col flex-grow max-w-[600px] mx-auto justify-center px-4 tablet-lg:px-8">
          {children}
        </Card>
      </div>
      <div className="hidden w-[55%] h-full bg-primary tablet-lg:block">
        <Image
          src="https://blog.astraed.co/wp-content/uploads/2022/02/Jan22_06_1303435804.jpg"
          alt=""
          aria-hidden
          width={1000}
          height={1000}
          unoptimized
          className="object-cover w-full h-full opacity-40"
        />
      </div>
    </main>
  );
}
