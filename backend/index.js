//import { sha256 } from "js-sha256";
//const userRoutes = require("./routes/userRoutes");
const express = require("express");
const app = express();
const port = 4000;
const mongoose = require("mongoose");
const memberRoutes = require("./routes/MemberRoutes");

app.use(express.json());

app.use("/api/members", memberRoutes);

//app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

//app.use("/api/user", userRoutes);

mongoose
  .connect(
    "mongodb+srv://ilyasalabi05:MYOQV40kaWk6gc6P@loanamortizationsystem.ex1qu.mongodb.net/CSC_405_Backend?retryWrites=true&w=majority&appName=loanamortizationsystem"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Database connection failed!", err.message);
  });
