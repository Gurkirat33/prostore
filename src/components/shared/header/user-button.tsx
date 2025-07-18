import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import { UserIcon } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { signOutUser } from "@/lib/actions/user-actions";

export default async function UserButton() {
  const session = await auth();
  const firstInitial = session?.user?.name?.charAt(0).toUpperCase() ?? "U";
  return (
    <>
      {!session && (
        <Button asChild>
          <Link href="/sign-in">
            <UserIcon /> Sign In
          </Link>
        </Button>
      )}
      {session && (
        <div className="flex gap-2 items-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex items-center">
                <Button
                  variant="ghost"
                  className="relative size-8 rounded-full ml-2 flex items-center justify-center"
                >
                  {firstInitial}
                </Button>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="space-y-1 flex flex-col">
                  <div className="text-sm text-muted-foreground font-medium leading-none">
                    {session?.user?.name}
                  </div>
                  <div className="text-xs text-muted-foreground font-medium leading-none">
                    {session?.user?.email}
                  </div>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuItem className="p-0 mb-1">
                <form action={signOutUser}>
                  <Button
                    className="w-full justify-start"
                    type="submit"
                    variant={"ghost"}
                  >
                    Sign Out
                  </Button>
                </form>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}
    </>
  );
}
