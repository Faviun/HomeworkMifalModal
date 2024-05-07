import { useTranslation } from "next-i18next";

const OrderButton = ({ handleClickShow }: any) => {
    const { t } = useTranslation();
    return (
        <div className="fixed bottom-3 right-3 z-10">
            <button
                onClick={handleClickShow}
                className="bottom-3 right-3 bg-[var(--yellow)] text-[16px] font-bold px-10 py-2 animationP rounded-full"
            >
                {t("contact_us")}
            </button>
        </div>
    );
};

export default OrderButton;
