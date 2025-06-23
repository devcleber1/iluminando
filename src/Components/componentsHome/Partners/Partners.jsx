import React from 'react';
import { motion } from 'framer-motion';

import Flamengo from '../../../assets/flamengo.png';
import Cufa from '../../../assets/cufa.png';
import Aguas from '../../../assets/aguasdorio.png';
import Uni from '../../../assets/unissuam.png';

const partners = [
  { src: Flamengo, alt: 'Flamengo' },
  { src: Cufa, alt: 'Cufa' },
  { src: Aguas, alt: 'Águas do Rio' },
  { src: Uni, alt: 'UNISUAM' },
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
  return (
    <section className="bg-gray-50 py-12 px-4 my-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 items-center justify-center">
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
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
                className="cursor-pointer w-full max-w-[600px] max-h-16 md:max-h-20 object-contain grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition duration-300 ease-in-out"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
