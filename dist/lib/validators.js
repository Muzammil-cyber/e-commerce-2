"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryValidator = exports.AuthValidator = void 0;
var zod_1 = require("zod");
exports.AuthValidator = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z
        .string()
        .min(8, { message: "Password must be at least 8 characters" }),
});
exports.QueryValidator = zod_1.z.object({
    sort: zod_1.z.enum(['asc', 'desc']).optional(),
    category: zod_1.z.string().optional(),
    limit: zod_1.z.number().optional(),
});
