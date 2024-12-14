import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="w-screen h-screen flex-center bg-[#D9EAFD]">
      <Image
        src={"/asset/icons/Logo.svg"}
        height={100}
        width={100}
        alt={"logo"}
      />
      <div className="flex-center gap-2 flex-col absolute w-full bottom-3">
        <p className="text-[#81BFDA] font-bold text-xs">Powered By</p>
        <p className="text-[#074799] font-bold text-xl ">Yeasin Arafat</p>
      </div>
      <div className="flex w-full items-center justify-end gap-2 absolute bottom-3 right-2">
        <p>Follow us:</p>
        <a href="/">
          <Image
            src="/asset/icons/Twitter.svg"
            alt="Twitter"
            height={14}
            width={14}
            className="invert"
          />
        </a>
        <a href="/">
          <Image
            src="/asset/icons/Facebook.svg"
            alt="Facebook"
            height={14}
            width={14}
            className="invert"
          />
        </a>
        <a href="/">
          <Image
            src="/asset/icons/Instagram.svg"
            alt="Instagram"
            height={14}
            width={14}
            className="invert"
          />
        </a>
        <a href="/">
          <Image
            src="/asset/icons/Pinterest.svg"
            alt="Pinterest"
            height={14}
            width={14}
            className="invert"
          />
        </a>
        <a href="/">
          <Image
            src="/asset/icons/Reddit.svg"
            alt="Reddit"
            height={14}
            width={14}
            className="invert"
          />
        </a>
        <a href="/">
          <Image
            src="/asset/icons/Youtube.svg"
            alt="Youtube"
            height={14}
            width={14}
            className="invert"
          />
        </a>
      </div>
    </div>
  );
};

export default page;
