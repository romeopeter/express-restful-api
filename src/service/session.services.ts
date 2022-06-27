import SessionModel from "../models/session.model";
import log from "../utils/logger";

export async function createSession (userId: string, userAgent: string) {
    try {
        const session = await SessionModel.create({user: userId, userAgent});
        return session.toJSON();
    } catch (e: any) {
        throw new Error(e);
    }
}