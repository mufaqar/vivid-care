import AllPosts from "@/components/Blog/AllPosts";
import { getBlogData } from "@/lib/api/getHomeData";

export default async function DomeCare() {
  const posts = await getBlogData()
  return (
    <>
      <AllPosts data={posts} />
    </>
  );
}
