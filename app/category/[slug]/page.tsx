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

  if (!posts.length) {
    return (
      <div className="p-10 text-center text-gray-600">
        No posts found in this category.
      </div>
    );
  }

  return (
    <main>
      <AllPosts data={posts} cat={categories}  />
    </main>
  );
}
