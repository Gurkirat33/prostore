"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function ProductImages({ images }: { images: string[] }) {
  const [current, setCurrent] = useState(0);
  return (
    <div className="space-y-4">
      <Image
        src={images[current]}
        alt="product image"
        width={1000}
        height={1000}
      />
      <div className="flex gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className={cn(
              "border cursor-pointer hover:border-orange-600",
              current === index && "border-orange-500"
            )}
            onMouseEnter={() => setCurrent(index)}
          >
            <Image src={image} alt="product image" width={100} height={100} />
          </div>
        ))}
      </div>
    </div>
  );
}
