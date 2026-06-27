import ProtectedRoute from "@/components/ProtectedRoute";
import Image from "next/image";

const page = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`https://fakestoreapi.com/products/${id}`);

  if (!res.ok) {
    return <h1>Product Not Found</h1>;
  }

  const product = await res.json();

  return (
    <ProtectedRoute>
      <div className="max-w-5xl h-screen  mx-auto p-8 ">
        <div className="grid md:grid-cols-2 gap-10 items-center justify-center h-full ">
          <img
            src={product.image}
            alt={product.title}
            width={400}
            height={400}
            className="object-contain h-96"
          />

          <div>
            <h1 className="text-3xl font-bold">{product.title}</h1>

            <p className="text-xl text-green-600 font-semibold mt-4">
              ${product.price}
            </p>

            <p className="mt-4 text-gray-600">{product.description}</p>

            <p className="mt-6">
              <strong>Category:</strong> {product.category}
            </p>

            <p className="mt-2">
              ⭐ {product.rating.rate} ({product.rating.count} Reviews)
            </p>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default page;
