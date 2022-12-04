import Hero from "../components/Hero";
import HeroFeatures from "../components/HeroFeatures"
import HeroExamples from "../components/HeroExamples"

import '../styles/homepage.css'

export default function Home() {
  return (
    <>
      <Hero />
      <HeroFeatures />
      <HeroExamples />
    </>
  );  
}