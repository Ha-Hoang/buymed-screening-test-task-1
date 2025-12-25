"use client";
import { getProducts } from "@/server/products";
import { Product, CartItem } from "@/components/shared/type";
import { ProductCard } from "@/components/product-card";
import Search from "@/components/search";
import Filter from "@/components/select";
import { FilterOptions } from "@/components/shared/constant";
import { OrderSummaryCard } from "@/components/order-summary-card";
import EmptyCart from "@/components/empty-cart";
import { useEffect, useState } from "react";
import SpinnerButton from "@/components/spinner-button";
import { useQueryStates } from "nuqs";
import { parseAsString } from "nuqs";

export default function Home() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [{ search, filter }] = useQueryStates({
    search: parseAsString.withDefault(""),
    filter: parseAsString.withDefault(""),
  });

  const handleAddToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.product.id === product.id
      );
      if (existingItem) {
        return prevCart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { product, quantity: 1 }];
      }
    });
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveFromCart(productId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.product.id !== productId));
  };

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const data = await getProducts({ search, filter });
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
  }, [search, filter]);

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
            {cart.length > 0 ? (
              <OrderSummaryCard
                cartItems={cart}
                onUpdateQuantity={handleUpdateQuantity}
                onRemoveItem={handleRemoveFromCart}
              />
            ) : (
              <EmptyCart />
            )}
          </div>
        </div>
      </main>
    </>
  );
}
