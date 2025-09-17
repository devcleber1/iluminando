import React, { useState, useCallback, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { X } from 'lucide-react';
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

const images = [
  { url: Ilumina, title: 'Iluminando', alt: 'Imagem representando o projeto Iluminando.' },
  { url: Natal, title: 'Natal', alt: 'Foto de evento de Natal, com decoração temática e crianças.' },
  { url: Quadrilha, title: 'Quadrilha', alt: 'Imagem de crianças vestidas para a quadrilha.' },
  { url: Quadrilha2, title: 'Quadrilha', alt: 'Imagem de crianças vestidas para a quadrilha.' },
  { url: Flamengo, title: 'Estádio Maracanã', alt: 'Foto das crianças no estádio Maracanã.' },
  { url: Quadri, title: 'Festa Junina', alt: 'Foto das crianças vestidas para a festa junina.' },
  { url: Bale, title: 'Balé', alt: 'Imagem do projeto de balé Iluminando o Futuro.' },
  { url: BioPark, title: 'BioPark', alt: 'Imagem de passeio em grupo pelo BioPark.' },
  { url: Circo, title: 'Circo', alt: 'Imagem do passeio ao circo.' },
  { url: Confra, title: 'Confraternização', alt: 'Imagem da confraternização das crianças.' },
];

const ImageCard = memo(({ image, index, handleImageClick }) => (
  <motion.div
    className="relative cursor-pointer rounded-lg overflow-hidden transition-transform duration-200 hover:scale-105"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: index * 0.1 }}
    onClick={() => handleImageClick(index)}
    role="button"
    tabIndex={0}
    aria-label={`Ver imagem ${image.title}`}
    onKeyDown={(e) => e.key === 'Enter' && handleImageClick(index)}
  >
    <img
      src={image.url}
      alt={image.alt}
      className="w-full h-64 object-cover sm:h-80 md:h-96"
      loading={index < 3 ? 'eager' : 'lazy'}
      decoding="async"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-200 hover:opacity-100">
      <p className="text-white text-xl font-semibold sm:text-2xl">{image.title}</p>
    </div>
  </motion.div>
));

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = useCallback((index) => {
    setSelectedImage(index);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedImage(null);
  }, []);

  return (
    <div className="min-h-screen box-border">
      <Helmet>
        <title>Galeria - Iluminando o Futuro</title>
        <meta
          name="description"
          content="Momentos especiais que capturam o impacto do nosso trabalho na comunidade. Veja nossa galeria de fotos!"
        />
        <meta property="og:title" content="Galeria - Iluminando o Futuro" />
        <meta
          property="og:description"
          content="Momentos especiais que capturam o impacto do nosso trabalho na comunidade. Veja nossa galeria de fotos!"
        />
        <meta property="og:image" content={images[0].url} />
        <meta property="og:url" content="https://seusite.com/galeria" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <section className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 py-20">
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
          Nossa Galeria
        </motion.h1>
        <motion.p
          className="max-w-3xl mx-auto mt-6 text-lg md:text-xl text-yellow-100 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Momentos especiais que capturam o impacto do nosso trabalho na comunidade. Cada imagem conta
          uma história de transformação.
        </motion.p>
      </section>

      <section aria-labelledby="gallery-title" className="py-20 px-6 max-w-7xl mx-auto">
        <h2 id="gallery-title" className="sr-only">Galeria de Imagens</h2>
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <ImageCard key={index} image={image} index={index} handleImageClick={handleImageClick} />
          ))}
        </div>
      </section>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            role="dialog"
            aria-label={`Imagem ${images[selectedImage].title}`}
          >
            <div
              className="max-w-5xl w-full p-4 sm:p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[selectedImage].url}
                alt={images[selectedImage].alt}
                className="w-full max-h-[80vh] object-contain rounded-lg sm:max-h-[70vh] md:max-h-[75vh]"
                loading="lazy"
                decoding="async"
              />
              <p className="text-white text-xl font-semibold text-center mt-4 sm:text-2xl">
                {images[selectedImage].title}
              </p>
            </div>
            <button
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500"
              onClick={closeModal}
              aria-label="Fechar modal"
            >
              <X className="w-6 h-6" aria-hidden="true" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ImageGallery',
            name: 'Galeria - Iluminando o Futuro',
            description: 'Momentos especiais que capturam o impacto do trabalho do Iluminando o Futuro na comunidade.',
            url: 'https://seusite.com/galeria',
            image: images.map((image) => ({
              '@type': 'ImageObject',
              url: image.url,
              name: image.title,
              description: image.alt,
            })),
          }),
        }}
      />
    </div>
  );
};

export default memo(Gallery);