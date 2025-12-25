import { getProducts } from "@/server/products";
import { Product } from "@/components/shared/type";
import { ProductCard } from "@/components/product-card";
import Search from "@/components/search";
import Filter from "@/components/select";
import { FilterOptions } from "@/components/shared/constant";
import { ShoppingCart } from "lucide-react";
import CommonCard from "@/components/card";
import { formatCurrency } from "@/lib/utils";

export default async function Home() {
  const products = await getProducts();

  return (
    <main className="flex flex-col gap-10 justify-center max-w-6xl mx-auto">
      <div className="flex justify-between mt-10">
        <h1 className="text-2xl font-semibold text-[#005c29]">Product List</h1>
        <div className="flex gap-2 w-2/3">
          <Search placeholder="Search by product name" />
          <Filter placeholder="All" options={FilterOptions} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <div className="col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="col-span-1">
          <CommonCard
            cardCls="gap-0 py-3"
            cardTitleCls="text-xl"
            title="Order Summary"
            cardContentCls="border-t border-b py-3"
            content={
              <>
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col">
                    <span className="font-semibold">Product Name 1</span>
                    <div>
                      <span>Qty: 1</span>
                      <span className="float-right font-semibold">{formatCurrency(20000, 'vi-VN', 'VND')}</span>
                    </div>
                  </div>
                </div>
              </>
            }
            cardFooterCls="justify-between pt-2"
            footer={
              <>
                <h1 className="text-gray-700 font-medium">Grand Total:</h1>
                <span className="font-semibold text-lg">{formatCurrency(20000, 'vi-VN', 'VND')}</span>
              </>
            }
          />

          <CommonCard
            cardContentCls="text-center items-center flex flex-col"
            content={
              <>
                <ShoppingCart size={48} color="#005c29" />
                <h1 className="font-semibold text-lg">Your cart is empty</h1>
                <span className="text-[12px] font-light text-gray-600">
                  Add product to see summary
                </span>
              </>
            }
          />
        </div>
      </div>
    </main>
  );
}
