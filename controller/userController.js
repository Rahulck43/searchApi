import userModel from "../model/userSchema.js";

export const getSearch = async (req, res) => {
  try {
    const prefix = req.query.prefix || "";
    const page = parseInt(req.query.page) || 1;
    const limit = 2;
    const skip = (page - 1) * limit;
    let sortOrder = 1;
    if (req.query.sortOrder) {
      sortOrder = parseInt(req.query.sortOrder) || 1;
    }
    const matchingData = await userModel
      .find({ name: { $regex: `^${prefix}`, $options: "i" } })
      .maxTimeMS(30000)
      .sort({ age: sortOrder })
      .skip(skip)
      .limit(limit);

      if (matchingData.length === 0 && page > 1) {
        return res.status(204).json({
          success: true,
          message: "No data for requested page",
        });
      }

    res.status(200).json({
      success: true,
      data: matchingData,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      success: false,
      error: "Internal Server Error",
    });
  }
};
