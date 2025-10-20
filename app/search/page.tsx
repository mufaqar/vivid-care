import Partners from "@/components/HomePage/partners";
import AboutValue from "@/components/Search/aboutValue";
import Main from "@/components/Search/main";
import InteractiveChoropleth from "@/components/Search/InteractiveChoropleth";
import Team from "@/components/Search/team";
import Testimonials from "@/components/Search/testimonials";
import { Suspense } from "react";


export default function Home() {
    return (
        <main>
            <Main />
            <Partners />
            <Suspense fallback={<div>Loading search...</div>}>
            <InteractiveChoropleth />
            </Suspense>
            <Testimonials />
            <AboutValue />
            <Team />
        </main>
    );
}
