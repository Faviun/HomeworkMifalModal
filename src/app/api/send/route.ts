import { EmailTemplate } from '@/app/components/EmailTemplate/EmailTemplate';
import { Resend } from 'resend';
import * as React from 'react';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST() {
    try {
        const { data, error } = await resend.emails.send({
            from: 'Acme <mifal-pirsum@gmail.com>',
            to: ['a.lihtgolt@gmail.com'],
            subject: "Новое сообщение",
            react: EmailTemplate({ firstName: 'andrew', phone: '+373' }) as React.ReactElement,
        });

        if (error) {
            return Response.json({ error });
        }
        return Response.json({ data });
    } catch (error) {
        console.log(error);
        return Response.json({ error });
    }
}
