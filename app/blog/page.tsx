import Banner from "@/components/Blog/banner";
import BlogSection from "@/components/Domcare/BlogSection";
import { getBlogData } from "@/lib/api/getHomeData";

export default async function DomeCare() {
  const posts = await getBlogData()
  const banner = {
    title: "Blogs",
    featuredImage: {
      node: {
        sourceUrl: "/images/default-bg.jpg", // fallback image
      },
    },
    description:
      "Your trusted source for care, wellness, and lifestyle inspiration. Explore expert advice, personal stories, and helpful guides designed to make everyday living easier and more fulfilling.",
  };
  return (
    <main>
      <Banner data={banner} />
      <BlogSection data={posts} />
    </main>
  );
}
