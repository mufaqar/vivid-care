import AllPosts from "@/components/Blog/AllPosts";
import { getBlogData, getPostCategories } from "@/lib/api/getHomeData";

export default async function DomeCare() {
  const posts = await getBlogData()
  const categories = await getPostCategories();
  return (
    <>
      <AllPosts data={posts} cat={categories}/>
    </>
  );
}
