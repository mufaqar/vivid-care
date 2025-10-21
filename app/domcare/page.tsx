import BlogSection from "@/components/Domcare/BlogSection";
import CareForSection from "@/components/Domcare/CareForSection";
import Domesticsection from "@/components/Domcare/domesticsection";
import EmpowermentGrid from "@/components/Domcare/empowermentGrid";
import Main from "@/components/Domcare/main";
import StatsSection from "@/components/Domcare/StatsSection";
import SupportSection from "@/components/Domcare/SupportSection";
import GetInTouch from "@/components/HomePage/getInTouch";
import Partners from "@/components/HomePage/partners";
import ServicesSection from "@/components/HomePage/servicesSection";
import Testimonials from "@/components/HomePage/testimonials";
import {
  getHomeData,
  getReviewsData,
  getServicesData,
} from "@/lib/api/getHomeData";

export default async function DomeCare() {
  const ServiceSection = await getHomeData();
  const servcies = await getServicesData();
  const Reviews = await getReviewsData();

  return (
    <main>
      <Main />
      <Partners />
      <Domesticsection />
      <CareForSection />
      <GetInTouch />
      <StatsSection />
      <EmpowermentGrid />
      <Testimonials data={Reviews} />
      <SupportSection />
      <ServicesSection content={ServiceSection} data={servcies} />
      <BlogSection />
    </main>
  );
}
