import { auth } from "@/auth";
import CardDisplay from "../dashboard/CardDisplay";
import AddressCard from "@/components/Shared/AddressCard";
import {
  AUTHOR_BY_GOOGLE_EMAIL_QUERY,
  GET_ADDRESS_BY_AUTHOR_AND_TYPE,
  GET_ALL_CARD_BY_AUTHOR_ID,
} from "@/sanity/lib/query";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";

const paymentOptions = async () => {
  const session = await auth();
  const { data: user } = await sanityFetch({
    query: AUTHOR_BY_GOOGLE_EMAIL_QUERY,
    params: { email: session?.user?.email },
  });
  const { data: cards } = await sanityFetch({
    query: GET_ALL_CARD_BY_AUTHOR_ID,
    params: { id: user._id },
  });
  const { data: billing_address } = await sanityFetch({
    query: GET_ADDRESS_BY_AUTHOR_AND_TYPE,
    params: { id: user._id, type: "Billing Address" },
  });
  const { data: shiping_address } = await sanityFetch({
    query: GET_ADDRESS_BY_AUTHOR_AND_TYPE,
    params: { id: user._id, type: "Shipping Address" },
  });

  return (
    <>
      <div className="w-full md:container flex flex-col gap-3">
        <CardDisplay session={user} cards={cards} />
        <div className="w-full flex items-center gap-2 lg:gap-5 flex-wrap mb-4">
          <AddressCard type="Billing address" address={billing_address} />
          <AddressCard type="Shipping Address" address={shiping_address} />
        </div>
      </div>
      <SanityLive />
    </>
  );
};

export default paymentOptions;
