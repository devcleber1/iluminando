import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useLocation, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Drama,
  BellElectric,
  BookOpen,
  BookOpenCheck,
  LoaderPinwheel,
  Book
} from 'lucide-react'

export default function Workshops() {
  const location = useLocation()
  const workshopId = new URLSearchParams(location.search).get('id')

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] },
    },
  }

  const workshops = [
    {
      id: 'reforço-escolar',
      title: 'Reforço Escolar',
      icon: Book,
      image: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Oferecemos aulas de reforço escolar para crianças e adolescentes...',
      impact: '40+ alunos estudando',
      fullDescription: `Nossa oficina de reforço escolar oferece uma experiência completa...`,
      schedule: 'Terças e Quartas, Grupo 1: 17:30h às 19h, e Grupo 2: 19h às 20:30'
    },
    {
      id: 'artes',
      title: 'Arte Cênica e Audiovisual',
      icon: Drama,
      image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80',
      description: 'Nossa oficina de Arte Cênica e Audiovisual oferece aos participantes...',
      impact: '40+ crianças participando',
      fullDescription: `Explore sua criatividade através das artes cênicas e audiovisuais...`,
      schedule: 'Segundas e Quintas, 17h às 19h'
    },
    {
      id: 'muay-thai',
      title: 'Muay Thai',
      icon: BellElectric,
      image: 'https://plus.unsplash.com/premium_photo-1664908491902-9f1d943ff131?w=500&auto=format&fit=crop&q=60',
      description: 'Nossa oficina de Muay Thai oferece aulas para crianças e adolescentes...',
      impact: '40+ crianças praticando',
      fullDescription: `Desenvolva suas habilidades físicas e mentais no Muay Thai...`,
      schedule: 'Quintas, 20:45 às 21:45'
    },
    {
      id: 'alfabetização',
      title: 'Alfabetização',
      icon: BookOpen,
      image: 'https://plus.unsplash.com/premium_photo-1664528356132-dbfbafdcf9d6?w=500&auto=format&fit=crop&q=60',
      description: 'Nossa ONG tem como missão promover a alfabetização...',
      impact: '20+ crianças se alfabetizando',
      fullDescription: `Explore o aprendizado de leitura e escrita de maneira divertida...`,
      schedule: 'Segundas e Quintas, 16h às 17:30'
    },
    {
      id: 'reforço-matemática',
      title: 'Reforço de Matemática',
      icon: BookOpenCheck,
      image: 'https://plus.unsplash.com/premium_photo-1724266846299-2c4e63cdccd3?w=500&auto=format&fit=crop&q=60',
      description: 'Nossa ONG é focada em oferecer reforço de matemática...',
      impact: '40+ crianças estudando',
      fullDescription: `Aprenda conceitos matemáticos de forma clara e eficaz...`,
      schedule: 'Segundas, Grupo 1: 19h às 20h, e Grupo 2: 20h às 21h'
    },
    {
      id: 'futebol',
      title: 'Futebol',
      icon: LoaderPinwheel,
      image: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?w=500&auto=format&fit=crop&q=60',
      description: 'Nossa ONG utiliza o futebol como ferramenta de inclusão social...',
      impact: '40+ crianças praticando',
      fullDescription: `Aperfeiçoe suas técnicas e habilidades no futebol...`,
      schedule: 'Quartas, 20:15 às 21:15'
    }
  ]

  const selectedWorkshop = workshopId
    ? workshops.find(w => w.id === workshopId)
    : null

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>
          {selectedWorkshop
            ? `${selectedWorkshop.title} - Oficinas`
            : 'Nossas Oficinas'}
        </title>
        <meta
          name="description"
          content={
            selectedWorkshop
              ? selectedWorkshop.description
              : 'Descubra nossas oficinas gratuitas para todas as idades'
          }
        />
      </Helmet>

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
          Nossas Oficinas
        </motion.h1>

        <motion.p
          className="max-w-3xl mx-auto mt-6 text-lg md:text-xl text-gray-100 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Descubra nossos espaços de aprendizado e desenvolvimento artístico.
          Oficinas gratuitas para todas as idades.
        </motion.p>
      </section>

      {selectedWorkshop ? (
        <motion.section
          className="py-20 px-6 max-w-3xl mx-auto"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <img
            src={selectedWorkshop.image}
            alt={`Imagem de ${selectedWorkshop.title}`}
            className="w-full h-64 md:h-80 object-cover rounded-lg mb-8"
          />
          <div className="flex items-center mb-4">
            <selectedWorkshop.icon className="w-8 h-8 text-yellow-600 mr-3" />
            <h2 className="text-3xl font-bold">{selectedWorkshop.title}</h2>
          </div>
          <div className="inline-block bg-pink-200 text-pink-800 rounded-full px-4 py-1 mb-6 font-semibold">
            {selectedWorkshop.impact}
          </div>
          <p className="text-gray-700 text-lg mb-8">{selectedWorkshop.description}</p>

          <div className="bg-gray-50 p-6 rounded-lg mb-6 whitespace-pre-line text-gray-700">
            <h3 className="text-xl font-semibold mb-3">Sobre a Oficina</h3>
            <div>{selectedWorkshop.fullDescription}</div>
          </div>

          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-1">
              Horário das Aulas
            </h4>
            <p className="text-gray-600">{selectedWorkshop.schedule}</p>
          </div>
        </motion.section>
      ) : (
        <section className="py-20 px-6 max-w-7xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {workshops.map(({ id, title, icon: Icon, image, description, impact }) => (
           <motion.div
           key={id}
           className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200 flex flex-col"
           initial={{ opacity: 0, y: 40 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
         >
         
              <img
                src={image}
                alt={`Imagem de ${title}`}
                className="w-full h-48 sm:h-40 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center mb-3">
                  <Icon className="w-6 h-6 text-yellow-600 mr-2" />
                  <h3 className="text-xl font-semibold">{title}</h3>
                </div>
                <p className="text-gray-600 flex-grow">{description}</p>
                <div className="border-t border-gray-200 pt-4 mt-6 flex items-center justify-between">
                  <p className="text-red-600 font-semibold">{impact}</p>
                  <Link
                    to={`/oficinas?id=${id}`}
                    className="flex items-center text-yellow-600 font-semibold hover:text-yellow-800"
                  >
                    Saiba mais <ArrowRight className="ml-1 w-5 h-5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </section>
      )}
    </div>
  )
}
