import express from "express";
import {
  updateMonthlyParameter,
  getCurrentParameters,
} from "../controller/monthlyParameterController.js";

const router = express.Router();

// Update Monthly Parameter
router.put("/", updateMonthlyParameter);

// Get Current Parameters
router.get("/", getCurrentParameters);

export default router;
