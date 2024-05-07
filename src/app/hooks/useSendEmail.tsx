import { useFormState } from 'react-dom';
import {useEffect} from "react";
import {sendEmail} from "@/actions";

// Custom hook useSendEmail
export const useSendEmail = () => {
    const [sendEmailState, sendEmailAction] = useFormState(sendEmail, {
        error: null,
        success: false
    })

    useEffect(() => {
        if (sendEmailState.success) {
            alert("Email sent!")
        }
        if (sendEmailState.error) {
            alert("Error sending email!")
        }
    }, [sendEmailState])
    return {sendEmailState, sendEmailAction}
}