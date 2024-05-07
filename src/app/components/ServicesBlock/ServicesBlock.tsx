import {servicesMock} from "@/app/images/services/services";
import Image from "next/image";

const ServicesBlock = () => {
    return (
        <section>
            <h2 className="font-bold text-[40px]">Виды услуг</h2>
            <h3 className="font-bold text-[21px] bg-[var(--yellow)] inline">Собираем вывески под любой бюджет</h3>
            <div className="grid grid-cols-2 gap-[40px]">
                <p>Создаем <strong>рекламные вывески</strong> под ключ: производим, доставляем, установливаем и договориваемся с местными властями. Делаем вывески любой сложности: небольшие для интерьера в офисах
                    и большие для зданий, торговых центров и высокоэтажных домов.
                </p>
                <p>Также делаем рекламные проекты под ключ. Если вы запускаете новую рекламную кампанию, мы поможем напечатать рекламную продукцию и запустить таргетированную рекламу в Фейсбуке и Инстаграме. Делаем всё вместе или по отдельности.</p>
            </div>
            <div className="grid grid-cols-3 gap-x-[5px] gap-y-[10px]">
                {servicesMock.map((item: any) => <div key={item.title}>
                    <Image className="w-full" src={item.image} alt={item.title}/>
                    <div className="px-[25px] py-[15px] flex justify-between text-[14px] shadow">
                        <span className="text-[var(--gray)]">{item.price}</span><strong>{item.title}</strong>
                    </div>
                </div>)}
            </div>
        </section>
    );
};

export default ServicesBlock;