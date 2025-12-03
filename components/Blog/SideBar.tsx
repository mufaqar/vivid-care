import React from "react";
import Image from "next/image";
import { FaRegClock } from "react-icons/fa";
import { ICategoryNode } from "@/lib/gql-types";
import Link from "next/link";

interface SidebarProps {
    cat: ICategoryNode[];
    latestPosts: any[];
    tags: string[];
    instagramPosts: string[];
}

const SideBar = ({
    cat,
    latestPosts,
    tags,
    instagramPosts,
}: SidebarProps) => {
    
    return (
        <aside className="md:w-1/3 w-full bg-white p-6">
            {/* Search */}
            <div className="mb-8 p-6 bg-white shadow-sm rounded-md">
                <input
                    type="text"
                    placeholder="Search Here"
                    className="w-full p-3 bg-[#F4F5F7] rounded-md focus:outline-none"
                />
            </div>

            {/* Categories */}
            <div className="mb-8 bg-white shadow-sm p-6 rounded-md">
                <h3 className="text-xl font-semibold text-title mb-3">Categories</h3>
                <hr className="text-[#E5E7EB]" />

                <ul className="space-y-3 mt-4">
                    {cat?.length ? (
                        <ul className="flex flex-wrap">
                            {/* Category List */}
                            {cat.map((category: ICategoryNode) => (
                                <li key={category.slug}>
                                    <Link
                                        href={`/category/${category.slug}`}
                                        className={`inline-block text-sm px-5 py-2 rounded-sm mr-2 mb-2 transition-all duration-300 bg-primary/20 text-title hover:bg-secondary hover:text-white`}
                                    >
                                        {category.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    ) : null}
                </ul>
            </div>

            {/* Latest Posts */}
            <div className="mb-8 bg-white shadow-sm p-6 rounded-md">
                <h3 className="text-lg font-bold text-title mb-3">Latest Posts</h3>
                <hr className="text-[#E5E7EB]" />
                <div className="space-y-6 mt-4">
                    {latestPosts.map((post) => (
                        <div key={post.id} className="flex items-start space-x-4">
                            <div className="relative w-20 h-20 bg-gray-200 rounded-md flex-shrink-0">
                                <Image
                                    src={post?.featuredImage?.node?.sourceUrl || '/images/CareForSection.png'}
                                    alt={post.title}
                                    fill
                                    className="rounded-md object-cover"
                                />
                            </div>
                            <div>
                                <p className="text-xs text-description flex items-center mb-1">
                                    <FaRegClock className="mr-1" /> {post.date}
                                </p>
                                <p className="text-sm font-semibold text-title hover:text-description cursor-pointer">
                                    {post.title}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Tags */}
            <div className="mb-8 bg-white shadow-sm p-6 rounded-md">
                <h3 className="text-lg font-bold text-title mb-3">Tags</h3>
                <hr className="text-[#E5E7EB]" />
                <div className="flex flex-wrap gap-2 mt-4">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-4 py-2 bg-gray-100 text-title text-xs font-medium rounded-md hover:bg-secondary hover:text-white cursor-pointer transition-colors duration-200"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Instagram */}
            <div className="mb-8 bg-white shadow-sm p-6 rounded-md">
                <h3 className="text-lg font-bold text-title mb-3">Instagram Posts</h3>
                <hr className="text-[#E5E7EB]" />
                <div className="grid grid-cols-3 gap-2 mt-4">
                    {instagramPosts.map((src, index) => (
                        <div
                            key={index}
                            className="relative w-full h-20 bg-gray-200 rounded-md overflow-hidden"
                        >
                            <Image
                                src={src}
                                alt={`Instagram post ${index + 1}`}
                                fill
                                className="rounded-md object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </aside>
    );
};

export default SideBar;
