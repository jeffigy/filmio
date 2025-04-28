import { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } from "@/config/env.config";
import { DecodedToken } from "@/types/auth.type";
import createError from "http-errors";
import { sign, verify } from "jsonwebtoken";

export const generateAccessToken = (payload: any) => {
  return sign({ userInfo: payload }, ACCESS_TOKEN_SECRET, { expiresIn: "15m" });
};

export const generateRefreshToken = (payload: any) => {
  return sign({ userInfo: payload }, REFRESH_TOKEN_SECRET, { expiresIn: "7d" });
};

export const verifyRefreshToken = async (payload: string) => {
  const decoded = await new Promise<DecodedToken>((resolve, reject) => {
    verify(payload, REFRESH_TOKEN_SECRET, (error, decoded) => {
      if (error || !decoded) {
        return reject(createError(401, "Unauthorized"));
      }

      resolve(decoded as DecodedToken);
    });
  });
  return decoded;
};

export const verifyAccessToken = (payload: string) => {
  try {
    const decoded = verify(payload, ACCESS_TOKEN_SECRET) as DecodedToken;

    return decoded;
  } catch (error) {
    throw createError(403, "Forbidden");
  }
};
