import Faqs from "@/components/HomePage/faqs";
import GetInTouch from "@/components/HomePage/getInTouch";
import OurFocus from "@/components/HomePage/ourFocus";
import Partners from "@/components/HomePage/partners";
import ServicesSection from "@/components/HomePage/servicesSection";
import Testimonials from "@/components/HomePage/testimonials";
import VideoSlider from "@/components/HomePage/videoSlider";


export default function Home() {
  return (
    <main>
      <VideoSlider />
      <Partners />
      <ServicesSection />
      <GetInTouch />
      <OurFocus />
      <Testimonials />
      <Faqs />
    </main>
  );
}
