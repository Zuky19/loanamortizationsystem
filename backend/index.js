import { sha256 } from "js-sha256";
const userRoutes = require("./routes/userRoutes");
const express = require("express");
const app = express();
const port = 4000;

async function hashPassword(message) {
  var hashedPassword = sha256(message);
  return hashPassword;
}

app.use(express.json());

app.get("/", (req, res) => [res.send("Hello World")]);

app.use("/api/user", userRoutes);

app.listen(port, () => {
  console.log(`port is listening on port: ${port}`);
});
