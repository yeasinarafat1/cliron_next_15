"use client";
import React from "react";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";
interface props {
  children: React.ReactNode;
  className?: string;
  disable?: boolean;
  onClickFn?: () => void;
}
//**This is a simple Button Yello Button with Right Arrow where You can pass Additional class if you want */
const OrangeButton = ({ children, className, disable, onClickFn }: props) => {
  return (
    <Button
      onClick={onClickFn}
      disabled={disable}
      className={`bg-secondary h-11  hover:bg-orange-500 flex-center gap-2 ${
        className && className
      }`}
    >
      {children} <MoveRight />
    </Button>
  );
};

export default OrangeButton;
