import { object, string } from "zod";

export const createUserSchema = object({
  body: object({
    name: string({
      required_error: "Name is required",
    }),
    email: string({
      required_error: "Email is required",
    }).email("Email is not valid"),
    password: string({
      required_error: "Password is required",
    }).min(6, "Password length is short - expected is 6 characters"),
    passwordConfirmation: string({
      required_error: "Password confirmation is required",
    }),

    // Check for umatched password
  }).refine((data) => data.password === data.passwordConfirmation, {
    message: "Password do not match",
    path: ["passwordConfirmation"]
  }),
});
