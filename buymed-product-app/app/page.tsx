"use client";
import { getProducts } from "@/server/products";
import { Product } from "@/components/shared/type";
import { ProductCard } from "@/components/product-card";
import Search from "@/components/search";
import Filter from "@/components/select";
import { FilterOptions } from "@/components/shared/constant";
import { OrderSummaryCard } from "@/components/order-summary-card";
import EmptyCart from "@/components/empty-cart";
import { useEffect, useState } from "react";
import SpinnerButton from "@/components/spinner-button";

export default function Home() {
  const [isShowOrderSummary, setShowOrderSummary] = useState<boolean>(false);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleAddToCart = () => {
    setShowOrderSummary(true);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const data = await getProducts();
        if (data) {
          setProducts(data);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      {loading && (
        <div className="absolute flex justify-center items-center w-full h-full bg-[#00000019]">
          <SpinnerButton />
        </div>
      )}
      <main className="flex flex-col gap-10 justify-center max-w-6xl mx-auto">
        <div className="flex justify-between mt-10">
          <h1 className="text-2xl font-semibold text-[#005c29]">
            Product List
          </h1>
          <div className="flex gap-2 w-2/3">
            <Search placeholder="Search by product name" />
            <Filter placeholder="All" options={FilterOptions} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <div className="col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product: Product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={handleAddToCart}
              />
            ))}
          </div>
          <div className="col-span-1">
            {isShowOrderSummary && <OrderSummaryCard />}
            {!isShowOrderSummary && <EmptyCart />}
          </div>
        </div>
      </main>
    </>
  );
}
