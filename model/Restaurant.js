const { Schema, model } = require("mongoose");

const ReastaurantsSchema = new Schema({
  name: String,
  location: {
    type: {
      type: String,
      default: "Point",
    },
    coordinates: [Number],
  },
});

const restaurant = model("Restaurant", ReastaurantsSchema);

restaurant.collection.createIndex({ location: "2dsphere" });

module.exports = restaurant;
