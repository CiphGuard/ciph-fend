"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getShortUsername } from "@/lib/helpers/string";
import { LOGIN_PATH } from "@/lib/utils";
import { useAuthStore } from "@/store/useAuthStore";
import { useRouter } from "next/navigation";

export function UserNav() {
  const { push } = useRouter();
  const { user, logOut } = useAuthStore((state) => ({
    user: state.user,
    logOut: state.logOut,
  }));

  const abrev = getShortUsername(user?.username ?? "");

  const signOut = () => {
    logOut();
    push(LOGIN_PATH);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-9 w-9 rounded-full">
          <Avatar className="h-9 w-9">
            <AvatarFallback className="bg-primary/5">
              {abrev.toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        {/* <DropdownMenuGroup>
          <Link href={PERFIL_PATH}>
            <DropdownMenuItem>Mi perfil</DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
        <DropdownMenuSeparator /> */}
        <DropdownMenuItem onClick={signOut}>Cerrar sesión</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
