"use client";

import Image from "next/image";
import cls from "./FormCallback.module.css";
import Line from "../icons/Line";
import Rectangle from "../icons/Rectangle";
import bgFormCallBack from "../../images/bgFormCallBack.png";
import bgFormCallBackRight from "../../images/bgFormCallBackRight.png";
import { useSendEmail } from "@/app/hooks/useSendEmail";

const FormCallback = () => {
    const { sendEmailAction } = useSendEmail();
    return (
        <section className="flex w-[100vw] text-[#FFFFFF]">
            <div className="relative w-full px-24">
                <div className=" flex flex-col justify-center text-start h-[100%] gap-[20px]">
                    <h3 className="font-bold text-[36px] flex flex-col">
                        <Line />
                        Бесплатная 3D анимация
                        <br />
                        будущей вывески
                    </h3>
                    <div className="flex ">
                        <div className="mr-2">
                            <Rectangle />
                        </div>
                        <p className="text-[18px] font-medium">
                            Сделаем 3D анимацию вывески, чтобы увидели, как
                            будет выглядеть ваша вывеска снаружи или внутри
                            помещения
                        </p>
                    </div>

                    <span className="text-[16px]">
                        Заполните в форме имя и нормер телефона. В ближайшее
                        время вам позвонит менеджер для уточнения деталей
                    </span>
                    <form
                        action={sendEmailAction}
                        className="flex flex-col gap-[20px] mr-[140px]"
                    >
                        <input
                            id="firstName"
                            name="firstName"
                            className="h-[60px] rounded-[30px] p-[20px] bg-transparent border-[2px]"
                            type="text"
                            placeholder="Имя"
                        />
                        <input
                            id="phone"
                            name="phone"
                            className="h-[60px] rounded-[30px] p-[20px] bg-transparent border-[2px]"
                            type="text"
                            placeholder="Телефон"
                        />
                        <button className={cls.button}>
                            Заказать бесплатную 3D анимацию
                        </button>
                    </form>
                </div>
                <div
                    className={`${cls["overlay"]} w-full h-full absolute top-0 bottom-0 right-0 left-0 z-[-5]`}
                >
                    <Image
                        src={bgFormCallBack}
                        alt="bg-form"
                        className="h-full"
                    />
                </div>
            </div>
            <div className="hidden sm:block md:hidden lg:block md:w-[100%] flex justify-center z-[2] ">
                <Image src={bgFormCallBackRight} alt="mondo" className="" />
            </div>
        </section>
    );
};

export default FormCallback;
