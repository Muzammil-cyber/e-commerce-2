import { z } from "zod";

export const AuthValidator = z.object({
    email: z.string().email(),
    password: z
        .string()
        .min(8, { message: "Password must be at least 8 characters" }),
});

export type FormValues = z.infer<typeof AuthValidator>;

export const QueryValidator = z.object({
    sort: z.enum(['asc', 'desc']).optional(),
    category: z.string().optional(),
    limit: z.number().optional(),
});

export type TQueryValidator = z.infer<typeof QueryValidator>;