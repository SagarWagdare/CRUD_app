const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
app.use(express.json());
dotenv.config();
app.use(cors());
const routes = require("./routes/routes");
mongoose
  .connect(process.env.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected Successfully");

    app.listen(process.env.PORT || 5000, () => {
      console.log(`Running successfully at ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("Catch", error);
  });

// app.use("/api",routes);
 app.use("/api",routes);
