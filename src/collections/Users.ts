import { CollectionConfig } from "payload/types";

export const Users: CollectionConfig = {
    slug: 'users',
    auth: {
        verify: {
            generateEmailHTML: ({ token }) => {
                return `<a href="${process.env.PUBLIC_SERVER_URL}/verify-email?token=${token}">Verify Email</a>`
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