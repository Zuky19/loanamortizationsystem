//import { sha256 } from "js-sha256";
//const userRoutes = require("./routes/userRoutes");
import express, { json } from "express";
const app = express();
const port = 4000;
import { connect } from "mongoose";
import memberRoutes from "./routes/MemberRoutes.js";
import cors from "cors";

app.use(json());

app.use("/api/members", memberRoutes);

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

//app.use("/api/user", userRoutes);

connect(
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
