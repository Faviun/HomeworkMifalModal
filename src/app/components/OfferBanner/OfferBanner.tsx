"use client";
import ReactPlayer from "react-player";
import { useTranslation } from "next-i18next";
import OrderButton from "@/app/components/OrderButton/OrderButton";
import ClientComponent from "@/app/components/ClientComponent/ClientComponent";
import { useState } from "react";
import ModalWindow from "../ModalWindow/ModalWindow";

const OfferBanner = () => {
    const { t } = useTranslation();
    const [isShow, setIsShow] = useState(false);

    const handleClickShow = () => setIsShow(!isShow);

    return (
        <div className="container h-full flex">
            <div className="flex flex-col flex-1">
                <h1 className="font-bold md:text-[60px]">
                    {t("create")}{" "}
                    <span className="bg-[var(--yellow)]">{t("ten_days")}</span>
                </h1>
                <h2>{t("market_key")}</h2>
                <ul className="list-disc">
                    <li>{t("consultation_person")}</li>
                    <li>{t("depart_study")}</li>
                    <li>{t("design_market")}</li>
                    <li>{t("create_sign")}</li>
                    <li>{t("delivery_hard")}</li>
                </ul>
            </div>
            <div className="flex-1">
                {/*<ReactPlayer controls={false} loop playing muted width={"100%"} height={740} url={"@/app/videos/video.mp4"} />*/}
            </div>
            <ClientComponent>
                <OrderButton handleClickShow={handleClickShow} />
                {isShow && (
                    <ModalWindow
                        handleClickShow={handleClickShow}
                        closeClickAway={useState}
                    />
                )}
            </ClientComponent>
        </div>
    );
};

export default OfferBanner;
