import { defineField, defineType } from "sanity";
import { FolderTree } from "lucide-react";

export const category = defineType({
  name: "category",
  title: "Category",
  type: "document",
  icon: FolderTree,
  fields: [
    defineField({
      name: "name",
      title: "Category Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "parent",
      title: "Parent Category",
      type: "reference",
      to: [{ type: "category" }],
    }),
    defineField({
      name: "image",
      title: "Category Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
    defineField({
      name: "featuredOrder",
      title: "Featured Order",
      type: "number",
      description:
        "Order in which this category appears if featured (lower numbers appear first)",
    }),
    defineField({
      name: "isFeatured",
      title: "Featured Category",
      type: "boolean",
      description: "Set to true if this is a featured category",
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "parent.name",
      media: "image",
    },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle: subtitle ? `Parent: ${subtitle}` : "Top-level Category",
        media,
      };
    },
  },
});
