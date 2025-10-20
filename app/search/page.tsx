import Partners from "@/components/HomePage/partners";
import AboutValue from "@/components/Search/aboutValue";
import Main from "@/components/Search/main";
import PopulationMap from "@/components/Search/populationMap";
import InteractiveChoropleth from "@/components/Search/InteractiveChoropleth";
import Team from "@/components/Search/team";
import Testimonials from "@/components/Search/testimonials";


export default function Home() {
    return (
        <main>
            <Main />
            <Partners />
            {/* <PopulationMap  /> */}
            <InteractiveChoropleth />
            <Testimonials />
            <AboutValue />
            <Team />
        </main>
    );
}
