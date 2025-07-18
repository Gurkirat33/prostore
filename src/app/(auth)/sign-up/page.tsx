import { auth } from "@/auth";
import { redirect } from "next/navigation";
import SignupForm from "./signup-form";

export default async function page({
  searchParams,
}: {
  searchParams: Promise<{ callbackUrl: string }>;
}) {
  const url = await searchParams;
  const callbackUrl = url.callbackUrl;
  const session = await auth();
  if (session) return redirect(callbackUrl || "/");
  return (
    <div className="  w-full max-w-md">
      <div className="flex flex-col gap-4">
        <p className="text-5xl font-semibold text-center">Sign up</p>
        <div>
          <SignupForm />
        </div>
      </div>
    </div>
  );
}
