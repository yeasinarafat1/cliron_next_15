import Image from "next/image";
import React from "react";

const Footer = () => {
    return (
        <div className="flex items-center justify-center gap-7 w-full h-auto flex-wrap md:flex-nowrap md:h-[450px] bg-[#191C1F] pt-3 md:pt-0">
            <div className="flex flex-col gap-5  h-[295px]">
                <div className="flex gap-3 items-center ">
                    <Image
                        src={"/asset/icons/Logo.svg"}
                        alt="Logo"
                        height={48}
                        width={48}
                    />
                    <p className="font-bold text-[26px] text-white ">CLIRON</p>
                </div>
                <p className="text-[#77878F] text-[14px]">Customer Support</p>
                <p className="text-white text-[18px]">+8801998675548</p>
                <div className="text-[#ADB7BC] text-[16px] leading-6 w-[248px]">
                    4517 Washington Ave. Manchester, Kentucky 39495
                </div>
                <div className="text-white text-[16px]">
                    yachenarafath@gmail.com
                </div>
            </div>
            <div className="flex flex-col gap-4 h-[295px]">
                <p className="text-white font-normal uppercase text-[18px]">
                    {" "}
                    Top Catagory
                </p>
                <p className="text-[#929FA5] text-[14px]">Computer & Laptop</p>
                <p className="text-[#929FA5] text-[14px]">SmartPhone</p>
                <p className="text-[#929FA5] text-[14px]">HeadPhone</p>
                <p className="text-white text-[18px]">Accessories</p>
                <p className="text-[#929FA5] text-[14px]">Camera & Photo</p>
                <p className="text-[#929FA5] text-[14px]">Tv & Home </p>
                <div className="flex gap-2 cursor-pointer">
                    <p className="text-[#EBC80C]">Browse all Product</p>
                    <Image
                        src={"/asset/icons/ArrowRight.svg"}
                        alt="arrow"
                        height={20}
                        width={20}
                    />
                </div>
            </div>
            <div className="flex flex-col gap-3 h-[295px]">
                <p className="text-white font-normal uppercase text-[18px]">
                    {" "}
                    Quick Link
                </p>
                <p className="text-[#929FA5] text-[14px]">Shop Product</p>
                <p className="text-[#929FA5] text-[14px]">Shoping Cart</p>
                <p className="text-[#929FA5] text-[14px]">Whishlist</p>
                <p className="text-[#929FA5] text-[14px]">Compare</p>
                <p className="text-[#929FA5] text-[14px]">Track Order</p>
                <p className="text-[#929FA5] text-[14px]">Customer Service</p>
                <p className="text-[#929FA5] text-[14px]">About us</p>
            </div>
            <div className="flex flex-col gap-4 h-[295px]">
                <p className="text-white font-normal uppercase text-[18px]">
                    {" "}
                    Download App
                </p>
                <div className="bg-[#303639] h-[69px] w-[175px] flex items-center justify-center gap-3 rounded-md">
                    <Image
                        src={"/asset/icons/playStoreLogo.svg"}
                        alt="playlogo"
                        height={32}
                        width={32}
                    />
                    <div className="flex flex-col gap-2 text-white">
                        <p className="text-[11px]">Get it Now</p>
                        <p className="text-[14px]">Google Play</p>
                    </div>
                </div>
                <div className="bg-[#303639] h-[69px] w-[175px] flex items-center justify-center gap-3 rounded-md">
                    <Image
                        src={"/asset/icons/appleAppStoreLogo.svg"}
                        alt="playlogo"
                        height={32}
                        width={32}
                    />
                    <div className="flex flex-col gap-2 text-white">
                        <p className="text-[11px]">Get it Now</p>
                        <p className="text-[14px]">Apple Store</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
