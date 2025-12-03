"use client";

import React from "react";
import { CategoryNode, Post } from "@/lib/gql-types";
import AnimateOnScroll, { useAutoDelay } from "@/components/animation";
import SideBar from "./SideBar";

interface SinglePostProps {
  post: Post;
  categories: CategoryNode[];
  latestPosts: any[];
  tags: string[];
  instagramPosts: string[];
}

const SinglePost: React.FC<SinglePostProps> = ({
  post,
  categories,
  latestPosts,
  tags,
  instagramPosts,
}) => {
  const getDelay = useAutoDelay();

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 flex md:flex-row flex-col gap-7">
        <div className="md:w-2/3 w-full">
          <div
            className="service_Content mt-6"
            dangerouslySetInnerHTML={{ __html: post.content ?? "" }}
          />

          <AnimateOnScroll type="fade-up" delay={getDelay()}>
            <p className="md:text-lg text-sm font-normal text-desc text-left mb-2">
              By {post.author?.node?.name} —{" "}
              {post.date ? new Date(post.date).toLocaleDateString() : ""}
            </p>
          </AnimateOnScroll>
        </div>
        <SideBar
          cat={categories}
          latestPosts={latestPosts}
          tags={tags}
          instagramPosts={instagramPosts}
        />
      </div>
    </section>
  );
};

export default SinglePost;
