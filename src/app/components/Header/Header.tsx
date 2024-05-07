'use client'
import LanguageSwitcher from "@/app/components/LanguageSwitcher/LanguageSwitcher";
import Image from 'next/image'
import logo from '@/app/images/mifal-pirsum.png'
import {useTranslation} from "next-i18next";
import {facebook, instagram, phone, telegram} from "@/app/components/icons";
import WhatsAppWh from "@/app/components/icons/WhatsAppWh";
import TelegramWh from "@/app/components/icons/TelgramWh";
import InstagramWh from "@/app/components/icons/InstagramWh";
import FacebookWh from "@/app/components/icons/Facebook";

const Header = () => {
    const {t} = useTranslation();
    return (
        <header className="sticky z-10 top-0 uppercase font-bold text-[16px] bg-[var(--bg-color)] shadow">
            <div className="container mx-auto flex justify-between py-[20px]">
                <Image src={logo} alt="logo" width={55} height={55} />
                <ul className="hidden md:flex items-center md:gap-[45px] [&_li:hover]:transition cursor-pointer [&_li:hover]:text-[var(--yellow)]">
                    <li>{t("test")}</li>
                    <li>{t("gallery")}</li>
                    <li>{t("about")}</li>
                    <li>{t("reviews")}</li>
                </ul>
                <LanguageSwitcher/>
                <a href="tel:+" className="flex items-center gap-[10px] hover:text-[var(--yellow)]">
                    <span>+972 58-4730292</span>
                    {/*<PhoneIcon/>*/}
                </a>
                <ul className="flex items-center gap-[17px] ">
                    <li><a href=""><WhatsAppWh/></a></li>
                    <li><a href=""><TelegramWh/></a></li>
                    <li><a href=""><InstagramWh/></a></li>
                    <li><a href=""><FacebookWh/></a></li>
                </ul>
            </div>
        </header>
    );
};

export default Header;