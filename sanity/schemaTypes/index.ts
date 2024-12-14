import { type SchemaTypeDefinition } from "sanity";
import { user } from "./user";
import { address } from "./address";
import { card } from "./card";
import { Product } from "./product";
import { category } from "./catagory";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [user, address, card, Product, category],
};
