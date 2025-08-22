import jwt from "jsonwebtoken";

export const getUserIdFromToken = (token) => {
  if (!token) throw new Error("No token provided");

  const actualToken = token.startsWith("Bearer ") ? token.split(" ")[1] : token;

  const decoded = jwt.verify(actualToken, process.env.JWT_SECRET);

  return decoded.id;
};
