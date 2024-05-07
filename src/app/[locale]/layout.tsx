import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../globals.css";
const Header = dynamic(() => import('@/app/components/Header/Header'), { ssr: false })
import Footer from "@/app/components/Footer/Footer";
import RectlIcon from "@/app/components/icons/RectlIcon";
import i18nConfig from '@/i18nConfig';
import { dir } from 'i18next';
import dynamic from "next/dynamic";

const montserrat = Montserrat({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Mifal-Pirsum | Производство вывесок за 10 дней в Израиле",
  description: "Производим любые вывески за 10 дней. Индивидуальный дизайн и быстрая реализация. Надежные и качественные решения для вашего бизнеса.",
};

export function generateStaticParams() {
  return i18nConfig.locales.map((locale: any) => ({ locale }));
}

export default function RootLayout({
  children, params: { locale }
}: Readonly<{
  children: React.ReactNode;
  params: any
}>) {
  return (
    <html lang={locale} dir={dir(locale)}>
      <body suppressHydrationWarning className={montserrat.className}>
          {children}
        <RectlIcon/>
      </body>
    </html>
  );
}
