const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoute = require("./routes/user");
const mentorRoute = require("./routes/mentor");
const mentoriaRoute = require("./routes/mentoria");
const mentorizadoRoute = require("./routes/mentorizado");
const carreraRoute = require("./routes/carrera");

// settings
const app = express();
const port = process.env.PORT || 9000;

// middlewares
app.use(express.json());
app.use("/api", userRoute);
app.use("/api",mentorRoute);
app.use("/api",mentoriaRoute);
app.use("/api",mentorizadoRoute);
app.use("/api",carreraRoute);

// routes
app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

// mongodb connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.error(error));

// server listening
app.listen(port, () => console.log("Server listening to", port));
