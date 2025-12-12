import BlogSection from "@/components/Domcare/BlogSection";
import CareForSection from "@/components/supportedliving/CareForSection";
import Domesticsection from "@/components/supportedliving/domesticsection";
import EmpowermentGrid from "@/components/Domcare/empowermentGrid";
import Main from "@/components/supportedliving/main";
import StatsSection from "@/components/Domcare/StatsSection";
import SupportSection from "@/components/Domcare/SupportSection";
import GetInTouch from "@/components/HomePage/getInTouch";
import Partners from "@/components/HomePage/partners";
import ServicesSection from "@/components/HomePage/servicesSection";
import Testimonials from "@/components/HomePage/testimonials";
import {
  getBlogData,
  getHomeData,
  getReviewsData,
  getServicesData,
  getSupportedLivingData,
} from "@/lib/api/getHomeData";

export default async function Supportedliving() {
  const homeInfo = await getHomeData();
  const servcies = await getServicesData();
  const Reviews = await getReviewsData();
  const posts = await getBlogData();
  const pageData = await getSupportedLivingData();

  return (
    <main>
      <Main data={pageData?.banner} />
      <Partners />
      <Domesticsection data={pageData?.aboutSupported} />
      <CareForSection data={pageData?.careFor} />
      <GetInTouch />
      <StatsSection />
     <EmpowermentGrid data={pageData?.activities} />
      <Testimonials data={Reviews} />
     <SupportSection data={pageData?.cta} />
      <ServicesSection content={homeInfo.serviceSection} data={servcies} />
      <BlogSection data={posts} />
    </main>
  );
}
