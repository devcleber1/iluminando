import React, { memo } from 'react';
import HeroCarousel from '../../Components/componentsHome/HeroCarroseul/Hero';
import About from '../../Components/componentsHome/About/About';
import Workshop from '../../Components/componentsHome/WorkShops/Workshop';
import Partners from '../../Components/componentsHome/Partners/Partners';
import Blog from '../../Components/componentsHome/Blog/Blog';
import Projects from '../../Components/componentsHome/Projects/Projects';
import CTA from '../../Components/componentsHome/CTA/Cta';
import Whatsaap from '../../Components/componentsHome/Whatsaap/Whatsaap';
import Social from '../../Components/componentsHome/SocialMedia/Social';
import { Helmet } from 'react-helmet-async';

const Home = () => (
  <>
    <Helmet>
      <title>Iluminando o Futuro - Home</title>
      <meta
        name="description"
        content="Transformamos vidas através da educação, cultura e esporte. Conheça nossos projetos, oficinas e iniciativas para construir um futuro melhor!"
      />
      <meta property="og:title" content="Iluminando o Futuro - Home" />
      <meta
        property="og:description"
        content="Transformamos vidas através da educação, cultura e esporte. Conheça nossos projetos, oficinas e iniciativas para construir um futuro melhor!"
      />
      <meta property="og:image" content="https://seusite.com/assets/iluminando.png" />
      <meta property="og:url" content="https://seusite.com" />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
    <HeroCarousel />
    <About />
    <Partners />
    <Projects />
    <Workshop />
    <Blog />
    <CTA />
    <Whatsaap />
    <Social />
  </>
);

export default memo(Home);