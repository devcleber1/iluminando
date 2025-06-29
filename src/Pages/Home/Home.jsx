import HeroCarousel from '../../Components/componentsHome/HeroCarroseul/Hero';
import About from '../../Components/componentsHome/About/About';
import Workshop from  '../../Components/componentsHome/WorkShops/Workshop'
import Partners from '../../Components/componentsHome/Partners/Partners';
import Blog from '../../Components/componentsHome/Blog/Blog';
import Projects from '../../Components/componentsHome/Projects/Projects';
import CTA from '../../Components/componentsHome/CTA/Cta';
export default function Home() {
  return (
    <>
      <HeroCarousel />
      <About />  
      <Partners />  
      <Projects/> 
      <Workshop/>
      <Blog/>
      <CTA/>  
    </>
  );
}
