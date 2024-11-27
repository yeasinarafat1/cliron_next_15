"use client";
import Image from "next/image";
import React from "react";
import { BsThreeDots } from "react-icons/bs";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Separator } from "../ui/separator";
import { getLast4Digits } from "@/lib/utils";
interface CreditCardProps {
  type: "Visa" | "Master";
  card_number: number;

  username: string;
}
const BankCard = ({ type, card_number, username }: CreditCardProps) => {
  return (
    <div className="flex flex-col">
      <div className="bank-card">
        <div className="bank-card_content">
          <div>
            <h1 className="text-16 font-semibold text-white">{username}</h1>
          </div>

          <article className="flex flex-col gap-2">
            <div className="flex justify-between">
              <h1 className="text-12 font-semibold text-white">{username}</h1>
              <h2 className="text-12 font-semibold text-white">●● / ●●</h2>
            </div>
            <p className="text-14 font-semibold tracking-[1.1px] text-white">
              ●●●● ●●●● ●●●●{" "}
              <span className="text-16">{getLast4Digits(card_number)}</span>
            </p>
          </article>
        </div>

        <div className="bank-card_icon">
          <div className="flex-center gap-2">
            <Image
              src="/asset/icons/Paypass.svg"
              width={20}
              height={24}
              alt="pay"
            />
            <TreeDotpopOver />
          </div>

          <Image
            src="/asset/icons/mastercard.svg"
            width={45}
            height={32}
            alt="mastercard"
            className="ml-5"
          />
        </div>

        <Image
          src="/asset/icons/Lines.svg"
          width={316}
          height={190}
          alt="lines"
          className="absolute top-0 left-0"
        />
      </div>
    </div>
  );
};

export default BankCard;
const TreeDotpopOver = () => {
  return (
    <Popover>
      <PopoverTrigger className=" z-20">
        <BsThreeDots className="text-white size-6 rotate-90" />
      </PopoverTrigger>
      <PopoverContent
        side="bottom"
        className="w-[80px] h-12 border border-[#E4E7E9] flex flex-col  items-center justify-center"
      >
        <div className="flex-center gap-1 text-base">Edit</div>
        <Separator />
        <div className="flex-center gap-1 text-base ">Delete</div>
      </PopoverContent>
    </Popover>
  );
};
