import LocContent from "@/components/Locations/LocContent";
import PageContent from "@/components/PageContent";
import { getLocationBySlug, getReviewsData } from "@/lib/api/getHomeData";
import client from "@/lib/apollo-client";
import { GET_PAGE_BY_SLUG } from "@/lib/queries/getPageBySlug";
import { notFound } from "next/navigation";

interface PageProps {
  params: { slug: string | string[] };
}

export default async function Page({ params }: PageProps) {
  // Ensure slug is a clean string
  const slug = Array.isArray(params.slug) ? params.slug.join("/") : params.slug;

  // 1️⃣ Try fetching LOCATION first
  const location = await getLocationBySlug(slug);

  if (location) {
    const reviews = await getReviewsData();
    return <LocContent location={location} reviews={reviews} />;
  }

  // 2️⃣ If no location, try PAGE
  try {
    const { data } = await client.query<{ page: any }>({
      query: GET_PAGE_BY_SLUG,
      variables: { slug: `/${slug}/`, idType: "URI" },
      fetchPolicy: "no-cache",
    });

    const page = data?.page;
    if (!page) return notFound();

    return <PageContent page={page} />;
  } catch (error) {
    console.error("Error fetching page:", error);
    return notFound();
  }
}
