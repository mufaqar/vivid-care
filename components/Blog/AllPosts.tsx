"use client";

import React from 'react'
import AnimateOnScroll, { useAutoDelay } from '../animation';
import { Post } from '@/lib/gql-types';
import Image from 'next/image';
import Link from 'next/link';
import { FaUserCircle } from 'react-icons/fa';


interface BlogSectionProps {
    data: Post[];
}

const AllPosts = ({ data }: BlogSectionProps) => {
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
        <main>
            <section className="min-h-[60vh] bg-gradient-to-r from-[#EAF4FC] to-[#FDEAF3] flex items-center justify-center px-4">
                <div className="container mx-auto md:px-0 px-4">
                    <AnimateOnScroll type="fade-up" delay={getDelay()}>
                        <h1 className="text-4xl md:text-6xl font-bold text-title text-center mb-6 font-poppins">
                            Our Blog
                        </h1>
                    </AnimateOnScroll>
                </div>
            </section>
            <section className="py-16 px-4 bg-white">
                {/* Blog Cards Grid */}
                <div className="container mx-auto md:px-0 px-4 grid md:grid-cols-3 gap-8">
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
        </main>
    )
}

export default AllPosts