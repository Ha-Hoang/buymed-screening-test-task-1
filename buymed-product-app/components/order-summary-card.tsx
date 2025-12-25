import CommonCard from "@/components/common-card";
import NumberStepper from "@/components/number-stepper";
import { formatCurrency } from "@/lib/utils";

export const OrderSummaryCard = () => {
  return (
    <CommonCard
      cardCls="gap-0 py-3"
      cardTitleCls="text-xl"
      title="Order Summary"
      cardContentCls="border-t border-b py-3"
      content={
        <>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col">
              <span>Product Name 1</span>
              <div className="flex justify-between items-center">
                <NumberStepper />
                <span className="float-right font-semibold">
                  {formatCurrency(20000, "vi-VN", "VND")}
                </span>
              </div>
            </div>
          </div>
        </>
      }
      cardFooterCls="justify-between pt-2"
      footer={
        <>
          <h1 className="text-gray-700 font-medium">Grand Total:</h1>
          <span className="font-semibold text-lg">
            {formatCurrency(20000, "vi-VN", "VND")}
          </span>
        </>
      }
    />
  );
};
