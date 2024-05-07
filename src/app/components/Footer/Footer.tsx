'use client'
import PhoneIcon from "@/app/components/icons/PhoneIcon";
import Image from 'next/image'
import logo from '@/app/images/mifal-pirsum.png'
import { useTranslation } from "react-i18next";
import { facebook, instagram, phone, telegram } from "@/app/components/icons";
import EmailWh from "../icons/EmailWh";
import PhoneWh from "../icons/PhoneWh";
import TelegramWh from "../icons/TelgramWh";
import FacebookWh from "../icons/Facebook";
import InstagramWh from "../icons/InstagramWh";
import WhatsAppWh from "../icons/WhatsAppWh";
import ArrowUpPage from "../icons/ArrowUpPage";
const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer className=" font-bold text-[16px] flex items-end">
            <div className="container mx-auto flex justify-between py-[30px]">
                <Image src={logo} alt="logo" width={55} height={55} />
                <ul className="hidden md:flex items-center uppercase md:gap-[45px] [&_li:hover]:transition cursor-pointer [&_li:hover]:text-[var(--yellow)]">
                    <li>{t("test")}</li>
                    <li>{t("gallery")}</li>
                    <li>{t("about")}</li>
                    <li>{t("reviews")}</li>
                </ul>
                <ul>
                    <li>
                        <a href="tel:+" className="flex items-center gap-[10px] hover:text-[var(--yellow)]">
                            <PhoneWh />
                            <span>+972 58-4730292</span>
                        </a>
                    </li>
                    <li>
                        <a className="flex items-center gap-[10px] hover:text-[var(--yellow)]" href="malito:Mifal.hapirsum@gmail.com">
                            <EmailWh />
                            <span>Mifal.hapirsum@gmail.com</span>
                        </a>
                    </li>
                </ul>

                <ul className="flex items-center gap-[17px] ">
                    <li><a href=""><WhatsAppWh /></a></li>
                    <li><a href=""><TelegramWh /></a></li>
                    <li><a href=""><InstagramWh /></a></li>
                    <li><a href=""><FacebookWh /></a></li>
                </ul>
            </div>
            <ArrowUpPage />
        </footer>
    );
};

export default Footer;