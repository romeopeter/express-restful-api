import mongoose from "mongoose";
import bcrypt from "bcrypt";
import config from "config";


export interface userDocument extends mongoose.Document {
    email: string, 
    name: string,
    password: string,
    createdAt: string,
    updatedAt: string,
    comparePassword(candidatePassword: string): Promise<boolean>
}

/* Mongoose used to define this before mongoose 6. 
For backward's compatibility, I found it could be defined outside moongoose. */
export interface HookNextFunction {
    (error?: Error): any
}

const userSchema = new mongoose.Schema({
    email: {type: String, required: true, unique: true},
    name: {type: String, required: true},
    password: {type: String, required: true}
},{timestamps: true})

userSchema.pre("save", async function (next: HookNextFunction) {
    const user = this as userDocument;

    if (!user.isModified("password")) return next();

    const salt = await bcrypt.genSalt(config.get<number>("saltWorkFactor"));
    const passwordHash = await bcrypt.hash(user.password, salt);

    user.password = passwordHash;

    return next();
});

// Compare password to verify hash
userSchema.methods.comparePassword = async function (candidatePassword: string): Promise<boolean> {
    const user = this as userDocument;

    return bcrypt.compare(candidatePassword, user.password).catch(e => false);
} 

// User model
const UserModel = mongoose.model<userDocument>("User", userSchema);

export default UserModel;