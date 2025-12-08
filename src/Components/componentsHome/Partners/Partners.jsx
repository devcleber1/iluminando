import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import Flamengo from '../../../assets/flamengo.png';
import Cufa from '../../../assets/cufa.png';
import Aguas from '../../../assets/aguasdorio.png';
import Uni from '../../../assets/unissuam.png';
import Cristo from '../../../assets/cristo.png';
import Bestacai from '../../../assets/bestacai.png';
import Vero from '../../../assets/vero.png';
import Rs from '../../../assets/rs.png';

const partners = [
  { src: Flamengo, alt: 'Flamengo' },
  { src: Cufa, alt: 'Cufa' },
  { src: Aguas, alt: 'Águas do Rio' },
  { src: Uni, alt: 'UNISUAM' },
  { src: Cristo, alt: 'Cristo Redentor' },
  { src: Bestacai, alt: 'Bestacai' },
  { src: Vero, alt: 'Vero' },
  { src: Rs, alt: 'RS' },
];

// Animação elegante com escala, opacidade e subida
const animatedVariant = {
  hidden: { opacity: 0, scale: 0.85, y: 20 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
      type: 'spring',
    },
  }),
};

export default function PartnersSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [showColors, setShowColors] = useState(false);

  useEffect(() => {
    // Verificar se é mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Handler para scroll
    const handleScroll = () => {
      if (isMobile) {
        setShowColors(true);
        // Resetar após a animação
        const timer = setTimeout(() => setShowColors(false), 300);
        return () => clearTimeout(timer);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMobile]);

  return (
    <section className="bg-gray-50 py-12 px-4 my-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 items-center justify-center">
          {partners.map((partner, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              variants={animatedVariant}
              viewport={{ once: true }}
              className="flex justify-center items-center"
            >
              <motion.img
                src={partner.src}
                alt={partner.alt}
                animate={isMobile && showColors ? { filter: 'grayscale(0%)' } : { filter: 'grayscale(100%)' }}
                transition={{ duration: 0.3 }}
                whileHover={{
                  scale: 1.05,
                  filter: 'grayscale(0%)',
                  transition: { duration: 0.3 },
                }}
                className="cursor-pointer w-full max-w-[140px] sm:max-w-[160px] lg:max-w-[180px] max-h-16 sm:max-h-20 lg:max-h-24 object-contain opacity-70 sm:opacity-70 sm:hover:opacity-100 transition duration-300 ease-in-out"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
