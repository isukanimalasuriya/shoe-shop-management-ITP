import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import OurPolicy from '../components/OurPolicy'
const Home = () => {
  return (
    <div>
      <Hero />
      <div>
        <LatestCollection/>
      </div>
        <OurPolicy/>
      
    </div>
  )
}

export default Home
