import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, Book, Calculator, Volleyball, Baby, Award } from 'lucide-react';
import workshopsData from './workshops';

const iconMap = {
  Calculator,
  Book,
  Volleyball,
  Baby,
  Award,
};

const WorkshopCard = memo(({ id, title, icon: Icon, images, description, studentsInfo }) => (
  <motion.div
    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200 flex flex-col"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <img
      src={images[0]}
      alt={`Imagem representativa da oficina ${title}`}
      className="w-full object-cover"
      style={{ height: 300 }}
      loading="lazy"
      decoding="async"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
    <div className="p-6 flex flex-col flex-grow">
      <div className="flex items-center mb-3">
        <Icon className="w-6 h-6 text-yellow-500 mr-2" aria-hidden="true" />
        <h3 className="text-xl font-title font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-700 flex-grow">{description}</p>
      <div className="border-t border-gray-200 pt-4 mt-6 flex items-center justify-between">
        <span className="text-red-500 font-menu font-semibold">{studentsInfo}</span>
        <Link
          to={`/oficinas/${id}`}
          className="
            flex
            items-center
            text-yellow-500
            font-menu
            font-semibold
            hover:text-yellow-600
            focus-visible:outline
            focus-visible:outline-2
            focus-visible:outline-offset-2
            focus-visible:outline-yellow-500
            transition
            duration-300
            ease-in-out
          "
          aria-label={`Saiba mais sobre a oficina ${title}`}
        >
          Saiba mais <ArrowRight className="ml-1 w-5 h-5" aria-hidden="true" />
        </Link>
      </div>
    </div>
  </motion.div>
));

const WorkshopDetail = memo(({ workshop }) => (
  <motion.div
    className="bg-white rounded-lg shadow-lg p-8"
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3 }}
  >
    <div className="flex items-center mb-6 space-x-3">
      <workshop.icon className="w-8 h-8 text-yellow-500" aria-hidden="true" />
      <h2 className="text-3xl font-title font-semibold text-gray-900">{workshop.title}</h2>
    </div>
    <div className="text-gray-700 whitespace-pre-line mb-8 text-lg leading-relaxed">
      {workshop.infoText}
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 max-w-[900px] mx-auto justify-items-center">
      {workshop.images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`${workshop.title} - Imagem ${i + 1}`}
          className="object-cover rounded-lg shadow-md"
          style={{ width: 400, height: 400 }}
          loading="lazy"
          decoding="async"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      ))}
    </div>
    <div className="bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-300 p-6 rounded-lg border border-yellow-300 shadow-md text-center">
      <h4 className="text-xl font-menu font-semibold text-white mb-2">Quantidade de Alunos</h4>
      <p className="text-white text-3xl font-extrabold">{workshop.studentsInfo}</p>
    </div>
    <div className="bg-white p-6 rounded-lg border border-gray-200 mt-6">
      <h4 className="text-lg font-menu font-semibold text-gray-800 mb-1">Horário das Aulas</h4>
      <p className="text-gray-600">{workshop.schedule}</p>
    </div>
    <div className="mt-6 text-center">
      <Link
        to="/oficinas"
        className="
          inline-flex
          items-center
          gap-2
          font-menu
          font-semibold
          text-yellow-500
          hover:text-yellow-600
          focus-visible:outline
          focus-visible:outline-2
          focus-visible:outline-offset-2
          focus-visible:outline-yellow-500
          transition-colors
          duration-300
        "
        aria-label="Voltar para todas as oficinas"
      >
        Voltar para todas as oficinas
        <ArrowRight size={18} aria-hidden="true" />
      </Link>
    </div>
  </motion.div>
));

const Workshops = () => {
  const { id } = useParams();
  const workshops = workshopsData.map((workshop) => ({
    ...workshop,
    icon: iconMap[workshop.icon] || Book,
  }));
  const selectedWorkshop = id ? workshops.find((workshop) => workshop.id === id) : null;

  if (id && !selectedWorkshop) {
    return (
      <div className="min-h-screen bg-white relative font-body">
        <Helmet>
          <title>Oficina não encontrada - Iluminando o Futuro</title>
          <meta
            name="description"
            content="A oficina solicitada não foi encontrada. Confira nossas outras oficinas!"
          />
          <meta property="og:title" content="Oficina não encontrada - Iluminando o Futuro" />
          <meta
            property="og:description"
            content="A oficina solicitada não foi encontrada. Confira nossas outras oficinas!"
          />
          <meta property="og:image" content="https://seusite.com/assets/iluminando.png" />
          <meta property="og:url" content="https://seusite.com/oficinas" />
          <meta name="twitter:card" content="summary_large_image" />
        </Helmet>
        <section className="py-20 px-6 max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-title font-semibold text-gray-900">
            Oficina não encontrada
          </h2>
          <p className="text-gray-700 mt-4">
            A oficina solicitada não existe. Confira nossas outras oficinas!
          </p>
          <Link
            to="/oficinas"
            className="
              inline-flex
              items-center
              gap-2
              font-menu
              font-semibold
              text-yellow-500
              hover:text-yellow-600
              focus-visible:outline
              focus-visible:outline-2
              focus-visible:outline-offset-2
              focus-visible:outline-yellow-500
              transition-colors
              duration-300
              mt-6
            "
            aria-label="Ver todas as oficinas"
          >
            Ver todas as oficinas
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white relative font-body">
      <Helmet>
        <title>{selectedWorkshop ? selectedWorkshop.title : 'Nossas Oficinas'} - Iluminando o Futuro</title>
        <meta
          name="description"
          content={
            selectedWorkshop
              ? selectedWorkshop.description
              : 'Descubra nossas oficinas gratuitas para todas as idades, promovendo aprendizado e desenvolvimento artístico.'
          }
        />
        <meta
          property="og:title"
          content={`${selectedWorkshop ? selectedWorkshop.title : 'Nossas Oficinas'} - Iluminando o Futuro`}
        />
        <meta
          property="og:description"
          content={
            selectedWorkshop
              ? selectedWorkshop.description
              : 'Descubra nossas oficinas gratuitas para todas as idades, promovendo aprendizado e desenvolvimento artístico.'
          }
        />
        <meta property="og:image" content={selectedWorkshop ? selectedWorkshop.images[0] : 'https://seusite.com/assets/iluminando.png'} />
        <meta property="og:url" content={`https://seusite.com/oficinas${selectedWorkshop ? `/${selectedWorkshop.id}` : ''}`} />
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
          {selectedWorkshop ? selectedWorkshop.title : 'Nossas Oficinas'}
        </motion.h1>
        <motion.p
          className="max-w-3xl mx-auto mt-6 text-lg md:text-xl text-yellow-100 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {selectedWorkshop
            ? selectedWorkshop.description
            : 'Descubra nossos espaços de aprendizado e desenvolvimento artístico. Oficinas gratuitas para todas as idades.'}
        </motion.p>
      </section>

      {selectedWorkshop ? (
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <WorkshopDetail workshop={selectedWorkshop} />
        </section>
      ) : (
        <section className="py-20 px-6 max-w-7xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {workshops.map((workshop) => (
            <WorkshopCard key={workshop.id} {...workshop} />
          ))}
        </section>
      )}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Oficinas - Iluminando o Futuro',
            description: 'Lista de oficinas gratuitas oferecidas pelo Iluminando o Futuro.',
            url: 'https://seusite.com/oficinas',
            itemListElement: workshops.map((workshop, index) => ({
              '@type': 'Course',
              position: index + 1,
              name: workshop.title,
              description: workshop.description,
              image: workshop.images[0],
              provider: {
                '@type': 'Organization',
                name: 'Iluminando o Futuro',
              },
              url: `https://seusite.com/oficinas/${workshop.id}`,
            })),
          }),
        }}
      />
    </div>
  );
};

export default memo(Workshops);