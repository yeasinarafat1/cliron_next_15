import { defineField, defineType } from "sanity";
import { UserIcon } from "lucide-react";

export const user = defineType({
  name: "user",
  title: "User",
  type: "document",
  icon: UserIcon,
  fields: [
    defineField({
      name: "id",
      type: "string",
    }),
    defineField({
      name: "name",
      type: "string",
    }),

    defineField({
      name: "email",
      type: "string",
    }),

    defineField({
      name: "secendery_email",
      type: "string",
    }),
    defineField({
      name: "image",
      type: "url",
    }),
    defineField({
      name: "phonenumber",
      type: "string",
    }),
    defineField({
      name: "country",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "name",
    },
  },
});
