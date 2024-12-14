"use client";
import React from "react";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import BankCard from "@/components/Shared/CreditCard";
import { usePathname } from "next/navigation";
import AddCardDialouge from "../paymentoptions/_components/AddCardDialouge";
import { Card } from "@/sanity/types";

const CardDisplay = ({ session, cards }: { session?: any; cards: Card[] }) => {
  const pathName = usePathname();
  return (
    <div className="w-full min-h-[300px] border border-gray-100 rounded-md flex flex-col gap-2">
      <div className="flex items-center justify-between px-4 w-full h-12 border-b border-gray-100">
        <h4 className="text-gray-900 text-sm font-semibold">Payment Option</h4>
        {pathName === "/account/dashboard" ? (
          <Link
            href="/account/paymentoptions"
            className="flex-center gap-2 text-secondary font-semibold text-sm"
          >
            Veiw All <MoveRight />
          </Link>
        ) : (
          <AddCardDialouge session={session} />
        )}
      </div>
      <div className="flex gap-3 w-full flex-wrap px-2">
        {cards.map((card, index) => {
          return (
            <BankCard
              key={index}
              card_number={Number(card.number)}
              username={card.name || "PayPass"}
              cardId={card._id}
              type="Master"
            />
          );
        })}
      </div>
    </div>
  );
};

export default CardDisplay;
