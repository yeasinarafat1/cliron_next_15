"use client";
import React from "react";

import CatagoryTabs from "@/components/Page/Home/CatagoryTabs";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

import { bottomNavBarItems } from "@/constant";
const BottomBar = () => {
  const pathname = usePathname();
  return (
    <>
      <div className="w-full flex justify-center items-center flex-wrap gap-3  md:gap-5 my-2  pb-3">
        <CatagoryTabs />
        {bottomNavBarItems.map((item) => {
          return (
            <Link
              key={item.link}
              href={item.link}
              className={cn(
                "flex justify-center items-center gap-2",
                pathname === item.link ? "text-[#FA8232]" : "text-gray-400"
              )}
            >
              <item.icon className={cn("size-5 ")} />
              <p className={cn(" text-[11px] md:text-[16px]")}> {item.name}</p>
            </Link>
          );
        })}
      </div>
      <Separator />
    </>
  );
};

export default BottomBar;
