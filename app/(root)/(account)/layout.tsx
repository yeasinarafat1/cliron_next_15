"use client";
import React, { useEffect } from "react";
import SideBar from "./SideBar";
import MobileSideBar from "./MobileSideBar";
// import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  // const session = useSession();
  // useEffect(() => {
  //   if (session.status === "unauthenticated") router.replace("/sign-in");
  // }, [session]);
  return (
    <>
      <MobileSideBar />
      <div className="flex w-full md:container gap-10 mt-3 md:mt-10">
        <SideBar />

        {children}
      </div>
    </>
  );
};

export default layout;
