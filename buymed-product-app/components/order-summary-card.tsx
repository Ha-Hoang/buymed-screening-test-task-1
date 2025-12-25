import CommonCard from "@/components/common-card";
import NumberStepper from "@/components/number-stepper";
import { formatCurrency } from "@/lib/utils";
import { CartItem } from "@/components/shared/type";
import { X } from "lucide-react";

interface OrderSummaryCardProps {
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
}

export const OrderSummaryCard = ({
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
}: OrderSummaryCardProps) => {
  const grandTotal = cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  return (
    <CommonCard
      cardCls="gap-0 py-3"
      cardTitleCls="text-xl"
      title="Order Summary"
      cardContentCls="border-t border-b py-3 max-h-[500px] overflow-y-auto"
      content={
        <>
          <div className="flex flex-col gap-3">
            {cartItems.map((item) => {
              const itemTotal = item.product.price * item.quantity;
              return (
                <div key={item.product.id} className="flex flex-col gap-2">
                  <div className="flex justify-between items-start">
                    <div className="flex flex-col flex-1">
                      <span className="font-medium">{item.product.name}</span>
                    </div>
                    <button
                      onClick={() => onRemoveItem(item.product.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                      aria-label="Remove item"
                    >
                      <X size={18} />
                    </button>
                  </div>
                  <div className="flex justify-between items-center">
                    <NumberStepper
                      value={item.quantity}
                      onChange={(newQuantity) =>
                        onUpdateQuantity(item.product.id, newQuantity)
                      }
                    />
                    <span className="float-right font-semibold">
                      {formatCurrency(itemTotal, "vi-VN", "VND")}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      }
      cardFooterCls="justify-between pt-2"
      footer={
        <>
          <h1 className="text-gray-700 font-medium">Grand Total:</h1>
          <span className="font-semibold text-lg">
            {formatCurrency(grandTotal, "vi-VN", "VND")}
          </span>
        </>
      }
    />
  );
};
