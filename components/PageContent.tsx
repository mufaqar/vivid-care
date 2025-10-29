"use client";

import React from 'react'
import AnimateOnScroll, { useAutoDelay } from './animation';

const PageContent = ({ page }: any) => {
    const getDelay = useAutoDelay();
    return (
        <main>
            <section className="min-h-[60vh] bg-gradient-to-r from-[#EAF4FC] to-[#FDEAF3] flex items-center justify-center px-4">
                <div className="container mx-auto md:px-0 px-4">
                    <AnimateOnScroll type="fade-up" delay={getDelay()}>
                        <h1 className="text-4xl md:text-6xl font-bold text-title text-center mb-6 font-poppins">
                            {page?.title}
                        </h1>
                    </AnimateOnScroll>
                </div>
            </section>
            <section className="py-16">
                <div className="container mx-auto md:px-0 px-4">
                    <AnimateOnScroll type="fade-up" delay={getDelay()}>
                        <div
                            className="service_Content"
                            dangerouslySetInnerHTML={{ __html: page.content || "" }}
                        />
                    </AnimateOnScroll>
                </div>
            </section>
        </main>
    )
}

export default PageContent