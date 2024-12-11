import express, { json } from "express";
import { connect } from "mongoose";
import memberRoutes from "./routes/MemberRoutes.js";
import cors from "cors";
import loanRoutes from "./routes/loanRoutes.js";
import contributionRoutes from "./routes/contributionsRoutes.js";
import interestRoutes from "./routes/interestRoutes.js";
import monthlyParameterRoutes from "./routes/monthlyParameterRoutes.js";
import crossModelRoutes from "./routes/crossModelRoutes.js";
import loanRepaymentRoutes from "./routes/loanRepaymentRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import dotenv from "dotenv";

const app = express();
const port = 4000;

app.use(cors());
app.use(json());

app.use("/api/members", memberRoutes);
app.use("/api/loans", loanRoutes);
app.use("/api/contributions", contributionRoutes);
app.use("/api/interest", interestRoutes);
app.use("/api/parameters", monthlyParameterRoutes);
app.use("/api/cross", crossModelRoutes);
app.use("/api/repayments", loanRepaymentRoutes);
app.use("/api/auth", authRoutes);
dotenv.config({});
console.log("JWT_SECRET:", process.env.JWT_SECRET);

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
