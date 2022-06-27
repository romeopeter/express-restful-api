import mongoose from "mongoose";
import bcrypt from "bcrypt";
import config from "config";
import { userDocument } from "./user.model";

export interface SessionDocument extends mongoose.Document {
    user: userDocument["_id"]
    valid: boolean,
    userAgent: string,
    createdAt: string,
    updatedAt: string,
}

const sessionSchema = new mongoose.Schema({
    email: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
    name: {type: String, required: true},
    userAgent: {type: String},
    password: {type: String, required: true}
},{timestamps: true})

// User model
const SessionModel = mongoose.model<SessionDocument>("Session", sessionSchema);

export default SessionModel;