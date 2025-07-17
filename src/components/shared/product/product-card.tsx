import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import ProductPrice from "./product-price";
import { Product } from "@/types";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="pt-0">
      <Link href={`/product/${product.slug}`}>
        <Image
          src={product.images[0]}
          alt={product.name}
          width={200}
          height={200}
          className="w-full object-cover overflow-hidden rounded-t-lg"
        />
      </Link>
      <CardContent>
        <div className="text-xs mb-2">{product.brand}</div>
        <CardTitle>
          <Link href={`/product/${product.slug}`}>{product.name}</Link>
          <div className="flex justify-between mt-3">
            <p>{product.rating}</p>
            <p>
              {product.stock > 0 ? (
                <p>
                  <ProductPrice value={+product.price} />
                </p>
              ) : (
                <p className="text-destructive">Out of Stock</p>
              )}
            </p>
          </div>
        </CardTitle>
      </CardContent>
    </Card>
  );
}
