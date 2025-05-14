import { Outlet } from "react-router";
import { SidebarInset, SidebarProvider } from "./ui/sidebar";
import { SiteHeader } from "./site-header";
import { AppSidebar } from "./app-sidebar";

const RootLayout = () => {
  return (
    <div className="[--header-height:calc(theme(spacing.14))]">
      <SidebarProvider className="flex flex-col">
        <SiteHeader />
        <div className="flex flex-1">
          <SidebarInset>
            <AppSidebar variant={undefined} side="right" collapsible="icon" />
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
