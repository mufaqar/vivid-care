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
  getBlogData,
  getDomiciliaryPageData,
  getHomeData,
  getReviewsData,
  getServicesData,
} from "@/lib/api/getHomeData";

export default async function DomeCare() {
  const DomcareInfo = await getDomiciliaryPageData()
  const homeInfo = await getHomeData()
  const servcies = await getServicesData();
  const Reviews = await getReviewsData();
  const posts  = await getBlogData()

  // console.log("DomCare Page", DomcareInfo)
  return (
    <main>
      <Main data={DomcareInfo?.banner} />
      <Partners />
      <Domesticsection data={DomcareInfo?.aboutDomcare} />
      <CareForSection data={DomcareInfo?.careFor} />
      <GetInTouch />
      <StatsSection />
      <EmpowermentGrid data={DomcareInfo?.activities} />
      <Testimonials data={Reviews} />
      <SupportSection data={DomcareInfo?.cta} />
      <ServicesSection content={homeInfo.serviceSection} data={servcies} />
      <BlogSection data={posts} />
    </main>
  );
}
