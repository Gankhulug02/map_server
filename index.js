const express = require("express");
const connectDb = require("./config/db");
const cors = require("cors");
const Neighborhood = require("./model/Neightborhood");
const restaurantRoutes = require("./routes/resaurantRoutes");
const app = express();
const port = 8010;

const MONGO_URI =
  "mongodb+srv://Azure_ganaa:Pass123@azure0.9slbjew.mongodb.net/azure?retryWrites=true&w=majority";

app.get("/api", (req, res) =>
  res.send(`<h1 style="color:blue  ">Hello World!</h1>`)
);

app.use(cors());
app.use(express.json());
app.use("/restaurants", restaurantRoutes);

connectDb(MONGO_URI);

app.listen(port, () => console.log(`Express app running on port ${port}!`));
