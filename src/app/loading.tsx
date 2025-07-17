import Image from "next/image";

export default function loading() {
  return (
    <div className="h-screen flex items-center justify-center">
      <Image src="/images/loader.gif" alt="loader" width={100} height={100} />
    </div>
  );
}
