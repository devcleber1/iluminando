import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import projeto1 from '../../assets/bale.jpg';
import projeto2 from '../../assets/natalsol.jpg';
import projeto3 from '../../assets/quadrilha.jpg';

const projects = [
  {
    id: 3,
    titulo: 'Quadrilha Iluminando o Futuro',
    descricao:
      'Mais do que uma festa, nossa quadrilha é um momento de celebração da cultura, alegria e união das crianças com a comunidade. Através da dança, elas desenvolvem autoestima, trabalho em equipe e pertencimento. Seu apoio torna possível cada passo ensaiado, cada figurino preparado e cada sorriso compartilhado. Juntos, iluminamos sonhos!',
    imagem: projeto3,
  },
  {
    id: 2,
    titulo: 'Natal Solidário',
    descricao:
      'Em nome do Instituto Iluminando o Futuro, expressamos nossa profunda gratidão a todos que tornam possível nosso trabalho. Graças ao seu apoio, seguimos promovendo educação, acolhimento e oportunidades. Que a luz da solidariedade continue a nos guiar e inspirar mais pessoas a se unirem a essa missão transformadora.',
    imagem: projeto2,
  },
  {
    id: 1,
    titulo: 'Balé Iluminando o Futuro',
    descricao:
      'Através da dança, nossas crianças expressam sonhos, disciplina e superação. O projeto de balé vai muito além do palco — é um espaço de acolhimento, autoestima e esperança para meninas e meninos que encontram na arte um novo caminho. Com seu apoio, continuamos transformando vidas com leveza e beleza.',
    imagem: projeto1,
  },
];

export default function ProjectSection() {
  const [modalImg, setModalImg] = useState(null);

  const closeModal = () => setModalImg(null);

  return (
    <section className="bg-white py-20 px-6 font-body relative z-0">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-title text-center font-semibold text-yellow-500 mb-16">
          Nossos Projetos
        </h2>

        <div className="space-y-28">
          {projects.map(({ id, titulo, descricao, imagem }, index) => (
            <motion.div
              key={id}
              className={`flex flex-col md:flex-row items-center gap-10 ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, transition: { duration: 0.4 } }}
            >
              <motion.img
                src={imagem}
                alt={titulo}
                className="w-full md:w-1/2 h-auto rounded-2xl shadow-2xl object-cover cursor-pointer"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
                onClick={() => setModalImg(imagem)}
              />

              <div className="w-full md:w-1/2 text-center md:text-left">
                <h3 className="text-3xl font-title text-gray-900 mb-4">{titulo}</h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  {descricao}
                </p>
                <motion.a
  href="#apoie"
  whileHover={{ scale: 1.05 }}
  className="
    flex
    justify-center
    items-center
    max-w-xs
    w-full
    px-6
    py-4
    text-[16px]
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
    mx-auto md:mx-0
  "
>
  APOIE
</motion.a>

              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal da imagem */}
      <AnimatePresence>
        {modalImg && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.img
              src={modalImg}
              alt="Imagem em tela cheia"
              className="max-w-[90%] max-h-[90%] rounded-xl shadow-2xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
