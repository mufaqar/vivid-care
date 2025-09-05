import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import AnimateOnScroll from '../animation';

const blogPosts = [
  {
    category: 'Supported Living',
    categoryColor: 'bg-blue-100 text-blue-600',
    iconBg: 'bg-indigo-100',
    icon: '🧑‍🤝‍🧑',
    title: 'Mastering Personal and Emotional Growth',
    description:
      'Mastering Personal and Emotional Growth for a Thriving Life. Mastering personal and emotional growth is a lifelong journey...',
    author: 'John Smith',
    date: 'Dec 15, 2024',
    border: false,
  },
  {
    category: 'Dom Care',
    categoryColor: 'bg-green-100 text-green-600',
    iconBg: 'bg-green-100',
    icon: '😊',
    title: 'Mastering Personal and Emotional Growth',
    description:
      'Mastering Personal and Emotional Growth for a Thriving Life. Mastering personal and emotional growth is a lifelong journey...',
    author: 'Sarah Johnson',
    date: 'Dec 12, 2024',
    border: true,
  },
  {
    category: 'Caregiving',
    categoryColor: 'bg-orange-100 text-orange-600',
    iconBg: 'bg-orange-100',
    icon: '⭐',
    title: 'Mastering Personal and Emotional Growth',
    description:
      'Mastering Personal and Emotional Growth for a Thriving Life. Mastering personal and emotional growth is a lifelong journey...',
    author: 'Mike Chen',
    date: 'Dec 10, 2024',
    border: false,
  },
];

export default function BlogSection() {
  return (
    <section className="py-16 px-4 bg-white">
     
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-6xl font-bold font-playfair">
            Our <span className="text-[#F28AA9]">Blogs</span>
          </h2>
        </div>
    
      <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
       
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className={`rounded-2xl bg-white p-6 shadow-md transition-all duration-300 ${post.border ? '' : ''
                }`}
            >
              {/* Icon box */}
              <div
                className={`w-full h-40 rounded-xl flex items-center justify-center mb-4 ${post.iconBg}`}
              >
                <span className="text-4xl">{post.icon}</span>
              </div>

              {/* Category badge */}
              <div className={`inline-block mb-2 px-3 py-1 text-xs rounded-full font-medium font-poppins ${post.categoryColor}`}>
                {post.category}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold leading-tight mb-2 font-poppins">
                {post.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-md font-poppins mb-4">{post.description}</p>

              {/* Author + Date */}
              <div className="flex items-center justify-between text-sm text-gray-500 font-poppins">
                <div className="flex items-center gap-2">
                  <FaUserCircle className="text-xl" />
                  <span>{post.author}</span>
                </div>
                <span>{post.date}</span>
              </div>
            </div>
          ))}
      
      </div>
       
    </section>
  );
}
