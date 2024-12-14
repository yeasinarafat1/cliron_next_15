"use server";

import { writeClient } from "@/sanity/lib/write-client";
import { SanityImageAssetDocument } from "next-sanity";
import fs from "fs";
import { client } from "@/sanity/lib/client";

export const updateUser = async (
  id: string,
  name: string,
  secendery_email: string,
  phonenumber: string,
  country: string,
  imageUrl?: string
) => {
  try {
    await writeClient
      .patch(id)
      .set({ name, secendery_email, phonenumber, country, image: imageUrl })
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
export const deleteCardById = async (cardId: string) => {
  try {
    await writeClient.delete(cardId);
  } catch (error) {
    console.log(error);
  }
};
export async function uploadImage(file: File) {
  // Validate file
  if (!file) {
    throw new Error("No file provided");
  }

  // Optional: Add file size and type validation
  const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
  const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/gif"];

  if (file.size > MAX_FILE_SIZE) {
    throw new Error("File is too large. Maximum size is 5MB");
  }

  if (!ALLOWED_TYPES.includes(file.type)) {
    throw new Error("Invalid file type. Only JPEG, PNG, and GIF are allowed");
  }

  console.log("File details:", {
    name: file.name,
    type: file.type,
    size: file.size,
  });

  if (!process.env.SANITY_API_TOKEN) {
    throw new Error("Sanity API token is not configured");
  }

  try {
    // Convert the file to a buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Upload the image buffer to Sanity
    const result = await writeClient.assets.upload("image", buffer, {
      filename: file.name,
      contentType: file.type,
    });

    return result.url;
  } catch (error) {
    console.error("Error uploading image:", error);

    // More specific error handling
    if (error instanceof Error) {
      throw new Error(`Failed to upload image: ${error.message}`);
    }

    throw new Error("Failed to upload image due to an unknown error");
  }
}
