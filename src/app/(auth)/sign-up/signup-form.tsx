"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { signUpUser } from "@/lib/actions/user-actions";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function SignupForm() {
  const [data, action] = useActionState(signUpUser, {
    success: false,
    message: "",
  });

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const SignupButton = () => {
    const { pending } = useFormStatus();

    return (
      <Button disabled={pending} className="w-full">
        {pending ? "Signing In..." : "Sign In"}
      </Button>
    );
  };

  return (
    <form action={action}>
      <input
        type="hidden"
        name="callbackUrl"
        value={callbackUrl}
        key="callbackUrl"
      />
      <div className="space-y-6">
        <div>
          <Label htmlFor="Name">Name</Label>
          <Input id="name" name="name" type="text" required className="mt-2" />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-2"
          />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            required
            className="mt-2"
          />
        </div>
        <div>
          <Label htmlFor="confirmPassword">Name</Label>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            required
            className="mt-2"
          />
        </div>

        <div>
          <SignupButton />
        </div>
        {data && !data.success && (
          <div className="text-center text-destructive">{data.message}</div>
        )}
        <div>
          <p>
            Already have an account{" "}
            <Button asChild variant="link" className="p-0">
              <Link href={"/sign-in"}>Sign In</Link>
            </Button>
          </p>
        </div>
      </div>
    </form>
  );
}
