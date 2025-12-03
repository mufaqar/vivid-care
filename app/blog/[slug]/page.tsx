import Banner from "@/components/Blog/banner";
import SinglePost from "@/components/Blog/SinglePost";
import { getBlogData, getBlogPostBySlug, getPostCategories } from "@/lib/api/getHomeData";

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    return <div className="text-center py-20">Post not found</div>;
  }

  // Fetch sidebar data
  const [categories, allPosts] = await Promise.all([
    getPostCategories(),
    getBlogData(),
  ]);

  const latestPosts = allPosts.slice(0, 5);
  const tags = ["DREAM", "RINGS", "BIRTHDAY", "GIFTS", "NEAKLACE", "CHAIN", "BRACLET"];
  const instagramPosts = [
    "/images/service1.png",
    "/images/service2.png",
    "/images/service3.png",
    "/images/service4.png",
    "/images/service5.png",
    "/images/service6.png",
  ];

  return (
    <main>
      <Banner data={post} />

      <SinglePost
        post={post}
        categories={categories}
        latestPosts={latestPosts}
        tags={tags}
        instagramPosts={instagramPosts}
      />
    </main>
  );
}
