import { Menu, SidebarIcon } from "lucide-react";

import { SearchForm } from "@/components/search-form";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useSidebar } from "@/components/ui/sidebar";
import { Link } from "react-router";
import { ModeToggle } from "./mode-toggle";

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

        <div className="hidden space-x-5 md:block">
          {" "}
          {navLinks.map((navlink) => (
            <Link to={navlink.to}>{navlink.label}</Link>
          ))}
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
