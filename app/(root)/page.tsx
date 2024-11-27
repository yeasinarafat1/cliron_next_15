import { auth } from "@/auth";

const page = async () => {
  const session = await auth();
 

  return <div>page</div>;
};

export default page;
