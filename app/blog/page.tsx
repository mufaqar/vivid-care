import AllPosts from "@/components/Blog/AllPosts";
import { getBlogData, getPostCategories } from "@/lib/api/getHomeData";

export default async function DomeCare() {
  const posts = await getBlogData()
  const categories = await getPostCategories();
  return (
    <main>
    <section className="min-h-[60vh] bg-gradient-to-r from-[#EAF4FC] to-[#FDEAF3] flex items-center justify-center px-4">
        <div className="container mx-auto md:px-0 px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-title text-center mb-6 font-poppins">
           Our Blog
          </h1>
        </div>
      </section>
      <AllPosts data={posts} cat={categories}/>
    </main>
  );
}
