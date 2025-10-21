import React from "react";
import { notFound } from "next/navigation";
import Banner from "@/components/SearchDetail/banner";
import ServiceAbout from "@/components/SearchDetail/serviceAbout";
import TabsSlider from "@/components/SearchDetail/tabsSlider";
import client from "@/lib/apollo-client";
import { GET_SERVICE_BY_SLUG } from "@/lib/queries/getServiceBySlug";
import { GetServiceBySlugQuery } from "@/lib/gql-types";

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  // ✅ Fetch from GraphQL
  const { data } = await client.query<GetServiceBySlugQuery>({
    query: GET_SERVICE_BY_SLUG,
    variables: { slug: params.slug },
    fetchPolicy: "no-cache",
  });

  const service = data?.service;

  // ✅ If no service found, show 404
  if (!service) return notFound();

  // ✅ Build tabs (or you can map related services here)
  const serviceTabs = [
    {
      title: service.title,
      content: (
        <div className="space-y-4">
          <div
            className="text-lg text-desc"
            dangerouslySetInnerHTML={{ __html: service.content }}
          />
          {service.featuredImage?.node?.sourceUrl && (
            <img
              src={service.featuredImage.node.sourceUrl}
              alt={service.featuredImage.node.altText || service.title}
              className="rounded-lg w-full h-[400px] object-cover"
            />
          )}
        </div>
      ),
    },
  ];

  return (
    <main>
      <Banner />
      <TabsSlider data={serviceTabs} activeServiceTitle={service.title} />
      <ServiceAbout />
    </main>
  );
}
