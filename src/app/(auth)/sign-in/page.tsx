import CredentialsForm from "./credentials-form";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function page({
  searchParams,
}: {
  searchParams: Promise<{ callbackUrl: string }>;
}) {
  const url = await searchParams;
  const callbackUrl = url.callbackUrl;
  const session = await auth();
  console.log("Session is", session);
  if (session) return redirect(callbackUrl || "/");
  return (
    <div className="  w-full max-w-md">
      <div className="flex flex-col gap-4">
        <p className="text-5xl font-semibold text-center">Sign In</p>
        <div>
          <CredentialsForm />
        </div>
      </div>
    </div>
  );
}
