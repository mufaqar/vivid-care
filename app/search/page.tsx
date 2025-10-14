import Banner from '@/components/SearchPage/banner'
import ServiceAbout from '@/components/SearchPage/serviceAbout'
import TabsSlider from '@/components/SearchPage/tabsSlider'
import React from 'react'

export default function SearchPage() {
  return (
    <main>
      <Banner />
      <TabsSlider />
      <ServiceAbout />
    </main>
  )
}
