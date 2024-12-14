import { defineField, defineType } from "sanity";
import { Star } from "lucide-react";
import { productHooks } from "../documentActions/productHooks";
export const Product = defineType({
  name: "product",
  title: "Product",
  type: "document",
  icon: Star,
  fields: [
    defineField({
      name: "name",
      title: "Product Name",
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
      name: "image",
      title: "Product Image",
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
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "ratings",
      title: "Ratings",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "rating",
              type: "number",
              validation: (Rule) => Rule.required().min(1).max(5),
            },
            {
              name: "reviewerId",
              type: "reference",
              to: [{ type: "user" }],
            },
          ],
        },
      ],
      options: {
        updateParent: true,
      },
    }),
    defineField({
      name: "averageRating",
      title: "Average Rating",
      type: "number",
      readOnly: true,
      initialValue: 0,
    }),
    defineField({
      name: "numberOfReviews",
      title: "Number of Reviews",
      type: "number",
      readOnly: true,
      initialValue: 0,
    }),
    defineField({
      name: "isFeatured",
      title: "Featured Product",
      type: "boolean",
      description: "Set to true if this is a featured best product",
    }),
    defineField({
      name: "stockQuantity",
      title: "Stock Quantity",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    }),
    defineField({
      name: "salePrice",
      title: "Sale Price",
      type: "number",
      description: "Set this if the product is on sale",
    }),
    defineField({
      name: "bestSellerRank",
      title: "Best Seller Rank",
      type: "number",
      description: "Rank of the product in best sellers list (if applicable)",
    }),
  ],
  preview: {
    select: {
      title: "name",
      ratings: "ratings",
    },
    prepare(selection) {
      const { title, ratings } = selection;
      const len = ratings?.length ?? 0;
      const sum =
        ratings?.reduce((acc, { rating }) => acc + (rating ?? 0), 0) ?? 0;
      const avg = len > 0 ? (sum / len).toFixed(1) : "N/A";
      return {
        title: title,
        subtitle: `Average Rating: ${avg} (${len} reviews)`,
      };
    },
  },
  hooks: productHooks,
});
