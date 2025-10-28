"use client";

import React from "react";
import Image from "next/image";
import { Post } from "@/lib/gql-types";
import AnimateOnScroll, { useAutoDelay } from "@/components/animation";

interface SinglePostProps {
  post: Post;
}

const SinglePost: React.FC<SinglePostProps> = ({ post }) => {
  const getDelay = useAutoDelay();

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <AnimateOnScroll type="fade-up" delay={getDelay()}>
          <h1 className="text-4xl md:text-6xl font-bold text-[#111827] mb-6 font-poppins">
            {post.title}
          </h1>
        </AnimateOnScroll>

        {post.featuredImage?.node?.sourceUrl && (
          <Image
            src={post.featuredImage.node.sourceUrl}
            alt={post.featuredImage.node.altText || post.title}
            width={800}
            height={450}
            className="w-full rounded-lg mb-6"
          />
        )}

        <AnimateOnScroll type="fade-up" delay={getDelay()}>
          <div
            className="service_Content mt-6"
            dangerouslySetInnerHTML={{ __html: post.content ?? "" }}
          />
        </AnimateOnScroll>

        <AnimateOnScroll type="fade-up" delay={getDelay()}>
          <p className="md:text-lg text-sm font-normal text-desc text-left mb-2">
            By {post.author?.node?.name} —{" "}
            {post.date ? new Date(post.date).toLocaleDateString() : ""}
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default SinglePost;
