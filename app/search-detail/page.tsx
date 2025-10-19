import Banner from '@/components/SearchDetail/banner'
import ServiceAbout from '@/components/SearchDetail/serviceAbout'
import TabsSlider from '@/components/SearchDetail/tabsSlider'
import React from 'react'

export default function SearchPage() {
  return (
    <main>
      <Banner />
      {/* <TabsSlider /> */}
      <ServiceAbout />
    </main>
  )
}
