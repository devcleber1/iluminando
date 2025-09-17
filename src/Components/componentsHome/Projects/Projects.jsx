import React, { useState, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import LoadingComponent from '../../Loading';

import projeto1 from '../../../assets/bale.jpg';
import projeto2 from '../../../assets/natalsol.jpg';
import projeto3 from '../../../assets/quadrilha.jpg';

const projects = [
  {
    id: 3,
    titulo: 'Quadrilha Iluminando o Futuro',
    descricao:
      'Mais do que uma festa, nossa quadrilha é um momento de celebração da cultura, alegria e união das crianças com a comunidade. Através da dança, elas desenvolvem autoestima, trabalho em equipe e pertencimento. Seu apoio torna possível cada passo ensaiado, cada figurino preparado e cada sorriso compartilhado. Juntos, iluminamos sonhos!',
    imagem: projeto3,
    alt: 'Crianças dançando quadrilha em evento cultural',
  },
  {
    id: 2,
    titulo: 'Natal Solidário',
    descricao:
      'Em nome do Instituto Iluminando o Futuro, expressamos nossa profunda gratidão a todos que tornam possível nosso trabalho. Graças ao seu apoio, seguimos promovendo educação, acolhimento e oportunidades. Que a luz da solidariedade continue a nos guiar e inspirar mais pessoas a se unirem a essa missão transformadora.',
    imagem: projeto2,
    alt: 'Evento de Natal Solidário com distribuição de presentes',
  },
  {
    id: 1,
    titulo: 'Balé Iluminando o Futuro',
    descricao:
      'Através da dança, nossas crianças expressam sonhos, disciplina e superação. O projeto de balé vai muito além do palco — é um espaço de acolhimento, autoestima e esperança para meninas e meninos que encontram na arte um novo caminho. Com seu apoio, continuamos transformando vidas com leveza e beleza.',
    imagem: projeto1,
    alt: 'Crianças praticando balé em aula',
  },
];

const ProjectCard = memo(({ project, index, handleApoieClick, isLoading, setModalImg }) => (
  <motion.div
    key={project.id}
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
      src={project.imagem}
      alt={project.alt}
      className="w-full md:w-1/2 h-auto rounded-2xl shadow-2xl object-cover cursor-pointer"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.4 }}
      onClick={() => setModalImg(project.imagem)}
      loading={index === 0 ? 'eager' : 'lazy'}
      decoding="async"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
    />
    <div className="w-full md:w-1/2 text-center md:text-left">
      <h3 className="text-3xl font-title text-gray-900 mb-4">{project.titulo}</h3>
      <p className="text-gray-700 text-lg leading-relaxed mb-6">{project.descricao}</p>
      <motion.button
        onClick={handleApoieClick}
        whileHover={{ scale: isLoading ? 1 : 1.05 }}
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
        aria-label={`Apoie o projeto ${project.titulo}`}
        disabled={isLoading}
      >
        APOIE
      </motion.button>
    </div>
  </motion.div>
));

const ProjectSection = () => {
  const [modalImg, setModalImg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const closeModal = () => setModalImg(null);

  const handleApoieClick = () => {
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
      <section className="bg-white py-20 px-6 font-body relative z-0">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-title text-center font-semibold text-yellow-500 mb-16">
            Nossos Projetos
          </h2>
          <div className="space-y-28">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                handleApoieClick={handleApoieClick}
                isLoading={isLoading}
                setModalImg={setModalImg}
              />
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
              role="dialog"
              aria-label="Imagem em tela cheia"
            >
              <motion.img
                src={modalImg}
                alt="Imagem em tela cheia"
                className="max-w-[90%] max-h-[90%] rounded-xl shadow-2xl"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
                loading="lazy"
                decoding="async"
              />
              <button
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500"
                onClick={closeModal}
                aria-label="Fechar modal"
              >
                <XMarkIcon className="w-6 h-6" aria-hidden="true" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* JSON-LD for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ItemList',
              itemListElement: projects.map((project, index) => ({
                '@type': 'CreativeWork',
                position: index + 1,
                name: project.titulo,
                description: project.descricao,
                image: project.imagem,
                url: `https://seusite.com/projetos/${project.id}`,
              })),
            }),
          }}
        />
      </section>
    </>
  );
};

export default memo(ProjectSection);