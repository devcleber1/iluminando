import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import Ilumina from './Assets/ilumina.webp';
import Natal from './Assets/natal.webp';
import Quadrilha from './Assets/quadrilha.jpg';
import Flamengo from './Assets/flamengo.webp';
import Quadri from './Assets/quadri.jpeg';
import Quadrilha2 from './Assets/quadrilha2.jpeg';
import Passeio from './Assets/passeio.jpg';
import Bale from './Assets/bale.webp';
import BioPark from './Assets/biopark.jpg';
import Circo from './Assets/circo.jpg';
import Confra from './Assets/confra.jpg';

export default function Gallery() {
  const images = [
    { url: Ilumina, title: 'Iluminando', alt: 'Imagem representando o projeto Iluminando.' },
    { url: Natal, title: 'Natal', alt: 'Foto de evento de Natal, com decoração temática e crianças.' },
    { url: Quadrilha, title: 'Quadrilha', alt: 'Imagem de todas as crianças vestidas.' },
    { url: Quadrilha2, title: 'Quadrilha', alt: 'Imagem de todas as crianças vestidas.' },
    { url: Flamengo, title: 'Estádio Maracanã', alt: 'Foto das crianças no estádio Maracanã' },
    { url: Quadri, title: 'Festa Junina', alt: 'Foto das crianças vestidas, para a festa junina.' },
    { url: Bale, title: 'Balé', alt: 'Imagem do balé iluminando o futuro.' },
    { url: BioPark, title: 'BioPark', alt: 'Imagem de passeio em grupo pelo BioPark.' },
    { url: Circo, title: 'Circo', alt: 'Imagem do passeio no circo.' },
    { url: Confra, title: 'Confraternização', alt: 'Imagem da confraternização das crianças.' },
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = useCallback((index) => {
    setSelectedImage(index);
  }, []);

  return (
    <div className="min-h-screen box-border">
       <section className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 py-20 mt-30">
        <motion.h1
          className="text-5xl font-title font-semibold text-white text-center cursor-default select-none"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          whileHover={{
            scale: 1.05,
            textShadow: '0px 0px 8px rgba(255,255,255,0.9)',
          }}
        >
          Nossa Galaeria
        </motion.h1>

        <motion.p
          className="max-w-3xl mx-auto mt-6 text-lg md:text-xl text-yellow-100 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
         Momentos especiais que capturam o impacto do nosso trabalho na
         comunidade. Cada imagem conta uma história de transformação e
        </motion.p>
      </section>

      {/* Gallery Grid */}
      <section aria-labelledby="gallery-title" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative cursor-pointer rounded-lg overflow-hidden transition-transform duration-200 hover:scale-105"
              onClick={() => handleImageClick(index)}
            >
              <img
                src={image.url}
                alt={image.alt}
                loading="lazy"
                className="w-full h-64 object-cover sm:h-80 md:h-96"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-200 hover:opacity-100">
                <p className="text-white text-xl font-semibold sm:text-2xl">{image.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
          aria-hidden="true"
        >
          <div className="max-w-5xl w-full p-4 sm:p-6">
            <img
              src={images[selectedImage].url}
              alt={images[selectedImage].alt}
              loading="lazy"
              className="w-full max-h-[80vh] object-contain rounded-lg sm:max-h-[70vh] md:max-h-[75vh]"
            />
            <p className="text-white text-xl font-semibold text-center mt-4 sm:text-2xl">
              {images[selectedImage].title}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}