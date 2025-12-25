import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import React from "react";

interface SpinnerProps {
  noti?: string;
}

const SpinnerButton = ({ noti = "Please wait" }: SpinnerProps) => {
  return (
    <Button variant="secondary" disabled size="sm">
      <Spinner />
      {noti}
    </Button>
  );
};

export default SpinnerButton;
