"use client";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { AccountSideBarItem } from "@/constant";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHamburger } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const MobileSideBar = () => {
  const pathname = usePathname();
  // console.log(SheetClose.call);

  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger className="px-4 pt-2 flex-center gap-2">
          <GiHamburgerMenu className="size-6 text-gray-800" />
          <p className="text-gray-800 text-2xl">Menus</p>
        </SheetTrigger>
        <SheetContent side={"left"} className="max-h-screen">
          <div className="flex flex-col  gap-4 mt-6">
            {AccountSideBarItem.map((item, index) => {
              return (
                <Link
                  key={index}
                  href={item.link}
                  className={cn(
                    "w-full h-10 flex items-center gap-3 px-3  text-sm rounded-sm",
                    pathname === item.link
                      ? "bg-secondary text-white font-semibold"
                      : "bg-transparent text-gray-600"
                  )}
                >
                  <SheetPrimitive.Close className="flex items-center gap-3">
                    <item.icon className="text-lg size-5" />
                    <p>{item.name}</p>
                  </SheetPrimitive.Close>
                </Link>
              );
            })}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileSideBar;
