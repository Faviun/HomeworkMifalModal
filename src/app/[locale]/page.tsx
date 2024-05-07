import initTranslations from "../i18n";
import TranslationsProvider from "@/app/components/Providers/TranslationProvider";
import OfferBanner from "@/app/components/OfferBanner/OfferBanner";
import ServicesBlock from "@/app/components/ServicesBlock/ServicesBlock";
import BusinessBlock from "@/app/components/BusinessBlock/BusinessBlock";
import GiftsBlock from "@/app/components/GiftsBlock/GiftsBlock";
import PortfolioBlock from "@/app/components/PortfolioBlock/PortfolioBlock";
import ReviewsBlock from "@/app/components/ReviewsBlock/ReviewsBlock";
import AboutUsBlock from "@/app/components/AboutUsBlock/AboutUsBlock";
import EmployesBlock from "@/app/components/EmployesBlock/EmployesBlock";
import ContactsBlock from "@/app/components/ContactsBlock/ContactsBlock";
import Header from "@/app/components/Header/Header";
import FormCallback from "../components/FormCallback/FormCallback";
import Footer from "@/app/components/Footer/Footer";

const i18nNamespaces = ["default"];

export default async function Home({ params: { locale } }: any) {
    const { resources } = await initTranslations(locale, i18nNamespaces);
    return (
        <TranslationsProvider
            locale={locale}
            namespaces={i18nNamespaces}
            resources={resources}
        >
            <Header />
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <OfferBanner />
                <ServicesBlock />
                <BusinessBlock />
                <GiftsBlock />
                <PortfolioBlock />
                <AboutUsBlock />
                <ReviewsBlock />
                <EmployesBlock />
                <ContactsBlock />
                <FormCallback />
            </main>
            <Footer />
        </TranslationsProvider>
    );
}
