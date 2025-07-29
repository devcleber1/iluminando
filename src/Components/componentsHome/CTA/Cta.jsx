import React from 'react';
import { motion } from 'framer-motion';
import crianca from '../../../assets/educa.jpg'; // Caminho real da imagem

export default function HeroSejaDiferenca() {
  return (
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

            <motion.a
              href="/doacoes"
              whileHover={{ scale: 1.05 }}
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
                hover:scale-105
                active:scale-95
                transition
                duration-300
                ease-in-out
                cursor-pointer
                select-none
                mx-auto
                md:mx-0
              "
            >
              DOE AGORA
            </motion.a>
          </div>
        </div>

        {/* Imagem */}
        <div className="w-full md:w-1/2 min-h-[300px] md:min-h-full shadow-inner md:shadow-[inset_8px_0_30px_-10px_rgba(0,0,0,0.3)]">
          <img
            src={crianca}
            alt="Criança"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    </div>
  );
}
