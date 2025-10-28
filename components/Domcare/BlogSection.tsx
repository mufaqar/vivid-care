"use client";

import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Post } from "@/lib/gql-types";
import Link from "next/link";
import Image from "next/image";
import AnimateOnScroll, { useAutoDelay } from "../animation";

interface BlogSectionProps {
  data: Post[];
}

export default function BlogSection({ data }: BlogSectionProps) {
  const getDelay = useAutoDelay();
  const bgColors = [
    "bg-[#DCFCE7]",
    "bg-[#F3E8FF]",
    "bg-[#FFEDD5]",
  ]
  const iconBg = [
    "bg-[#16A34A]",
    "bg-[#9333EA]",
    "bg-[#EA580C]",
  ]
  return (
    <section className="py-16 px-4 bg-white">
      {/* Section Heading */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <AnimateOnScroll type="fade-up" delay={getDelay()}>
          <h2 className="text-4xl md:text-6xl font-bold font-playfair">
            Our <span className="text-[#F28AA9]">Blogs</span>
          </h2>
        </AnimateOnScroll>
      </div>

      {/* Blog Cards Grid */}
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">

        {data?.map((post, index) => {
          const imageUrl = post.featuredImage?.node?.sourceUrl;
          const author = post.author?.node?.name || "Unknown Author";
          const formattedDate = post.date
            ? new Date(post.date).toLocaleDateString()
            : "No date";

          return (
            <AnimateOnScroll key={index} type="fade-up" delay={getDelay()}>
              <div className={`rounded-2xl ${bgColors[index % bgColors.length]} p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100`}
              >
                {/* Featured Image */}
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
                  <div className={`w-full h-48 mb-4 ${iconBg[index % iconBg.length]} flex items-center justify-center rounded-xl`}>
                    <span className="text-4xl">😊</span>
                  </div>
                )}

                {/* Category */}
                {post.categories?.edges && post.categories.edges.length > 0 && (
                  <div className="mb-3">
                    <span className="px-3 py-1 text-xs rounded-full bg-pink-50 text-secondary font-medium font-poppins">
                      {post.categories.edges[0].node.name}
                    </span>
                  </div>
                )}

                {/* Title */}
                <Link
                  href={`/blog/${post.slug}`}
                  className="block text-xl font-semibold leading-snug mb-3 hover:text-secondary/60 transition-colors font-poppins"
                >
                  {post.title}
                </Link>

                {/* Excerpt (trimmed content) */}
                {post.excerpt && (
                  <p
                    className="text-desc text-sm mb-4 line-clamp-3 font-poppins"
                    dangerouslySetInnerHTML={{ __html: post.excerpt }}
                  />
                )}

                {/* Author + Date */}
                <div className="flex items-center justify-between text-sm text-desc font-poppins mt-auto">
                  <div className="flex items-center gap-2">
                    <FaUserCircle className="text-xl text-desc" />
                    <span>{author}</span>
                  </div>
                  <span>{formattedDate}</span>
                </div>
              </div>
            </AnimateOnScroll>
          );
        })}

      </div>
    </section>
  );
}
