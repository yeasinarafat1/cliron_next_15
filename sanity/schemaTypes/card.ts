import { defineField, defineType } from "sanity";
import { CreditCard, UserIcon } from "lucide-react";

export const card = defineType({
  name: "card",
  title: "Card",
  type: "document",
  icon: CreditCard,
  fields: [
    defineField({
      name: "author",
      type: "reference",
      to: [{ type: "user" }],
    }),
    defineField({
      name: "name",
      type: "string",
    }),
    defineField({
      name: "number",
      type: "string",
    }),
    defineField({
      name: "expiry",
      type: "string",
    }),
    defineField({
      name: "cvc",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "name",
    },
  },
});
