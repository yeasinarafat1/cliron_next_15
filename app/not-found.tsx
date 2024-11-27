import NotFoundButton from "@/components/NotFoundButton";
import Footer from "@/components/Shared/Footer";
import NavBar from "@/components/Shared/NavBar/NavBar";
import { Button } from "@/components/ui/button";
import { MoveLeft } from "lucide-react";
import Image from "next/image";

const NotFound = () => {
  return (
    <div className="overflow-x-hidden">
      <NavBar />
      <div className="flex flex-col items-center justify-center gap-3 w-full h-[450px]">
        <Image
          src={"/404NotFound.jpg"}
          width={150}
          height={90}
          alt="not found"
        />
        <h2 className="text-[#191C1F] text-3xl md:text-4xl font-semibold ">
          404, Page not founds
        </h2>
        <p className="text-[#475156] text-sm md:text-base max-w-[536px] text-center">
          Something went wrong. It’s look that your requested could not be
          found. It’s look like the link is broken or the page is removed.
        </p>
      </div>
      <NotFoundButton />
      <Footer />
    </div>
  );
};
export default NotFound;
