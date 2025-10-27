import { GET_POST_BY_SLUG } from "@/lib/queries/getPostBySlug";
import client from "@/lib/apollo-client";
import Image from "next/image";
import { Post } from "@/lib/gql-types";

interface BlogPostPageProps {
    params: { slug: string };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { data } = await client.query<{ post: Post }>({
        query: GET_POST_BY_SLUG,
        variables: { slug: params.slug },
    });

    const post = data?.post;

    if (!post) return <div className="text-center py-20">Post not found</div>;

    return (
        <section className='py-16'>
            <div className='container mx-auto px-4'>
                {post.featuredImage?.node?.sourceUrl && (
                    <Image
                        src={post.featuredImage.node.sourceUrl}
                        alt={post.featuredImage.node.altText || post.title}
                        width={800}
                        height={450}
                        className="w-full rounded-lg mb-6"
                    />
                )}

                <h1 className="text-4xl md:text-6xl font-bold text-[#111827] mb-6 font-poppins">{post.title}</h1>
                <p className="md:text-lg text-sm font-normal text-desc text-left mb-2">
                    By {post.author?.node?.name} —{" "}
                    {post.date ? new Date(post.date).toLocaleDateString() : ""}
                </p>

                <div
                    className="service_Content mt-6"
                    dangerouslySetInnerHTML={{ __html: post.content ?? "" }}
                />
            </div>
        </section>
    );
}
