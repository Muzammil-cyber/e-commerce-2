import { CollectionConfig } from "payload/types";

export const Users: CollectionConfig = {
    slug: 'users',
    auth: {
        verify: {
            generateEmailHTML: ({ token }) => {
                return `<a href="${process.env.NEXT_PUBLIC_SERVER_URL}/verify-email?token=${token}">Click here to Verify Email</a>`
            }
        }
    },
    access: {
        read: () => true,
        create: () => true,
    },
    fields: [
        {
            name: "role",
            type: "select",
            // admin: { condition: () => false }, // Hide from admin UI
            required: true,
            options: [
                {
                    label: "Admin",
                    value: "admin"
                },
                {
                    label: "User",
                    value: "user"
                }
            ],
            defaultValue: "user"
        },

    ]
}