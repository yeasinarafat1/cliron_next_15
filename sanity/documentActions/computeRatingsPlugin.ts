import { definePlugin } from "sanity";

interface Rating {
  rating: number;
}

interface Document {
  _id: string;
  _type: string;
  ratings?: Rating[];
}

export const computeRatingsPlugin = definePlugin({
  name: "compute-ratings",
  document: {
    // Extend the default document actions
    extend: (S, { documentStore }) => {
      documentStore
        .listenQuery('*[_type == "bestProduct"]')
        .subscribe(async (products) => {
          products.forEach((doc: Document) => {
            if (doc._type === "bestProduct") {
              const ratings = doc.ratings || [];
              const numberOfReviews = ratings.length;
              const averageRating =
                numberOfReviews > 0
                  ? Number(
                      (
                        ratings.reduce((sum, r) => sum + (r.rating || 0), 0) /
                        numberOfReviews
                      ).toFixed(1)
                    )
                  : 0;

              // Create a patch to update the computed fields
              const patch = {
                id: doc._id,
                patch: {
                  set: {
                    averageRating,
                    numberOfReviews,
                  },
                },
              };

              // Apply the patch
              S.patch(patch.id, patch.patch);
            }
          });
        });

      return S;
    },
  },
});
