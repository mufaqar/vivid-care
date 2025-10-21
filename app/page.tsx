import Faqs from "@/components/HomePage/faqs";
import GetInTouch from "@/components/HomePage/getInTouch";
import OurFocus from "@/components/HomePage/ourFocus";
import Partners from "@/components/HomePage/partners";
import ServicesSection from "@/components/HomePage/servicesSection";
import Testimonials from "@/components/HomePage/testimonials";
import VideoSlider from "@/components/HomePage/videoSlider";
import { getFaqData, getServicesData } from "@/lib/api/getHomeData";


export default async function Home() {
  const faqs = await getFaqData("home");
  const servcies = await getServicesData();



  return (
    <main>
      <VideoSlider />
      <Partners />
      <ServicesSection />
      <GetInTouch />
      <OurFocus />
      <Testimonials />
      <Faqs  data={faqs}/>
    </main>
  );
}
