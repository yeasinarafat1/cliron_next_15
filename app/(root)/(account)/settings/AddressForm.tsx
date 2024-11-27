"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState, useCallback } from "react";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustomFormFeield from "@/components/Shared/CustomFormFeield";
import { Address, User } from "@/sanity/types";
import { SelectItem } from "@/components/ui/select";
import Image from "next/image";
import { addAddress, updateAdress } from "@/lib/action";
import { countries } from "@/constant";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  fullname: z.string().min(5, {
    message: "Full name must be at least 5 characters.",
  }),
  companyname: z.string().optional(),
  address: z.string().min(6, {
    message: "Address must be at least 6 characters.",
  }),
  country: z.string().min(2, {
    message: "Country must be at least 2 characters.",
  }),
  states: z.string().min(2, {
    message: "State must be at least 2 characters.",
  }),
  city: z.string().min(2, {
    message: "City must be at least 2 characters.",
  }),
  zipcode: z.string().min(4, {
    message: "Zip code must be at least 4 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phonenumber: z.string().min(10, {
    message: "Phone Number must be at least 10 characters.",
  }),
});

interface Props {
  type: "Billing Address" | "Shipping Address";
  user: User;
  address: Address | null;
}

export default function AddressForm({ type, user, address }: Props) {
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: address?.name || "",
      companyname: address?.Company_Name || "",
      address: address?.Address || "",
      country: address?.country || "",
      states: address?.states || "",
      city: address?.city || "",
      zipcode: address?.zipcode || "",
      email: address?.email || "",
      phonenumber: address?.phonenumber || "",
    },
  });

  const onSubmit = useCallback(
    async (values: z.infer<typeof formSchema>) => {
      console.log("onSubmit function called", { values, address });
      setLoading(true);
      setSuccessMessage(null);
      try {
        const addressData = {
          name: values.fullname,
          Company_Name: values.companyname || "",
          Address: values.address,
          country: values.country,
          states: values.states,
          city: values.city,
          zipcode: values.zipcode,
          phonenumber: values.phonenumber,
          email: values.email,
        };

        if (address && address._id) {
          await updateAdress(address._id, addressData);
          setSuccessMessage("Address updated successfully!");
          toast({
            title: "Success",
            description: "Your address has been successfully updated.",
          });
        } else {
          await addAddress(user._id, type, addressData);
          setSuccessMessage("New address added successfully!");
          toast({
            title: "Success",
            description: "Your new address has been successfully added.",
          });
        }
        console.log("Address operation completed successfully");
      } catch (error) {
        console.error("Error in address operation:", error);
        toast({
          title: "Error",
          description:
            "There was an error processing your request. Please try again.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    },
    [address, type, user._id]
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log("Form submitted");
      try {
        await form.handleSubmit(onSubmit)(e);
      } catch (error) {
        console.error("Error in form submission:", error);
      }
    },
    [form, onSubmit]
  );

  return (
    <div className="w-full border border-gray-100 rounded">
      <div className="text-gray-900 font-medium px-3 w-full h-[52px] border-b border-gray-100 flex items-center">
        {type}
      </div>
      {successMessage && (
        <div
          className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <span className="block sm:inline">{successMessage}</span>
        </div>
      )}
      <Form {...form}>
        <form
          onSubmit={handleSubmit}
          className="py-4 w-full px-3 flex flex-col gap-3"
        >
          <CustomFormFeield
            label="Full Name"
            control={form.control}
            placeholder="Full Name"
            name="fullname"
            type="text"
          />
          <CustomFormFeield
            label="Company Name (optional)"
            control={form.control}
            placeholder="Company Name"
            name="companyname"
            type="text"
          />
          <CustomFormFeield
            label="Address"
            control={form.control}
            placeholder="Road No. 13/x, House no. 1320/C, Flat No. 5D"
            name="address"
            type="text"
          />
          <CustomFormFeield
            type="select"
            control={form.control}
            name="country"
            label="Country"
            placeholder="Select a country"
          >
            {countries?.map((country, i) => (
              <SelectItem key={country?.name + i} value={country.name}>
                <div className="flex cursor-pointer items-center gap-2">
                  <Image
                    src={country?.flag}
                    width={42}
                    height={42}
                    alt={country.name}
                    className="border border-dark-500"
                  />
                  <p>{country.name}</p>
                </div>
              </SelectItem>
            ))}
          </CustomFormFeield>
          <CustomFormFeield
            label="State/Province"
            control={form.control}
            placeholder="Enter state or province"
            name="states"
            type="text"
          />
          <div className="w-full flex items-center gap-1">
            <CustomFormFeield
              label="City"
              control={form.control}
              placeholder="Example: Dhaka"
              name="city"
              type="text"
            />
            <CustomFormFeield
              label="Zip Code"
              control={form.control}
              placeholder="Zip Code"
              name="zipcode"
              type="text"
            />
          </div>
          <CustomFormFeield
            label="Email"
            control={form.control}
            placeholder="example@gmail.com"
            name="email"
            type="email"
          />
          <CustomFormFeield
            label="Phone Number"
            control={form.control}
            placeholder="+8801900000000"
            name="phonenumber"
            type="phoneNumber"
          />
          <Button
            disabled={loading}
            type="submit"
            className="bg-secondary hover:bg-orange-500 w-32 px-5 py-2 flex-center gap-2"
          >
            {loading ? "Saving..." : "Save Changes"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
