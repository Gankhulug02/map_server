const mongoose = require("mongoose");

const NeightborhoodSchema = new mongoose.Schema(
  {
    name: String,
    geometry: {
      type: {
        type: String,
        default: "Polygon",
      },
      coordinates: [[[Number]]],
    },
  },
  {
    collection: "neighborhoods",
  }
);

const Neighborhood = mongoose.model(
  "Neighborhood",
  NeightborhoodSchema,
  "neighborhoods"
);

Neighborhood.collection.createIndex({
  geometry: "2dsphere",
});

module.exports = Neighborhood;
