import LocContent from '@/components/Locations/LocContent'
import { getReviewsData } from '@/lib/api/getHomeData';
import React from 'react'

export default async function page() {
    const Reviews = await getReviewsData();
  return (
    <main>
        <LocContent reviews={Reviews} />
    </main>
  )
}
