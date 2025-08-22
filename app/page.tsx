import Faqs from "@/components/HomePage/faqs";
import GetInTouch from "@/components/HomePage/getInTouch";
import OurFocus from "@/components/HomePage/ourFocus";
import Partners from "@/components/HomePage/partners";
import Testimonials from "@/components/HomePage/testimonials";
import VideoSlider from "@/components/HomePage/videoSlider";
import ServiceBox from "@/components/Services/serviceBox";
import { services } from "@/data/servicesData";

export default function Home() {
  return (
    <main>
      <VideoSlider />
      <Partners />
      <section className="py-16">
        <div className="container mx-auto md:px-0 px-4">
          <h2 className="md:text-[62px] md:leading-none text-4xl text-black font-semibold tracking-[-0.6] font-playfair text-center mb-8 max-w-[952px] mx-auto">
            Our Comfortable and Accessible Supported Living Homes
          </h2>
          <p className="md:text-xl text-lg font-normal text-black font-poppins text-center capitalize max-w-[830px] mx-auto mb-16">
            At Vivid Care Services, we offer a variety of supported living homes, each designed to provide comfort, accessibility, and a sense of community.
          </p>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
            {services.map((item, idx) => (
              <ServiceBox key={idx} data={item} />
            ))}
          </div>
        </div>
      </section>
      <GetInTouch />
      <OurFocus />
      <Testimonials />
      <Faqs />
    </main>
  );
}
