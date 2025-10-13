import Main from "@/components/supportedliving/main";
import Partners from "@/components/HomePage/partners";
import Testimonials from "@/components/supportedliving/testimonials";
import PopulationMap from "@/components/supportedliving/populationMap";
import AboutValue from "@/components/supportedliving/aboutValue";
import Team from "@/components/supportedliving/team";

export default function Home() {
    return (
        <main>
            <Main />
            <Partners />
            <PopulationMap />
            <Testimonials />
            <AboutValue />
            <Team />
        </main>
    );
}
