import { Product } from "@/types";
import ProductCard from "./product-card";

export default function ProductList({
  data,
  title,
  limit,
}: {
  data: Product[];
  title?: string;
  limit?: number;
}) {
  const limitedProducts = limit ? data.slice(0, limit) : data;
  return (
    <div className="my-10">
      <h2 className="h2-bold mb-4">{title}</h2>
      {limitedProducts?.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2">
          {limitedProducts.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div>No Product Found</div>
      )}
    </div>
  );
}
