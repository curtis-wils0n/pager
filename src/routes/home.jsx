import Hero from "../components/Hero";
import HeroFeatures from "../components/HeroFeatures"
import HeroExamples from "../components/HeroExamples"
import HomeNavbar from './HomeNavbar';

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