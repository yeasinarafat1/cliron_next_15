import { type SchemaTypeDefinition } from "sanity";
import { user } from "./user";
import { address } from "./address";
import { card } from "./card";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [user, address, card],
};
