import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight,
  Drama,
  Book,
  X,
} from 'lucide-react'

import workshopsData from './workshops'

const iconMap = {
  Book,
  Drama,
}

export default function Workshops() {
  const [selectedWorkshop, setSelectedWorkshop] = useState(null)

  const workshops = workshopsData.map((workshop) => ({
    ...workshop,
    icon: iconMap[workshop.icon] || Book, // fallback caso não encontre
  }))

  function closeModal() {
    setSelectedWorkshop(null)
  }

  return (
    <div className="min-h-screen bg-white relative font-body">
      <Helmet>
        <title>Nossas Oficinas</title>
        <meta
          name="description"
          content="Descubra nossas oficinas gratuitas para todas as idades"
        />
      </Helmet>

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
          Nossas Oficinas
        </motion.h1>

        <motion.p
          className="max-w-3xl mx-auto mt-6 text-lg md:text-xl text-yellow-100 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Descubra nossos espaços de aprendizado e desenvolvimento artístico.
          Oficinas gratuitas para todas as idades.
        </motion.p>
      </section>

      <section className="py-20 px-6 max-w-7xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {workshops.map(({ id, title, icon: Icon, images, description }) => (
          <motion.div
            key={id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200 flex flex-col"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={images[0]}
              alt={`Imagem de ${title}`}
              className="w-full object-cover"
              style={{ height: 300 }}
            />

            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center mb-3">
                <Icon className="w-6 h-6 text-yellow-500 mr-2" />
                <h3 className="text-xl font-title font-semibold text-gray-900">
                  {title}
                </h3>
              </div>
              <p className="text-gray-700 flex-grow">{description}</p>
              <div className="border-t border-gray-200 pt-4 mt-6 flex items-center justify-end">
                <button
                  onClick={() =>
                    setSelectedWorkshop(workshops.find((w) => w.id === id))
                  }
                  className="flex items-center text-yellow-500 font-menu font-semibold hover:text-yellow-600 focus:outline-none transition duration-300 ease-in-out"
                >
                  Saiba mais <ArrowRight className="ml-1 w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      <AnimatePresence>
        {selectedWorkshop && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
            onClick={closeModal}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-lg shadow-lg max-w-[80vw] max-h-[90vh] overflow-y-auto p-8 relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 focus:outline-none"
                aria-label="Fechar modal"
              >
                <X size={28} />
              </button>

              <div className="flex items-center mb-6 space-x-3">
                <selectedWorkshop.icon className="w-8 h-8 text-yellow-500" />
                <h2 className="text-3xl font-title font-semibold text-gray-900">
                  {selectedWorkshop.title}
                </h2>
              </div>

              <div className="text-gray-700 whitespace-pre-line mb-8 text-lg leading-relaxed">
                {selectedWorkshop.infoText}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 max-w-[900px] mx-auto justify-items-center">
                {selectedWorkshop.images.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`${selectedWorkshop.title} imagem ${i + 1}`}
                    className="object-cover rounded-lg shadow-md"
                    style={{
                      width: 400,
                      height: 400,
                    }}
                  />
                ))}
              </div>

              <div className="bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-300 p-6 rounded-lg border border-yellow-300 shadow-md text-center">
                <h4 className="text-xl font-menu font-semibold text-white mb-2">
                  Quantidade de Alunos
                </h4>
                <p className="text-white text-3xl font-extrabold">
                  {selectedWorkshop.studentsInfo}
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200 mt-6">
                <h4 className="text-lg font-menu font-semibold text-gray-800 mb-1">
                  Horário das Aulas
                </h4>
                <p className="text-gray-600">{selectedWorkshop.schedule}</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
