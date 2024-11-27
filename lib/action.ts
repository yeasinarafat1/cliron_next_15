"use server";

import { writeClient } from "@/sanity/lib/write-client";

export const updateUser = async (
  id: string,
  name: string,
  secendery_email: string,
  phonenumber: string,
  country: string
) => {
  try {
    await writeClient
      .patch(id)
      .set({ name, secendery_email, phonenumber, country })
      .commit();
  } catch (error) {
    console.log(error);
  }
};
export interface AddressData {
  name: string;
  Company_Name: string;
  Address: string;
  country: string;
  states: string;
  city: string;
  zipcode: string;
  phonenumber: string;
  email: string; // Add this line
}
export async function updateAdress(addressId: string, address: AddressData) {
  try {
    await writeClient
      .patch(addressId)
      .set({ ...address })
      .commit();
  } catch (error) {
    console.log(error);
  }
}
export async function addAddress(
  userId: string,
  type: "Billing Address" | "Shipping Address",
  address: AddressData
): Promise<{ success: boolean; error?: string }> {
  try {
    if (!userId || !type || !address) {
      throw new Error("Missing required parameters");
    }

    const result = await writeClient.create({
      _type: "address",
      type,
      name: address.name,
      Company_Name: address.Company_Name,
      Address: address.Address,
      country: address.country,
      states: address.states,
      city: address.city,
      zipcode: address.zipcode,
      phonenumber: address.phonenumber,
      email: address.email,
      author: {
        _ref: userId,
        _type: "reference",
      },
    });

    if (!result) {
      throw new Error("Failed to create address");
    }

    return { success: true };
  } catch (error) {
    console.error("Error adding address:", error);
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "An unknown error occurred",
    };
  }
}
export async function addCardAction(
  userId: string,
  cardname: string,
  cardNumber: string,
  expireDate: string,
  CVC: string
): Promise<{ success: boolean; error?: string }> {
  try {
    const result = await writeClient.create({
      _type: "card",
      name: cardname,
      number: cardNumber,
      expiry: expireDate,
      cvc: CVC,
      author: {
        _ref: userId,
        _type: "reference",
      },
    });
    console.log(result);

    if (!result) {
      throw new Error("Failed to create card");
    }

    return { success: true };
  } catch (error) {
    console.error("Error adding card:", error);
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "An unknown error occurred",
    };
  }
}
