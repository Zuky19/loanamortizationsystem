import router from "./routes/userRoutes.js";
import express from "express";
import cors from "cors";

const app = express();
const port = 4000;

app.use(express.json());

app.use(cors());

app.get("/", (req, res) => [res.send("Hello World")]);

app.use("/api/user", router);

app.listen(port, () => {
  console.log(`port is listening on port: ${port}`);
});
