"use server"
import { Resend } from "resend"
import {EmailTemplate} from "@/app/components/EmailTemplate/EmailTemplate"
import React from "react";
interface State {
    error: string | null
    success: boolean
}
export const sendEmail = async (prevState: State, formData: FormData) => {
    const firstName = formData.get("firstName") as string
    const phone = formData.get("phone") as string
    try {
        const resend = new Resend(process.env.RESEND_API_KEY)
        await resend.emails.send({
            from: "Andrew <onboarding@resend.dev>",
            to: 'a.lihtgolt@gmail.com',
            subject: "Form Submission",
            react: EmailTemplate({ firstName, phone }) as React.ReactElement
        })
        return {
            error: null,
            success: true
        }
    } catch (error) {
        console.log(error)
        return {
            error: (error as Error).message,
            success: false
        }
    }
}