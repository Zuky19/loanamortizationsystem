const express = require("express");
const mongoose = require("mongoose");
const memberRoutes = require("./routes/MemberRoutes");
//const router = require("./routes/userRoutes");

const app = express();
const port = 4000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/members", memberRoutes);

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
