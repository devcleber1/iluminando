import React, { useState, memo } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import LoadingComponent from '../../Loading';
import workshops from './data'; // Certifique-se de que o caminho está correto

const WorkshopCard = memo(({ workshop, handleLinkClick, isLoading }) => (
  <motion.div
    className="group transform transition duration-300 rounded-lg bg-white shadow-md hover:shadow-2xl hover:scale-[1.03]"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <div className="w-full aspect-[4/3] mb-6 overflow-hidden rounded-lg shadow-sm">
      <img
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        src={workshop.img}
        alt={workshop.alt}
        loading="lazy"
        decoding="async"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
    <div className="px-4 pb-6 text-center">
      <h5 className="mb-2 text-[clamp(1.25rem,2.5vw,1.75rem)] font-title font-bold leading-none text-gray-900">
        {workshop.title}
      </h5>
      <p className="text-[clamp(1rem,2vw,1.25rem)] text-gray-700 mb-4">
        {workshop.desc}
      </p>
      <motion.button
        onClick={() => handleLinkClick(`/oficinas/${workshop.id}`)}
        whileHover={{ scale: isLoading ? 1 : 1.05 }}
        className="
          inline-flex
          items-center
          gap-2
          font-menu
          font-semibold
          text-yellow-500
          hover:text-yellow-600
          transition-colors
          duration-300
          group
          disabled:opacity-50
          disabled:cursor-not-allowed
          focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500
        "
        aria-label={`Saiba mais sobre a oficina ${workshop.title}`}
        disabled={isLoading}
      >
        Saiba mais
        <motion.span
          className="group-hover:translate-x-1 transition-transform duration-300"
        >
          <ArrowRight size={18} aria-hidden="true" />
        </motion.span>
      </motion.button>
    </div>
  </motion.div>
));

const WorkshopsSection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    if (isLoading) return;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1000); // Reduced for better UX
  };

  return (
    <>
      {isLoading && <LoadingComponent />}
      <section className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 font-body">
        <div className="max-w-xl mb-10 sm:mx-auto sm:text-center lg:max-w-2xl">
          <h2 className="mb-4 text-[clamp(2rem,2.5vw,4rem)] font-title font-bold leading-tight text-yellow-500 text-center">
            Nossas Oficinas
          </h2>
          <h3 className="mb-4 text-[clamp(1.5rem,2vw,2.25rem)] font-title font-semibold text-gray-900 text-center">
            Desenvolvimento com criatividade e propósito
          </h3>
          <p className="text-[clamp(1rem,2vw,1.25rem)] text-gray-700 text-center">
            Descubra oficinas criativas, educativas e inclusivas que despertam o interesse e desenvolvem novas habilidades.
          </p>
        </div>

        <div className="grid gap-6 row-gap-10 lg:grid-cols-3">
          {workshops.map((workshop) => (
            <WorkshopCard
              key={workshop.id}
              workshop={workshop}
              handleLinkClick={handleLinkClick}
              isLoading={isLoading}
            />
          ))}
        </div>

        <div className="mt-10 text-center">
          <motion.button
            onClick={() => handleLinkClick('/oficinas')}
            whileHover={{ scale: isLoading ? 1 : 1.05 }}
            className="
              inline-block
              max-w-xs
              w-full
              px-5
              py-5
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
              disabled:opacity-50
              disabled:cursor-not-allowed
              focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500
            "
            aria-label="Ver todas as oficinas"
            disabled={isLoading}
          >
            Ver todas as oficinas
          </motion.button>
        </div>
      </section>
    </>
  );
};

export default memo(WorkshopsSection);