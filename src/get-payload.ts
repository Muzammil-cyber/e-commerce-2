import dotenv from 'dotenv'
import path from 'path'
import payload, { Payload } from 'payload'
import { InitOptions } from 'payload/config'
import nodemailer from 'nodemailer';

dotenv.config({
    path: path.resolve(__dirname, '../.env'),
})

const transporter = nodemailer.createTransport({
    host: 'smtp.resend.com',
    port: 465,
    secure: true,
    auth: {
        user: 'resend',
        pass: process.env.RESEND_API_KEY

    }
})

let cache = (global as any).payload

if (!cache) {
    cache = (global as any).payload = {
        client: null, promise: null
    }
}

interface Args {
    initOptions?: Partial<InitOptions>
}

export const getPayloadClient = async ({ initOptions }: Args = {}): Promise<Payload> => {
    if (!process.env.PAYLOAD_SECRET) {
        throw new Error('PAYLOAD_SECRET is not defined')
    }

    if (cache.client) {
        return cache.client
    }

    if (!cache.promise) {
        cache.promise = payload.init({
            email: {
                transport: transporter,
                fromAddress: process.env.RESEND_EMAIL || 'onboarding@resend.dev',
                fromName: 'DigitalHippo'
            },
            secret: process.env.PAYLOAD_SECRET,
            local: initOptions?.express ? false : true,
            ...(initOptions || {}),
        })
    }

    try {
        cache.client = await cache.promise
    } catch (error) {
        console.error(error)
        throw error
    }
    return cache.client
}
