import { defineType, ValidationContext } from "sanity";

export const productHooks = {
  async beforeCreate(params: any) {
    return computeRatings(params);
  },
  async beforeUpdate(params: any) {
    return computeRatings(params);
  },
};

function computeRatings(params: any) {
  const { document } = params;
  const ratings = document.ratings || [];

  // Calculate average rating
  const sum = ratings.reduce(
    (acc: number, curr: any) => acc + (curr.rating || 0),
    0
  );
  const averageRating = ratings.length
    ? Number((sum / ratings.length).toFixed(1))
    : 0;

  // Set the computed fields
  return {
    ...document,
    averageRating,
    numberOfReviews: ratings.length,
  };
}
