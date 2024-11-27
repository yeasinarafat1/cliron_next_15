"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Image from "next/image";
import { useRef, useState } from "react";
import { BsCameraFill } from "react-icons/bs";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SelectItem } from "@/components/ui/select";
import CustomFormFeield from "@/components/Shared/CustomFormFeield";

// Assuming these are imported from somewhere
import { countries } from "@/constant";
import { User } from "@/sanity/types";

import { updateUser } from "@/lib/action";

const formSchema = z.object({
  fullname: z.string().min(5, {
    message: "Username must be at least 5 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  secenderyemail: z.string().email({
    message: "Please enter a valid secondary email address.",
  }),
  phonenumber: z.string().min(10, {
    message: "Phone number must be at least 10 characters.",
  }),
  country: z.string().min(2, {
    message: "Please select a country.",
  }),
});

export default function AccountDetailsForm({
  user = {},
}: {
  user?: Partial<User>;
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: user?.name || "",
      email: user?.email || "",
      secenderyemail: user?.secendery_email || "",
      phonenumber: user?.phonenumber || "",
      country: user?.country || "",
    },
  });

  const [profilePic, setProfilePic] = useState<string>(
    user?.image || "/asset/DemoPic/profile.jpg"
  );
  const [loading, setloading] = useState(false);
  const profileInputRef = useRef<HTMLInputElement>(null);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { email, fullname, country, phonenumber, secenderyemail } = values;
    const id = user?._id || "";
    setloading(true);
    await updateUser(id, fullname, secenderyemail, phonenumber, country);
    setloading(false);
    // Here you would typically send the form data to your backend
    alert("Form submitted successfully!");
  }

  const handleProfilePicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="py-5 w-full md:container flex flex-col md:flex-row items-center gap-4"
      >
        <div className="relative size-[180px] rounded-full overflow-hidden cursor-pointer">
          <Input
            ref={profileInputRef}
            onChange={handleProfilePicChange}
            type="file"
            className="hidden"
            accept="image/*"
          />
          <div
            onClick={() => profileInputRef.current?.click()}
            className="flex-center absolute z-10 size-full bg-black opacity-0 hover:opacity-50"
          >
            <BsCameraFill className="text-white size-10" />
          </div>
          <Image
            src={profilePic}
            height={180}
            width={180}
            alt="profile"
            className="object-cover"
          />
        </div>
        <div className="flex-1 flex flex-col gap-2 px-2">
          <div className="w-full flex flex-col md:flex-row gap-2">
            <CustomFormFeield
              control={form.control}
              type="text"
              label="Full Name"
              name="fullname"
              placeholder="Full Name"
            />
            <CustomFormFeield
              control={form.control}
              type="email"
              label="Email"
              name="email"
              placeholder="Email"
              disabled
            />
          </div>
          <div className="w-full flex flex-col lg:flex-row gap-2">
            <CustomFormFeield
              control={form.control}
              type="email"
              label="Secondary Email"
              name="secenderyemail"
              placeholder="Secondary Email"
            />
            <CustomFormFeield
              control={form.control}
              type="phoneNumber"
              label="Phone Number"
              name="phonenumber"
              placeholder="+8801*******48"
            />
          </div>
          <div className="w-full flex flex-col md:flex gap-2">
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
          </div>
          <div>
            <Button
              type="submit"
              className="bg-secondary hover:bg-orange-500 px-5 py-2 flex-center gap-2"
              disabled={loading}
            >
              {loading ? "saving" : "Save Changes"}
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}
