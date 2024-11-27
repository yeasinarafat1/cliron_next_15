import { Popover, PopoverTrigger } from "@/components/ui/popover";
import { CatagoriList } from "@/constant";
import { cn } from "@/lib/utils";
import { PopoverContent } from "@radix-ui/react-popover";
import Image from "next/image";
import React from "react";

const CatagoryTabs = () => {
  return (
    <Popover>
      <PopoverTrigger className="bg-secondary px-3 py-2 rounded-md text-white flex-center gap-2">
        All Catagory{" "}
        <Image
          src={"/asset/icons/CaretDown.svg"}
          alt="arrow down "
          width={16}
          height={16}
        />
      </PopoverTrigger>
      <PopoverContent className="mt-2 w-60  bg-white border border-[#E4E7E9] shadow  flex justify-center flex-col  gap-3  z-10">
        {CatagoriList.map((item, index) => (
          <div
            key={index}
            className={cn(
              "text-gray-600  w-full px-2  flex items-center justify-between gap-2 h-9 cursor-pointer",
              item === "computer and laptop" && "bg-gray-50 "
            )}
          >
            <p className="text-sm"> {item}</p>
            <Image
              src={"/asset/icons/CaretDown.svg"}
              alt="arrow down "
              width={20}
              height={20}
              className={cn(
                "invert-[.30] rotate-90",
                item === "computer and laptop" ? "block" : "hidden"
              )}
            />
          </div>
        ))}
      </PopoverContent>
    </Popover>
  );
};

export default CatagoryTabs;
