import { PRODUCT_CATEGORIES } from "../../config";
import { CollectionConfig } from "payload/types";

export const Products: CollectionConfig = {
    slug: 'products',
    admin: {
        useAsTitle: 'name',
    },
    access: {},
    fields: [
        {
            name: 'user',
            type: 'relationship',
            relationTo: 'users',
            required: true,
            hasMany: false,
            admin: {
                condition: () => false
            }
        },
        {
            name: 'name',
            label: 'Name',
            type: 'text',
            required: true,
        },
        {
            name: 'price',
            label: 'Price in USD',
            min: 0,
            type: 'number',
            required: true,
        },
        {
            name: 'description',
            label: 'Description',
            type: 'textarea',
            required: true,
        },
        {
            name: 'category',
            label: 'Category',
            type: 'select',
            options: PRODUCT_CATEGORIES.map(({ label, value }) => ({ value, label })),
            required: true,

        },
        {
            name: 'product_files',
            label: 'Product File(s)',
            type: 'relationship',
            relationTo: 'product_files',
            required: true,
            hasMany: false,
        },
        {
            name: 'approvedForSale',
            label: 'Product Status',
            type: 'select',
            defaultValue: 'pending',
            access: {
                create: ({ req }) => req.user.role === 'admin',
                read: ({ req }) => req.user.role === 'admin',
                update: ({ req }) => req.user.role === 'admin',
            },

            options: [
                { label: 'Pending', value: 'pending' },
                { label: 'Approved', value: 'approved' },
                { label: 'Rejected', value: 'rejected' }
            ],

        },
        {
            name: 'price_id',
            type: 'text',
            access: {
                create: () => false,
                read: () => false,
                update: () => false
            },
            admin: {
                hidden: true
            }
        },
        {
            name: 'stripe_id',
            type: 'text',
            access: {
                create: () => false,
                read: () => false,
                update: () => false
            },
            admin: {
                hidden: true
            }
        },
        {
            name: 'images',
            label: 'Images',
            type: 'array',
            minRows: 1,
            maxRows: 4,
            required: true,
            labels: {
                singular: 'Image',
                plural: 'Images'
            },
            fields: [
                {
                    name: 'image',
                    label: 'Image',
                    type: 'upload',
                    relationTo: 'media',
                    required: true
                }
            ]
        }
    ],
}