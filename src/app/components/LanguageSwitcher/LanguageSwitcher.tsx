'use client'
import Arrow from "@/app/components/icons/Arrow";
import {useTranslation} from "react-i18next";
import {useRouter} from "next/navigation";
import {usePathname} from "next/navigation";
import i18nConfig from '../../../i18nConfig'
import {useState} from "react";

const LanguageSwitcher = () => {
    const [isShow, setIsShow] = useState(false);
    const { i18n } = useTranslation();
    const currentLocale = i18n.language;
    const router = useRouter();
    const currentPathname = usePathname();

    const handleChange = (e: any) => {
        const newLocale = e;

        // set cookie for next-i18n-router
        const days = 30;
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        const expires = date.toUTCString();
        document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

        // redirect to the new locale path
        if (
            currentLocale === i18nConfig.defaultLocale &&
            // @ts-ignore
            !i18nConfig.prefixDefault
        ) {
            router.push('/' + newLocale + currentPathname);
        } else {
            router.push(
                currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
            );
        }

        router.refresh();
    };
    return (
        <div className="flex relative items-center">
            <div className="flex items-center gap-[5px]">
                <span>RU</span>
                {/*<Arrow/>*/}
            </div>
            <div className={`${!isShow? 'hidden' :'flex'}  flex-col absolute -bottom-[50px] left-0`}>
                <button onClick={() => handleChange('he')}>HE</button>
                <button onClick={() => handleChange('ru')}>RU</button>
            </div>
        </div>
    );
};

export default LanguageSwitcher;