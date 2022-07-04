import { omit } from "lodash";
import { DocumentDefinition } from "mongoose";
import UserModel, { userDocument } from "../models/user.model";

export async function createUser(
  input: DocumentDefinition<
    Omit<userDocument, "createdAt" | "updatedAt" | "comparePassword">
  >
) {
  try {
    return await UserModel.create(input);
  } catch (e: any) {
    throw new Error(e);
  }
}

export async function validatePassword(email: string, password: string) {
  const user = await UserModel.findOne({ email });

  if (!user) return false;

  // compare password
  const passwordIsValid = await user.comparePassword(password);

  if (!passwordIsValid) return false;

  return omit(user, "password");
}
