import { useSendEmail } from "@/app/hooks/useSendEmail";
import CloseModal from "@/app/images/CloseModal";
import RightCircle from "@/app/images/RightCircle";
import TopCircle from "@/app/images/TopCircle";
import { useClickAway, useLockBodyScroll } from "@uidotdev/usehooks";

const ModalWindow = ({ handleClickShow }: any) => {
    const { sendEmailAction } = useSendEmail();

    const ref: any = useClickAway(() => {
        handleClickShow();
    });

    useLockBodyScroll();

    return (
        <div className="fixed z-[999] top-0 left-0 right-0 bottom-0 bg-[var(--bg-blur)] flex justify-center items-center">
            <div
                ref={ref}
                className="bg-[var(--bg-color)] max-w-[886px] min-w-[420px] lg:flex-1 flex flex-col items-center lg:py-[115px] py-[50px] rounded-[15px] relative"
            >
                <h2 className="font-[700] text-[32px] w-[385px] leading-[39px] text-center mb-[27px]">
                    Заказать бесплатную консультацию
                </h2>
                <p className="font-[400] text-[15px] w-[456px] leading-[20px] tracking-[3%] text-center mb-[30px]">
                    Оставьте свои контактные данные в форме ниже и мы свяжемся с
                    вами, чтобы бесплатно помочь вам подобрать подходящую
                    рекламную вывеску
                </p>

                <form
                    action={sendEmailAction}
                    className="flex flex-col gap-[13px] w-full max-w-[451px] mb-[13px]"
                >
                    <input
                        id="firstName"
                        name="firstName"
                        className="h-[58px] rounded-[30px] py-[20px] pl-[43px] font-[400] text-[16px] leading-[20px] border-[1px] border-[#707C7C]"
                        type="text"
                        placeholder="Имя"
                    />
                    <input
                        id="phone"
                        name="phone"
                        className="h-[58px] rounded-[30px] py-[20px] pl-[43px] font-[400] text-[16px] leading-[20px] border-[1px] border-[#707C7C] mb-[13px]"
                        type="text"
                        placeholder="Телефон"
                    />

                    <button className="bg-[var(--yellow)] rounded-[30px] h-[58px] text-[var(--text-color)] text-[14px] font-[600] shadow-[0_0_15px_3px_rgba(255,255,91, 0.5)]">
                        Заказать бесплатную 3D анимацию
                    </button>
                </form>

                <div
                    className="absolute top-[24px] right-[26px] cursor-pointer"
                    onClick={handleClickShow}
                >
                    <CloseModal />
                </div>

                <div className="absolute top-0 left-0 ">
                    <TopCircle />
                </div>
                <div className="lg:w-[33px] lg:h-[33px] md:w-[20px] md:h-[20px] sm:w-[13px] sm:h-[13px] bg-[var(--yellow)] rounded-full absolute lg:top-[81px] lg:left-[100px] md:top-[40px] md:left-[55px] sm:top-[40px] sm:left-[45px]"></div>
                <div className="absolute right-[0px] lg:top-[196px] top-[175px]">
                    <RightCircle />
                </div>
            </div>
        </div>
    );
};

export default ModalWindow;

//1. добавить круги
//2. Создать кнопку закрывающее меню
//3. отправить форму на емаил
//4. функция закрытия модального окна при клике за пределы usehookslibrary
