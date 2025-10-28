import client from "@/lib/apollo-client";
import { GET_PAGE_BY_SLUG } from "@/lib/queries/getPageBySlug";
import { notFound } from "next/navigation";

interface PageProps {
  params: { slug: string | string[] };
}

export default async function Page({ params }: PageProps) {
  // 🧩 Ensure slug is a string, not an array
  const slug = Array.isArray(params.slug) ? params.slug.join("/") : params.slug;
  console.log("Fetching page for slug:", slug);

  try {
    const { data } = await client.query<{ page: any }>({
      query: GET_PAGE_BY_SLUG,
      variables: { slug: `/${slug}/`, idType: "URI" }, // ✅ use URI
      fetchPolicy: "no-cache",
    });

    const page = data?.page;
    if (!page) return notFound();

    return (
      <main>
        <section className="py-16">
          <div className="container mx-auto md:px-0 px-4">
            <div
              className="service_Content"
              dangerouslySetInnerHTML={{ __html: page.content || "" }}
            />
          </div>
        </section>
      </main>
    );
  } catch (error) {
    console.error("Error fetching page:", error);
    return notFound();
  }
}
