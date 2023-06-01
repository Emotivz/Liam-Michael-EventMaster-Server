//importing dependencies
require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;
const eventRoutes = require("./routes/eventRoutes.js");
const cors = require("cors");

app.use(cors());
// app.use(express.json);

app.use("/events", eventRoutes);

app.listen(PORT, () => {
  console.log(`Server had started on port ${PORT}`);
});
