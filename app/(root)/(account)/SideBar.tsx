"use client";
import { AccountSideBarItem } from "@/constant";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

const SideBar = () => {
  const pathname = usePathname();
  return (
    <div className="hidden md:flex flex-col gap-2 w-72 h-[440px] border border-gray-100 py-4 rounded-md account-siderbar-shadow">
      {AccountSideBarItem.map((item, index) => {
        return (
          <Fragment key={index}>
            <Link
              href={item.link}
              className={cn(
                "w-full h-10 flex items-center gap-3 px-3  text-sm rounded-sm",
                pathname === item.link
                  ? "bg-secondary text-white font-semibold"
                  : "bg-transparent text-gray-600"
              )}
            >
              <item.icon className="text-lg size-5" />
              <p>{item.name}</p>
            </Link>
          </Fragment>
        );
      })}
    </div>
  );
};

export default SideBar;
