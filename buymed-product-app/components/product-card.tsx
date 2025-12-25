import { Product } from "@/components/shared/type";
import { CardDescription, CardTitle } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import CommonCard from "@/components/common-card";
import { formatCurrency } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <CommonCard
      cardCls="cursor-pointer transition-all delay-75 hover:shadow-lg"
      cardHeaderCls="relative"
      header={
        <>
          {product.isPrescription && (
            <Badge className="absolute -top-4 left-2 bg-red-800">Rx</Badge>
          )}
          <CardTitle className="text-xl mt-2">{product.name}</CardTitle>
          <CardDescription className="bg-gray-200 rounded-full px-2 py-1 w-fit text-gray-500 text-[10px]">
            {product.category}
          </CardDescription>
        </>
      }
      content={
        <p className="text-[#005c29] text-2xl font-semibold">{formatCurrency(product.price, 'vi-VN', 'VND')}</p>
      }
      cardFooterCls="justify-end"
      footer={
        <button className="flex gap-2 text-white rounded py-1.5 px-3 cursor-pointer bg-[#005c29] hover:bg-[#3e7055] transition-all delay-75">
          <ShoppingCart />
          Add to Cart
        </button>
      }
    />
  );
};
