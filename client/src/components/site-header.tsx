import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";
import { useStore } from "@/store";
import { LogIn, Menu, UserRound } from "lucide-react";
import { Link } from "react-router";
import { ModeToggle } from "./mode-toggle";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import LogoutButton from "@/features/auth/LogoutButton";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

type NavLink = {
  to: string;
  label: string;
  icon?: React.ReactNode;
};

const navLinks: NavLink[] = [
  { to: "/", label: "Home" },
  { to: "/movies", label: "Movies" },
  { to: "/showtimes", label: "Showtimes" },
];

export function SiteHeader() {
  const { toggleSidebar } = useSidebar();

  return (
    <header className="bg-background sticky top-0 z-50 flex w-full border-b">
      <div className="mx-auto flex h-(--header-height) w-full max-w-screen-xl items-center justify-between gap-2 px-3">
        <div className="flex items-center space-x-2">
          <Link to={"/"}>
            <p>logo here</p>
            {/* <img src={Logo} alt="Logo" className="aspect-square size-8" /> */}
          </Link>
        </div>

        <div className="hidden items-center space-x-5 md:flex">
          {navLinks.map((navlink) => (
            <Link key={navlink.to} to={navlink.to}>
              {navlink.label}
            </Link>
          ))}

          <LoginDashButton />
          <ModeToggle />
        </div>

        <Button
          className="ml-5 size-10 sm:ml-10 md:hidden"
          variant="outline"
          size="icon"
          onClick={toggleSidebar}
        >
          <Menu className="size-5" />
        </Button>
      </div>
    </header>
  );
}

const LoginDashButton = () => {
  const { isAuthenticated, authUser } = useStore();

  if (!isAuthenticated) {
    return (
      <Button asChild>
        <Link to="/login">
          <LogIn />
          <p className="hidden md:block">Login</p>
        </Link>
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage />
          <AvatarFallback>
            {authUser.name
              .split(" ")

              .map((name: string) => name[0].toUpperCase())
              .join("")}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <UserRound /> <span>Profile</span>
        </DropdownMenuItem>
        <LogoutButton />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
