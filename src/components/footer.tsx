import { APP_NAME } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t">
      <div className="p-5 text-center">
        {currentYear} {APP_NAME}. All Rights Reserved
      </div>
    </footer>
  );
}
