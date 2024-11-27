import ProoductCartPopOver from "@/components/ProoductCartPopOver";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import React from "react";
//** This is a section which will used for showcasing mobile nav bar in this section i am basically  doing that I am saprating the search bar so that it look good and readable in mobile device */
const MobileMiddleNav = () => {
  return (
    <>
      <div className="md:hidden flex items-center justify-around w-full h-[65px] bg-primary">
        <Link href={"/"} className="flex items-center justify-center gap-2">
          <Image
            className="size-[35px]"
            src="/asset/icons/logo.svg"
            alt="Logo"
            height={60}
            width={60}
          />
          <p className="text-white font-bold text-xl">CLICON</p>
        </Link>

        <div className="flex items-center justify-center gap-3">
          <ProoductCartPopOver />
          <Link href={"/whishlist"}>
            <Image
              src={"/asset/icons/Heart.svg"}
              alt="Heart icon"
              height={30}
              width={30}
            />
          </Link>
          <Link href={"/account/dashboard"}>
            <Image
              src={"/asset/icons/User.svg"}
              alt="User icon"
              height={30}
              width={30}
            />
          </Link>
        </div>
      </div>
      <div className=" w-full bg-primary h-[65px] flex-center md:hidden">
        <div className="relative w-[96vw]">
          <Input placeholder="Search Anything" className="h-[40px] w-full" />
          <Image
            src="/asset/icons/MagnifyingGlass.svg"
            alt="search icon"
            height={30}
            width={30}
            className="absolute right-1 top-2"
          />
        </div>
      </div>
    </>
  );
};

export default MobileMiddleNav;
