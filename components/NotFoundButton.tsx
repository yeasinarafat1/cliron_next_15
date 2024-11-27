"use client";
import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { MoveLeft } from "lucide-react";

const NotFoundButton = () => {
  const router = useRouter();
  return (
    <div className="flex-center gap-2">
      <Button
        onClick={() => router.back()}
        className="py-2 px-3 bg-secondary hover:bg-transparent border hover:border-secondary hover:text-secondary flex-center gap-2 text-lg"
      >
        <MoveLeft /> Go back
      </Button>
      <Button
        onClick={() => router.push("/")}
        className="py-2 px-3 border border-secondary  bg-transparent hover:bg-secondary  flex-center gap-2 text-lg text-secondary hover:text-white"
      >
        Go to home
      </Button>
    </div>
  );
};

export default NotFoundButton;
