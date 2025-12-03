import AllPosts from "@/components/Blog/AllPosts";
import { getPostByCateSlug } from "@/lib/api/getHomeData";
import client from "@/lib/apollo-client";
import { CategoriesConnection } from "@/lib/gql-types";
import { Query_Post_Categories } from "@/lib/queries/gql-query";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const posts = await getPostByCateSlug(slug);

  // Fetch categories
  const { data: catData } = await client.query<{
    categories: CategoriesConnection;
  }>({
    query: Query_Post_Categories,
    variables: { first: 10 },
  });

  // Convert edges → array of category nodes
  const categories =
    catData?.categories?.edges?.map((edge) => edge.node) || [];

  return (
    <main>
      <section className="min-h-[60vh] bg-gradient-to-r from-[#EAF4FC] to-[#FDEAF3] flex items-center justify-center px-4">
        <div className="container mx-auto md:px-0 px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-title text-center mb-6 font-poppins capi">
           {slug.replace(/-/g, " ")}
          </h1>
        </div>
      </section>
      <AllPosts data={posts} cat={categories} />
    </main>
  );
}
