import React, { useState, memo } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import LoadingComponent from '../../Loading';
import crianca from '../../../assets/educa.jpg';

const HeroSejaDiferenca = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleDoeAgoraClick = () => {
    if (isLoading) return;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate('/doacoes');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1000); // Reduced for better UX
  };

  return (
    <>
      {isLoading && <LoadingComponent />}
      <div className="w-full font-body">
        {/* Frase no topo */}
        <div className="bg-yellow-500 py-6 px-4 text-center">
          <h2 className="text-white text-[clamp(1.5rem,3vw,2.5rem)] italic font-title">
            "Seja a diferença que você quer ver no mundo"
          </h2>
          <p className="text-white mt-2 font-menu font-semibold text-sm md:text-base">
            Mahatma Gandhi
          </p>
        </div>

        {/* Seção principal */}
        <section className="flex flex-col md:flex-row w-full min-h-[calc(100vh-96px)]">
          {/* Texto */}
          <div className="bg-white text-black flex flex-col items-center justify-center w-full md:w-1/2 py-16 px-6 text-center md:text-left shadow-xl md:shadow-none">
            <div className="max-w-md space-y-6">
              <h1 className="text-3xl md:text-4xl font-bold font-title text-yellow-500">
                SEJA UM AGENTE DE MUDANÇA
              </h1>
              <p className="text-lg font-body text-gray-800">
                Transforme a vida de centenas de crianças através da educação,
                esporte e cultura. Com o seu apoio, criamos oportunidades e
                despertamos talentos todos os dias.
              </p>
              <motion.button
                onClick={handleDoeAgoraClick}
                whileHover={{ scale: isLoading ? 1 : 1.05 }}
                className="
                  flex
                  justify-center
                  items-center
                  px-6
                  py-4
                  text-[16px]
                  font-menu
                  font-semibold
                  text-white
                  rounded-lg
                  bg-gradient-to-r
                  from-yellow-400
                  to-yellow-500
                  shadow-lg
                  hover:from-yellow-500
                  hover:to-yellow-600
                  active:scale-95
                  transition
                  duration-300
                  ease-in-out
                  cursor-pointer
                  select-none
                  mx-auto
                  md:mx-0
                  focus-visible:outline
                  focus-visible:outline-2
                  focus-visible:outline-offset-2
                  focus-visible:outline-yellow-500
                  disabled:opacity-50
                  disabled:cursor-not-allowed
                "
                aria-label="Doe agora para apoiar o Iluminando o Futuro"
                disabled={isLoading}
              >
                DOE AGORA
              </motion.button>
            </div>
          </div>

          {/* Imagem */}
          <div className="w-full md:w-1/2 min-h-[300px] md:min-h-full shadow-inner md:shadow-[inset_8px_0_30px_-10px_rgba(0,0,0,0.3)]">
            <img
              src={crianca}
              alt="Criança participando de atividade educativa do Iluminando o Futuro"
              className="w-full h-full object-cover"
              loading="eager"
              decoding="async"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            />
          </div>
        </section>

        {/* JSON-LD for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              name: 'Seja um Agente de Mudança - Iluminando o Futuro',
              description:
                'Transforme a vida de crianças através da educação, esporte e cultura com o Iluminando o Futuro. Doe agora e faça a diferença!',
              url: 'https://seusite.com/seja-diferenca',
              image: crianca,
              publisher: {
                '@type': 'Organization',
                name: 'Iluminando o Futuro',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://seusite.com/assets/iluminando.png',
                },
              },
            }),
          }}
        />
      </div>
    </>
  );
};

export default memo(HeroSejaDiferenca);