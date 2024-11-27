import React from "react";
import InfoCards from "./InfoCards";
import CardDisplay from "./CardDisplay";
import { orderHistoryConstant } from "@/constant";
import OrderHistoryTable from "@/components/Shared/OrderHistoryTable";
import { auth } from "@/auth";
import {
  AUTHOR_BY_GOOGLE_EMAIL_QUERY,
  GET_ADDRESS_BY_AUTHOR_AND_TYPE,
  GET_ALL_CARD_BY_AUTHOR_ID,
} from "@/sanity/lib/query";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";

const dashboard = async () => {
  const session = await auth();

  const { data: user } = await sanityFetch({
    query: AUTHOR_BY_GOOGLE_EMAIL_QUERY,
    params: { email: session?.user?.email },
  });
  const { data: billing_address } = await sanityFetch({
    query: GET_ADDRESS_BY_AUTHOR_AND_TYPE,
    params: { id: user?._id, type: "Billing Address" },
  });

  const { data: cards } = await sanityFetch({
    query: GET_ALL_CARD_BY_AUTHOR_ID,
    params: { id: user._id },
  });
  return (
    <>
      <div className="flex w-full flex-col gap-3 px-2 md:px-0">
        <h2 className="text-gray-900 text-xl font-medium">{user.name}</h2>
        <p className="max-w-[423px] text-gray-700 text-sm">
          From your account dashboard. you can easily check & view your{" "}
          <span className="text-primary-500">Recent Orders</span>, manage your{" "}
          <span className="text-primary-500">
            Shipping and Billing Addresses{" "}
          </span>
          and edit your <span className="text-primary-500">Password</span> and{" "}
          <span className="text-primary-500">Account</span> Details.
        </p>
        <InfoCards user={user} billing_address={billing_address} />
        <CardDisplay cards={cards} session={user} />
        <OrderHistoryTable orderHistory={orderHistoryConstant.slice(0, 7)} />
      </div>
      <SanityLive />
    </>
  );
};

export default dashboard;
