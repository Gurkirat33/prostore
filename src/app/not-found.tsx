import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Notfound() {
  return (
    <div className="flex flex-col gap-6 items-center justify-center h-screen">
      <h2 className="text-6xl font-bold">Not found</h2>
      <Button asChild>
        <Link href="/" className="flex gap-2 items-center">
          <ArrowLeft />
          Return Home
        </Link>
      </Button>
    </div>
  );
}
