import Company from "../model/company.model.js";
import { getUserIdFromToken } from "../utils/getUserIdFromToken.js";

export function getAllUserApplicationsCount(req, res) {
  try {
    const token = req.headers.authorization;
    const userId = getUserIdFromToken(token);

    Company.countDocuments({ user: userId, status: { $ne: "Not Applied" } })
      .then((count) => res.status(200).json({ totalApplications: count }))
      .catch((err) =>
        res
          .status(500)
          .json({ message: "Error fetching applications", error: err.message })
      );
  } catch (err) {
    res.status(401).json({ message: "Unauthorized", error: err.message });
  }
}

export function getAllUserRejectedApplicationsCount(req, res) {
  try {
    const token = req.headers.authorization;
    const userId = getUserIdFromToken(token);

    Company.countDocuments({ user: userId, status: "Rejected" })
      .then((count) =>
        res.status(200).json({ totalRejectedApplications: count })
      )
      .catch((err) =>
        res
          .status(500)
          .json({ message: "Error fetching applications", error: err.message })
      );
  } catch (err) {
    res.status(401).json({ message: "Unauthorized", error: err.message });
  }
}

export function getAllUserNoResponseApplicationsCount(req, res) {
  try {
    const token = req.headers.authorization;
    const userId = getUserIdFromToken(token);

    Company.countDocuments({ user: userId, status: "No Response" })
      .then((count) =>
        res.status(200).json({ totalNoResponseApplications: count })
      )
      .catch((err) =>
        res
          .status(500)
          .json({ message: "Error fetching applications", error: err.message })
      );
  } catch (err) {
    res.status(401).json({ message: "Unauthorized", error: err.message });
  }
}

export async function getAllUserSuccessRate(req, res) {
  try {
    const token = req.headers.authorization;
    const userId = getUserIdFromToken(token);

    const totalApplications = await Company.countDocuments({
      user: userId,
      status: { $ne: "Not Applied" },
    });
    const successStatus = ["Offer", "Interview"];
    const totalSuccess = await Company.countDocuments({
      user: userId,
      status: { $in: successStatus },
    });

    const successRate =
      totalApplications === 0
        ? 0
        : ((totalSuccess / totalApplications) * 100).toFixed(2);

    res.status(200).json({
      successRate: Number(successRate),
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error calculating success rate", error: err.message });
  }
}
