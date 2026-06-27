import ProductCard from "@/components/ProductCart";
import ProtectedRoute from "@/components/ProtectedRoute";
import Link from "next/link";
import React from "react";

const page = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  return (
    <ProtectedRoute>
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-8 py-4 ">
        {products.map((product) => (
          <Link href={`/layout/products/${product.id}`} key={product.id}>
            <ProductCard product={product} />
          </Link>
        ))}
      </section>
    </ProtectedRoute>
  );
};

export default page;
