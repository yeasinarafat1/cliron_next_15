import Image from "next/image";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const TopBar = () => {
  return (
    <div className="  bg-primary w-full  h-[48px] flex items-center justify-around text-white">
      <p className=" text-[14px] hidden md:flex ">
        Wellcome to cliron online service
      </p>
      <div className="flex items-center gap-2">
        <p>Follow us:</p>
        <a href="/">
          <Image
            src="/asset/icons/Twitter.svg"
            alt="Twitter"
            height={14}
            width={14}
          />
        </a>
        <a href="/">
          <Image
            src="/asset/icons/Facebook.svg"
            alt="Facebook"
            height={14}
            width={14}
          />
        </a>
        <a href="/">
          <Image
            src="/asset/icons/Instagram.svg"
            alt="Instagram"
            height={14}
            width={14}
          />
        </a>
        <a href="/">
          <Image
            src="/asset/icons/Pinterest.svg"
            alt="Pinterest"
            height={14}
            width={14}
          />
        </a>
        <a href="/">
          <Image
            src="/asset/icons/Reddit.svg"
            alt="Reddit"
            height={14}
            width={14}
          />
        </a>
        <a href="/">
          <Image
            src="/asset/icons/Youtube.svg"
            alt="Youtube"
            height={14}
            width={14}
          />
        </a>
        <div className="h-5 bg-gray-300 w-[1px]" />
        <Select>
          <SelectTrigger className="w-auto h-[20px] bg-transparent !ring-0 !ring-offset-0  outline-none border-0 flex items-center justify-center active:outline-none">
            <SelectValue className="text-lg" placeholder="Eng" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="eng">Eng</SelectItem>
            <SelectItem value="bn">Bn</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-auto h-[20px] bg-transparent !ring-0 !ring-offset-0  outline-none border-0 flex items-center justify-center active:outline-none">
            <SelectValue className="text-[5px] w-2" placeholder="Usd" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Usd">Usd</SelectItem>
            <SelectItem value="Bdt">Bdt</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default TopBar;
