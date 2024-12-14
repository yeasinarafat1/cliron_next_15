import { auth, signOut } from "@/auth";
import ProoductCartPopOver from "@/components/ProoductCartPopOver";
import { Input } from "@/components/ui/input";
import { client } from "@/sanity/lib/client";
import { sanityFetch } from "@/sanity/lib/live";
import { GET_PROFILE_PIC_URL_BY_EMAIL } from "@/sanity/lib/query";
import { LogOutIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AiFillHeart } from "react-icons/ai";

const MiddleBar = async () => {
  const session = await auth();
  let user;
  const { data: userProfilePic } = await sanityFetch({
    query: GET_PROFILE_PIC_URL_BY_EMAIL,
    params: { email: session?.user?.email || "" },
  });

  return (
    <div className="hidden bg-primary w-full h-[75px] md:flex items-center justify-around">
      <Link href={"/"} className="flex items-center justify-center gap-2">
        <Image src="/asset/icons/logo.svg" alt="Logo" height={48} width={48} />
        <p className="text-white font-bold text-2xl">CLICON</p>
      </Link>
      <div className="relative">
        <Input placeholder="Search Anything" className="h-[48px] w-96" />
        <Image
          src="/asset/icons/MagnifyingGlass.svg"
          alt="search icon"
          height={25}
          width={25}
          className="absolute right-2 top-3"
        />
      </div>
      {session ? (
        <div className="flex items-center justify-center gap-2">
          <ProoductCartPopOver />
          <Link href={"/whishlist"}>
            <AiFillHeart className="size-8 text-white" />
          </Link>
          <Link href={"/dashboard"}>
            <Image
              src={userProfilePic.image || "/asset/icons/user.svg"}
              alt="User icon"
              height={38}
              width={38}
              className="rounded-full border-2 border-primary"
            />
          </Link>
          <form
            action={async () => {
              "use server";
              await signOut({ redirectTo: "/" });
            }}
          >
            <button type="submit">
              <LogOutIcon className="size-8 text-white" />
            </button>
          </form>
        </div>
      ) : (
        <div className="flex-center gap-2">
          <Link
            href={"/auth"}
            className="bg-secondary hover:bg-white border-2 border-transparent hover:border-secondary text-white hover:text-secondary px-5 py-2 rounded-md "
          >
            Sign In
          </Link>
        </div>
      )}
    </div>
  );
};

export default MiddleBar;
