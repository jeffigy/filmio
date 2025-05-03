import React from "react";
import { Link, Outlet } from "react-router";
import { SidebarInset, SidebarProvider } from "./ui/sidebar";
import { SiteHeader } from "./site-header";
import { AppSidebar } from "./app-sidebar";
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

const RootLayout = () => {
  return (
    <div className="[--header-height:calc(theme(spacing.14))]">
      <SidebarProvider className="flex flex-col">
        <SiteHeader />
        <div className="flex flex-1">
          <SidebarInset>
            <AppSidebar side="right" />
            <div className="flex-1 p-5">
              <Outlet />
            </div>
            <footer className="flex h-14 items-center justify-center">
              © 2023 DentriCare. All rights reserved.
            </footer>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default RootLayout;
