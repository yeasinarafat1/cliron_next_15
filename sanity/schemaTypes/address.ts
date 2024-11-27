import { defineField, defineType } from "sanity";
import { UserIcon } from "lucide-react";

export const address = defineType({
  name: "address",
  title: "Address",
  type: "document",
  fields: [
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "name",
      },
    }),
    defineField({
      name: "type",
      type: "string",
      options: {
        list: [
          { title: "Billing Address", value: "Billing Address" },
          { title: "Shipping Address", value: "Shipping Address" },
        ],
      },
    }),

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
      name: "Company_Name",
      type: "string",
    }),
    defineField({
      name: "Address",
      type: "string",
    }),
    defineField({
      name: "phonenumber",
      type: "string",
    }),
    defineField({
      name: "country",
      type: "string",
    }),
    defineField({
      name: "email",
      type: "string",
    }),
    defineField({
      name: "states",
      type: "string",
    }),
    defineField({
      name: "city",
      type: "string",
    }),
    defineField({
      name: "zipcode",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "name",
    },
  },
});
