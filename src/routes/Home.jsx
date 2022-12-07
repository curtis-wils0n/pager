import Hero from '../components/Hero/Hero';
import HeroFeatures from '../components/Hero/HeroFeatures';
import HeroExamples from '../components/Hero/HeroExamples';
import HomeNavbar from '../components/HomeNavbar';

import '../styles/homepage.css'

export default function Home() {
  return (
    <>
    <HomeNavbar />
      <Hero />
      <HeroFeatures />
      <HeroExamples />
    </>
  );  
}