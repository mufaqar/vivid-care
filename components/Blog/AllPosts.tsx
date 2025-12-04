"use client";

import React, { useState } from "react";
import AnimateOnScroll, { useAutoDelay } from "../animation";
import { ICategoryNode } from "@/lib/gql-types";
import Image from "next/image";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
import { usePathname } from "next/navigation";

interface AllPostsProps {
  data: any[];
  cat: ICategoryNode[];
}

const AllPosts = ({ data, cat }: AllPostsProps) => {
  const getDelay = useAutoDelay();
  const pathname = usePathname();

  const bgColors = ["bg-[#DCFCE7]", "bg-[#F3E8FF]", "bg-[#FFEDD5]"];
  const iconBg = ["bg-[#16A34A]", "bg-[#9333EA]", "bg-[#EA580C]"];

  // ⭐ Show only 9 posts at first
  const [visibleCount, setVisibleCount] = useState(9);

  // Posts to show
  const visiblePosts = data.slice(0, visibleCount);

  // Whether to hide load More button
  const canLoadMore = visibleCount < data.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 9); // Load 9 more
  };

  return (
    <main>
      <section className="py-16 bg-white">
        <div className="container mx-auto md:px-0 px-4">
          <ul className="flex flex-wrap justify-center mb-10">
            {/* All Categories */}
            <li>
              <Link
                href={`/blog`}
                className={`inline-block text-sm px-5 py-2 rounded-sm mr-2 mb-2 transition-all duration-300
                  ${pathname === "/blog"
                    ? "bg-secondary text-white"
                    : "bg-primary/20 text-title hover:bg-secondary hover:text-white"
                  }
                `}
              >
                All
              </Link>
            </li>

            {/* Dynamic categories */}
            {cat.map((category: ICategoryNode) => (
              <li key={category.slug}>
                <Link
                  href={`/category/${category.slug}`}
                  className={`inline-block text-sm px-5 py-2 rounded-sm mr-2 mb-2 transition-all duration-300
                    ${pathname === `/category/${category.slug}`
                      ? "bg-secondary text-white"
                      : "bg-primary/20 text-title hover:bg-secondary hover:text-white"
                    }
                `}
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Posts Grid */}
        <div className="container mx-auto md:px-0 px-4 grid md:grid-cols-3 gap-8">
          {visiblePosts.length === 0 ? (
            <div className="w-full py-20 text-center md:col-span-3">
              <h3 className="text-2xl font-semibold mb-2">No Posts Found</h3>
              <p className="text-gray-500">Please check back later.</p>
            </div>
          ) : (
            visiblePosts.map((post, index) => {
              const imageUrl = post.featuredImage?.node?.sourceUrl;
              const author = post.author?.node?.name || "Dennis";
              const formattedDate = post.date
                ? new Date(post.date).toLocaleDateString()
                : "No date";

              return (
                <AnimateOnScroll key={index} type="fade-up" delay={getDelay()}>
                  <div
                    className={`rounded-2xl ${bgColors[index % bgColors.length]
                      } p-6 h-full shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100`}
                  >
                    {/* Image */}
                    {imageUrl ? (
                      <div className="w-full h-48 mb-4 relative rounded-xl overflow-hidden">
                        <Image
                          src={imageUrl}
                          alt={post.featuredImage?.node?.altText || post.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div
                        className={`w-full h-48 mb-4 ${iconBg[index % iconBg.length]
                          } flex items-center justify-center rounded-xl`}
                      >
                        <span className="text-4xl">😊</span>
                      </div>
                    )}

                    {/* Category */}
                    {post.categories?.edges?.length > 0 && (
                      <div className="mb-3">
                        <Link href={`/category/${post.categories.edges[0].node.slug}`} className="px-3 py-1 text-xs rounded-full bg-pink-50 text-secondary font-medium font-poppins">
                          {post.categories.edges[0].node.name}
                        </Link>
                      </div>
                    )}

                    {/* Title */}
                    <Link
                      href={`/blog/${post.slug}`}
                      className="block text-xl font-semibold leading-snug mb-3 hover:text-secondary/60 transition-colors font-poppins"
                    >
                      {post.title}
                    </Link>

                    {/* Excerpt */}
                    {post.excerpt && (
                      <p
                        className="text-desc text-sm mb-4 line-clamp-3 font-poppins"
                        dangerouslySetInnerHTML={{ __html: post.excerpt }}
                      />
                    )}

                    {/* Footer */}
                    <div className="flex items-center justify-between text-sm text-desc font-poppins">
                      <div className="flex items-center gap-2">
                        <FaUserCircle className="text-xl text-desc" />
                        <span>{author}</span>
                      </div>
                      <span>{formattedDate}</span>
                    </div>
                  </div>
                </AnimateOnScroll>
              );
            })
          )}
        </div>

        {/* Load More */}
        {canLoadMore && (
          <div className="container mx-auto md:px-0 px-4 mt-10">
            <button
              onClick={handleLoadMore}
              className="bg-secondary hover:bg-primary md:text-lg text-sm font-semibold font-poppins text-white md:py-3 py-3 md:px-16 px-5 flex items-center gap-2 justify-center rounded-[50px] w-fit mx-auto"
            >
              Load More
            </button>
          </div>
        )}
      </section>
    </main>
  );
};

export default AllPosts;
