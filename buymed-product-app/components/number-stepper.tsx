"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface NumberStepperProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
}

const NumberStepper = ({ value, onChange, min = 1 }: NumberStepperProps) => {
  const handleDecrease = () => {
    if (value > min) {
      onChange(value - 1);
    }
  };

  const handleIncrease = () => {
    onChange(value + 1);
  };

  return (
    <div className="flex items-center border rounded bg-gray-100 h-8">
      <Button
        variant="ghost"
        size="sm"
        className="text-gray-600 cursor-pointer font-semibold"
        onClick={handleDecrease}
        disabled={value <= min}
      >
        -
      </Button>
      <input
        className="w-10 text-center border-t-0 border-b-0 rounded-none h-full bg-transparent outline-none"
        type="number"
        value={value}
        readOnly
      />
      <Button
        variant="ghost"
        size="sm"
        className="text-gray-600 cursor-pointer font-semibold"
        onClick={handleIncrease}
      >
        +
      </Button>
    </div>
  );
};

export default NumberStepper;
