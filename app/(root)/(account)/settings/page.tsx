import { auth } from "@/auth";
import AccountDetailsForm from "./AccountDetailsForm";
import AddressForm from "./AddressForm";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import {
  AUTHOR_BY_GOOGLE_EMAIL_QUERY,
  GET_ADDRESS_BY_AUTHOR_AND_TYPE,
} from "@/sanity/lib/query";

const Settings = async () => {
  const session = await auth();
  const { data: user } = await sanityFetch({
    query: AUTHOR_BY_GOOGLE_EMAIL_QUERY,
    params: { email: session?.user?.email },
  });
  const { data: billing_address } = await sanityFetch({
    query: GET_ADDRESS_BY_AUTHOR_AND_TYPE,
    params: { id: user?._id, type: "Billing Address" },
  });

  const { data: shipping_address } = await sanityFetch({
    query: GET_ADDRESS_BY_AUTHOR_AND_TYPE,
    params: { id: user?._id, type: "Shipping Address" },
  });

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="w-full border border-gray-100 h-auto">
          <div className="text-gray-900 font-medium px-5 w-full h-[52px] border-b border-gray-100 flex items-center ">
            Accounts Settings
          </div>
          <AccountDetailsForm user={user} />
        </div>
        <div className="w-full flex flex-col md:flex-row gap-2 py-4">
          <AddressForm
            type="Billing Address"
            user={user}
            address={billing_address}
          />
          <AddressForm
            type="Shipping Address"
            user={user}
            address={shipping_address}
          />
        </div>
      </div>
      <SanityLive />
    </>
  );
};

export default Settings;
