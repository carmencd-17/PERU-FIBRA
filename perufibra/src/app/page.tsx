import Image from "next/image";
import { Header } from "./components/Header";
import Hero from './components/Hero'; 
import Plans from './components/Plans';
import Features from './components/Features';
import HeroLead from './components/HeroLead';
import Footer from './components/Footer';  

export default function Home() {
  return (
    <div>
          <Header/>
          <Hero /> 
          <Plans /> 
          <Features /> 
          <HeroLead /> 
          <Footer /> 

    </div>
  );
}
