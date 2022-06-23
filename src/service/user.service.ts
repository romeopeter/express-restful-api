import { DocumentDefinition } from "mongoose";
import UserModel, {userDocument} from "../models/user.model";

export async function  createUser( input: DocumentDefinition<userDocument>) {
    try {
       return await UserModel.create(input);
    } catch (e: any) {
        throw new Error(e)
    }
} 