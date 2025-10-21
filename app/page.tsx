import Faqs from "@/components/HomePage/faqs";
import GetInTouch from "@/components/HomePage/getInTouch";
import OurFocus from "@/components/HomePage/ourFocus";
import Partners from "@/components/HomePage/partners";
import ServicesSection from "@/components/HomePage/servicesSection";
import Testimonials from "@/components/HomePage/testimonials";
import VideoSlider from "@/components/HomePage/videoSlider";
import { getFaqData, getHomeData, getReviewsData, getServicesData } from "@/lib/api/getHomeData";


export default async function Home() {
  const ServiceSection = await getHomeData()
  const faqs = await getFaqData("home");
  const servcies = await getServicesData();
  const Reviews = await getReviewsData();

  return (
    <main>
      <VideoSlider />
      <Partners />
      <ServicesSection content={ServiceSection} data={servcies} />
      <GetInTouch />
      <OurFocus />
      <Testimonials data={Reviews} />
      <Faqs data={faqs}/>
    </main>
  );
}
