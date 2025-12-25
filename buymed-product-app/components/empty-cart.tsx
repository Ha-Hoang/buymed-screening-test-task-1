import CommonCard from "@/components/common-card";
import { ShoppingCart } from "lucide-react";
import React from "react";

const EmptyCart = () => {
  return (
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
  );
};

export default EmptyCart;
