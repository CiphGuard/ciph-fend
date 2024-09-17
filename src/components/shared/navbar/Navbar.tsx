"use client";

import { cn } from "@/lib/utils";
import Logo from "../Logo";
import { UserNav } from "./UserNav";
import { useEffect, useState } from "react";

interface Props {
  className?: string;
}

export default function Navbar({ className }: Props) {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={cn(
        "border-b w-full bg-white z-30 transition-all duration-300",
        className,
        {
          "backdrop-blur-md bg-white/80": scrolled,
          "backdrop-filter-none": !scrolled,
        }
      )}
    >
      <div className="inner-wrapper mx-auto h-[auto] py-2 flex items-center justify-between">
        <Logo />
        <UserNav />
      </div>
    </div>
  );
}
