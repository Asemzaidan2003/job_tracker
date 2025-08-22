import Company from "../model/company.model.js";
import { getUserIdFromToken } from "../utils/getUserIdFromToken.js";

// Get all companies for the current user
export function getAllCompanies(req, res) {
  try {
    const token = req.headers.authorization;
    const userId = getUserIdFromToken(token);

    Company.find({ user: userId })
      .then((companies) => res.status(200).json(companies))
      .catch((err) =>
        res
          .status(500)
          .json({ message: "Error fetching companies", error: err.message })
      );
  } catch (err) {
    res.status(401).json({ message: "Unauthorized", error: err.message });
  }
}

// Create a company for the current user
export async function createCompany(req, res) {
  try {
    const token = req.headers.authorization;
    if (!token)
      return res
        .status(401)
        .json({ message: "Unauthorized: No token provided" });

    const userId = getUserIdFromToken(token);

    const existingCompany = await Company.findOne({
      company_name: req.body.company_name,
      user: userId,
    });
    if (existingCompany) {
      return res
        .status(400)
        .json({ message: "This company already exists for this user." });
    }

    const newCompany = new Company({ ...req.body, user: userId });
    await newCompany.save();

    res.status(201).json({ status: "success", company: newCompany });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "Error creating company", error: err.message });
  }
}

// Update a company (only if it belongs to the current user)
export function updateCompany(req, res) {
  try {
    const token = req.headers.authorization;
    const userId = getUserIdFromToken(token);
    const { id } = req.params;

    Company.findOneAndUpdate({ _id: id, user: userId }, req.body, { new: true })
      .then((company) => {
        if (!company) {
          return res.status(404).json({ message: "Company not found" });
        }
        res.status(200).json(company);
      })
      .catch((err) =>
        res
          .status(500)
          .json({ message: "Error updating company", error: err.message })
      );
  } catch (err) {
    res.status(401).json({ message: "Unauthorized", error: err.message });
  }
}

// Delete a company (only if it belongs to the current user)
export function deleteCompany(req, res) {
  try {
    const token = req.headers.authorization;
    const userId = getUserIdFromToken(token);
    const { id } = req.params;

    Company.findOneAndDelete({ _id: id, user: userId })
      .then((company) => {
        if (!company) {
          return res.status(404).json({ message: "Company not found" });
        }
        res.status(200).json({ message: "Company deleted successfully" });
      })
      .catch((err) =>
        res
          .status(500)
          .json({ message: "Error deleting company", error: err.message })
      );
  } catch (err) {
    res.status(401).json({ message: "Unauthorized", error: err.message });
  }
}

// Get a single company (only if it belongs to the current user)
export function getCompany(req, res) {
  try {
    const token = req.headers.authorization;
    const userId = getUserIdFromToken(token);
    const { id } = req.params;

    Company.findOne({ _id: id, user: userId })
      .then((company) => {
        if (!company) {
          return res.status(404).json({ message: "Company not found" });
        }
        res.status(200).json(company);
      })
      .catch((err) =>
        res
          .status(500)
          .json({ message: "Error fetching company", error: err.message })
      );
  } catch (err) {
    res.status(401).json({ message: "Unauthorized", error: err.message });
  }
}
