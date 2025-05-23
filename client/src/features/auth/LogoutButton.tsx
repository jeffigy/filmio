import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { useLogoutMutation } from "@/hooks/useAuth";
import { AxiosError } from "axios";
import { LogOut } from "lucide-react";
import { toast } from "sonner";

const LogoutButton = () => {
  const { mutateAsync: logout, isPending } = useLogoutMutation();

  const handleLogout = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await logout();
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        toast.error(error.message);
      }
    }
  };

  return (
    <DropdownMenuItem
      variant="destructive"
      onClick={handleLogout}
      disabled={isPending}
    >
      <LogOut />
      <span>Logout</span>
    </DropdownMenuItem>
  );
};

export default LogoutButton;
