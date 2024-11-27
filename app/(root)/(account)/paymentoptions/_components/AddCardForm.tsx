"use client";
import React, { Dispatch, SetStateAction } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustomFormFeield from "@/components/Shared/CustomFormFeield";

import { addCardAction } from "@/lib/action";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  cardNumber: z.string().regex(/^[0-9]{16}$/, "Card number must be 16 digits"),
  expireDate: z
    .string()
    .regex(
      /^(0[1-9]|1[0-2])\/[0-9]{2}$/,
      "Expiration date must be in MM/YY format"
    )
    .refine((val) => {
      const [month, year] = val.split("/");
      const expDate = new Date(parseInt(`20${year}`), parseInt(month) - 1);
      return expDate > new Date();
    }, "Card has expired"),
  CVC: z.string().regex(/^[0-9]{3,4}$/, "CVV must be 3 or 4 digits"),
  cardname: z
    .string()
    .min(2, "cardname name must be at least 2 characters")
    .max(50, "cardname name must not exceed 50 characters"),
});

const AddCardForm = ({
  session,
  setOpen,
}: {
  session: any;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cardname: "",
      cardNumber: "",
      expireDate: "",
      CVC: "",
    },
  });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const { cardname, cardNumber, expireDate, CVC } = values;
    console.log(values);

    setLoading(true);

    try {
      const result = await addCardAction(
        session._id,
        cardname,
        cardNumber,
        expireDate,
        CVC
      );

      if (!result.success || result.error) {
        throw new Error(result.error || "Failed to add card");
      }
      toast({
        title: "Success",
        description: "Card added successfully",
      });
      setOpen(false);
    } catch (error) {
      console.log(error);
      toast({
        title: "Error",
        description: "Failed to add card",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <CustomFormFeield
          control={form.control}
          label="Name of the card"
          name="cardname"
          placeholder="Card Name"
        />
        <CustomFormFeield
          type="text"
          control={form.control}
          label="Card Number"
          name="cardNumber"
          placeholder="Card Number"
        />
        <div className="w-full flex flex-col md:flex-row gap-2">
          <CustomFormFeield
            type="text"
            control={form.control}
            label="Expire Date"
            name="expireDate"
            placeholder="example 2027"
          />
          <CustomFormFeield
            type="text"
            control={form.control}
            label="CVC"
            name="CVC"
            placeholder="207"
          />
        </div>

        <Button
          type="submit"
          className="bg-secondary rounded-md px-5 hover:bg-orange-400 w-full py-4"
        >
          {loading ? "Adding..." : "Add Card"}
        </Button>
      </form>
    </Form>
  );
};
export default AddCardForm;
