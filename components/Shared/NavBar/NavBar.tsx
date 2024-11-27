import React from "react";
import MiddleBar from "./MiddleBar";
import BottomBar from "./BottomBar";
import MobileMiddleNav from "./MobileNav";
import { Separator } from "@/components/ui/separator";
import BreadCrumb from "./BreadCrumb";
import TopBar from "../TopBar";

const NavBar = () => {
  return (
    <>
      <TopBar />
      <Separator className="bg-gray-400" />
      <MiddleBar />
      <MobileMiddleNav />
      <BottomBar />
      <BreadCrumb />
    </>
  );
};

export default NavBar;
