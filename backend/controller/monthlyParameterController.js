import MonthlyParameter from "../models/Montly_parameters_Model.js";

// Update Monthly Parameter
export const updateMonthlyParameter = async (req, res) => {
  try {
    const {
      month_id,
      month,
      year,
      total_contributions,
      total_disbursements,
      outstanding_balance,
      interest_collected,
    } = req.body;

    // Validate required fields
    if (!month_id || !month || !year) {
      return res
        .status(400)
        .json({ message: "month_id, month, and year are required." });
    }

    const updatedParameter = await MonthlyParameter.findOneAndUpdate(
      { month_id }, // Match by month_id
      {
        month,
        year,
        total_contributions: total_contributions || 0,
        total_disbursements: total_disbursements || 0,
        outstanding_balance: outstanding_balance || 0,
        interest_collected: interest_collected || 0,
      },
      { new: true, upsert: true } // Create if not found, return updated document
    );

    res.status(200).json(updatedParameter);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Current Parameters
export const getCurrentParameters = async (req, res) => {
  try {
    const currentParameters = await MonthlyParameter.findOne().sort({
      year: -1,
      month: -1,
    });

    if (!currentParameters) {
      return res.status(404).json({ message: "No monthly parameters found." });
    }

    res.status(200).json(currentParameters);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
