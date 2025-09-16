import React from 'react';
import { motion } from 'framer-motion';
import imgMissao from '../../assets/quadro.jpg';
import imgVisao from '../../assets/doacao.jpg';
import imgValores from '../../assets/quadrilha.jpg';
import ilumina from '../../assets/ilumina.webp';
import natalsolid from '../../assets/natalsolid.jpg'
import festaj23 from '../../assets/festajunina23.jpg'
import oficina from '../../assets/oficina.webp'
import quadrilha from '../../Pages/Gallery/Assets/quadrilha2.jpeg'
import natal from  '../../assets/natal.webp'
import bale from '../../assets/bale.jpg'
import quadrilha25 from '../../assets/quadrilha.jpg'
import videoEntrevista from '../../video/entrevista.mp4';

export default function QuemSomos() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const timelineChildVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const timelineItems = [
    { ano: '2023', evento: 'Início do projeto Iluminando o Futuro.', img: festaj23 },
    { ano: '2023', evento: 'Início do projeto Natal Solidário.', img: natalsolid },
    { ano: '2024', evento: 'Fundação do Instituto Iluminando o Futuro.', img: ilumina },
    { ano: '2024', evento: 'Arraiá Iluminando o Futuro – Ano 2', img: quadrilha },
    { ano: '2024', evento: 'Abertura Oficial das Oficinas – Plantando Saberes', img: oficina },
    { ano: '2024', evento: 'Natal Solidário Iluminando o Futuro II.', img: natal },
    { ano: '2025', evento: 'Nasce o Balé Iluminando o Futuro', img: bale },
    { ano: '2025', evento: 'Arraiá Iluminando o Futuro – Ano 3', img: quadrilha25 },
  ];

  return (
    <main className="font-body text-gray-800">
      <section className="bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-300 py-20 mt-30">
        <motion.h1
          className="text-5xl font-title font-bold text-white text-center cursor-default select-none"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          whileHover={{
            scale: 1.05,
            textShadow: '0px 0px 8px rgba(255,255,255,0.9)',
          }}
        >
          Quem Somos
        </motion.h1>
      </section>

      <section className="bg-white py-20 px-6">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <p className="text-lg font-body leading-relaxed text-gray-700">
            Iluminando o Futuro é uma organização dedicada ao desenvolvimento
            social e à transformação de vidas. Acreditamos no poder do
            conhecimento para mudar realidades e construir um futuro mais
            brilhante.
            <br />
            <br />
            Com programas inovadores e atividades que engajam e inspiram,
            buscamos converter o tempo livre em momentos de aprendizado
            significativo. Estamos comprometidos em ajudar pessoas a
            desenvolverem novas habilidades, aumentar sua autoestima e
            conquistar seus objetivos.
          </p>
        </motion.div>
      </section>

      <section className="bg-white py-20 px-6">
        <motion.h2
          className="text-4xl font-title font-bold text-yellow-500 text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Conheça Nossa História: Uma Entrevista Inspiradora
        </motion.h2>
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <video
            src={videoEntrevista}
            controls
            className="w-full aspect-video h-80 sm:h-96 md:h-[500px] rounded-lg shadow-lg object-cover"
            poster={ilumina}
          >
            Desculpe, seu navegador não suporta a reprodução de vídeos.
          </video>
        </motion.div>
      </section>

      <section className="bg-white py-3 px-6 space-y-10">
        {[
          {
            title: 'Nossa Missão',
            desc: 'Promover a transformação de vidas por meio da educação, cultura e esporte...',
            img: imgMissao,
          },
          {
            title: 'Nossa Visão',
            desc: 'Ser referência e apoio social a crianças e adolescentes da comunidade...',
            img: imgVisao,
          },
          {
            title: 'Nossos Valores',
            desc: 'Autonomia, Dedicação, Alegria, Superação, Ética',
            img: imgValores,
          },
        ].map(({ title, desc, img }, index) => (
          <motion.div
            key={title}
            className={`flex flex-col md:flex-row items-center gap-10 ${
              index % 2 === 1 ? 'md:flex-row-reverse' : ''
            }`}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <div className="order-1 md:order-none w-full md:w-1/2 text-center">
              <h3 className="text-3xl font-title text-yellow-500 mb-4 font-semibold">{title}</h3>
              <p className="text-lg font-body text-gray-700 leading-relaxed">{desc}</p>
            </div>

            <motion.img
              src={img}
              alt={title}
              className="order-2 md:order-none w-full md:w-1/2 max-h-[800px] shadow-lg object-cover rounded-lg cursor-pointer"
              whileHover={{ scale: 1.05 }}
            />
          </motion.div>
        ))}
      </section>

      <section className="bg-yellow-400 py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto relative">
          <motion.h2
            className="text-4xl font-title text-white text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Nossa Trajetória
          </motion.h2>

          <div className="hidden md:block absolute left-1/2 top-24 -translate-x-1/2 h-[calc(100%-6rem)] border-l-4 border-white" />

          <div className="flex flex-col space-y-12">
            {timelineItems.map(({ ano, evento, img }, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={idx}
                  className={`flex flex-col items-center gap-6 md:flex-row md:justify-between ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                  initial="hidden"
                  animate="visible"
                  variants={fadeInUp}
                >
                  <motion.div
                    className={`w-full md:w-1/2 flex flex-col items-center text-center px-4`}
                    variants={timelineChildVariants}
                  >
                    <h4 className="text-xl font-title text-white font-semibold mb-2">{ano}</h4>
                    <p className="text-black text-base font-body max-w-md">{evento}</p>
                  </motion.div>

                  <div className="relative md:w-0 hidden md:block">
                    <div
                      className="w-6 h-6 bg-white rounded-full border-4 border-yellow-400 shadow-md -mr-4 relative"
                      style={{ left: '-11px' }}
                    />
                  </div>

                  <motion.div
                    className="w-full md:w-1/2 flex justify-center"
                    variants={timelineChildVariants}
                  >
                    <motion.img
                      src={img}
                      alt={`Imagem ${ano}`}
                      className="w-full max-w-[400px] sm:max-w-[450px] md:max-w-[80%] lg:max-w-[70%] max-h-[300px] object-cover rounded-lg shadow-md"
                      whileHover={{ scale: 1.05 }}
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-6 text-center">
        <motion.h2
          className="text-4xl font-title font-bold mb-6 text-yellow-500"
          animate={{ opacity: 1, y: 0 }}
        >
          Precisamos do seu Apoio!
        </motion.h2>
        <motion.a
          href="/doacoes"
          className="inline-block px-6 py-4 rounded-lg
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
                text-white 
                font-menu
                text-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Doe e faça história
        </motion.a>
      </section>
    </main>
  );
}