import SinglePost from "@/components/Blog/SinglePost";
import { getBlogPostBySlug } from "@/lib/api/getHomeData";

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) return <div className="text-center py-20">Post not found</div>;

    return (
        <SinglePost post={post} />
    );
}
