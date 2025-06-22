import HeroCarousel from '../../Components/HeroCarroseul/Hero';
import About from '../../Components/About/About';
import Workshop from  '../../Components/WorkShops/Workshop'
import Partners from '../../Components/Partners/Partnesrs';
import Blog from '../../Components/Blog/Blog';
import Projects from '../../Components/Projects/Projects';
export default function Home() {
  return (
    <>
      <HeroCarousel />
      <Partners />
      <About />    
      <Projects/> 
      <Workshop/>
      <Blog/>
    </>
  );
}
