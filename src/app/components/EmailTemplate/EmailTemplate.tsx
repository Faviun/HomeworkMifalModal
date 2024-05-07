import {FC} from 'react';

interface EmailTemplateProps {
    firstName: string;
    phone: string;
}

export const EmailTemplate: FC<Readonly<EmailTemplateProps>> = ({firstName, phone}) => (
    <div>
        <h1>Welcome, {firstName}!</h1>
        <h2>{phone}</h2>
    </div>
);
