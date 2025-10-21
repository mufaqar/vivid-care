import Partners from "@/components/HomePage/partners";
import AboutValue from "@/components/Search/aboutValue";
import Main from "@/components/Search/main";
import InteractiveChoropleth from "@/components/Search/InteractiveChoropleth";
import Team from "@/components/Search/team";
import Testimonials from "@/components/Search/testimonials";
import { Suspense } from "react";
import { getReviewsData } from "@/lib/api/getHomeData";

export default async function Search() {
  const Reviews = await getReviewsData();
  return (
    <main>
      <Main />
      <Partners />
      <Suspense fallback={<div>Loading search...</div>}>
        <InteractiveChoropleth />
      </Suspense>
      <Testimonials data={Reviews} />
      <AboutValue />
      <Team />
    </main>
  );
}
