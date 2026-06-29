import { JWTPaylod } from "@/types/user.types";
import jwt from "jsonwebtoken";

export function generateToken(paylode: JWTPaylod): string {
  return jwt.sign(paylode, process.env.JWT_TOKNE!, {
    expiresIn: "1h",
  });
}

export const verifyToken = (tokne: string) => {
  return jwt.verify(tokne, process.env.JWT_TOKEN!);
};
