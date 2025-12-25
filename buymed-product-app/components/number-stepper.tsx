"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const NumberStepper = () => {
  const [value, setValue] = useState(0);

  return (
    <div className="flex items-center border rounded bg-gray-100 h-8">
      <Button
        variant="ghost"
        size="sm"
        className="text-gray-600 cursor-pointer font-semibold"
        onClick={() => setValue(value > 1 ? value - 1 : 1)}
      >
        -
      </Button>
      <Input
        className="w-10 text-center border-t-0 border-b-0 rounded-none h-fit"
        type="number"
        value={value}
        readOnly
      />
      <Button
        variant="ghost"
        size="sm"
        className="text-gray-600 cursor-pointer font-semibold"
        onClick={() => setValue(value + 1)}
      >
        +
      </Button>
    </div>
  );
};

export default NumberStepper;
