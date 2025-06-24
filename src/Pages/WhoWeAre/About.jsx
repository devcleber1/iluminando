import React from 'react';
import { motion } from 'framer-motion';
import imgMissao from '../../assets/quadro.jpg';
import imgVisao from '../../assets/doacao.jpg';
import imgValores from '../../assets/quadrilha.jpg';

export default function QuemSomos() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] },
    },
  };

  return (
    <main className="font-body text-gray-800">
      {/* Título */}
      <section className="bg-yellow-400 py-20">
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

      {/* Sobre a ONG */}
      <section className="bg-white py-20 px-6">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { duration: 1.2, delay: 0.3 },
            },
          }}
        >
          <p className="text-lg leading-relaxed text-gray-700">
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

      {/* Missão, Visão, Valores */}
      <section className="bg-white py-3 px-6 space-y-10">
        {[
          {
            title: 'Nossa Missão',
            desc: 'Promover a transformação de vidas por meio da educação, cultura e esporte, incentivando o desenvolvimento integral de crianças e jovens para a construção de um futuro melhor.',
            img: imgMissao,
          },
          {
            title: 'Nossa Visão',
            desc: 'Ser referência e apoio social a crianças e adolescentes da comunidade e de todo o estado, promovendo impacto positivo e sustentável. Buscamos expandir nosso alcance, fortalecendo parcerias e construindo uma rede de apoio que inspire e transforme realidades em longo prazo.',
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
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {/* Texto acima da imagem no mobile */}
            <div className="order-1 md:order-none w-full md:w-1/2 text-center">
              <motion.h3
                className="text-3xl font-title text-yellow-500 mb-4 font-semibold cursor-default select-none"
                whileHover={{ scale: 1.05, color: '#FBBF24' }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                {title}
              </motion.h3>
              <p className="text-lg text-gray-700 leading-relaxed">{desc}</p>
            </div>

            <motion.img
              src={img}
              alt={title}
              className="order-2 md:order-none w-full md:w-1/2 max-h-[800px] shadow-lg object-cover rounded-lg cursor-pointer"
              whileHover={{
                scale: 1.05,
                boxShadow: '0 15px 30px rgba(0,0,0,0.3)',
              }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
          </motion.div>
        ))}
      </section>

      {/* Linha do tempo */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-4xl font-title text-yellow-500 text-center mb-12 cursor-default select-none"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Nossa Trajetória
          </motion.h2>
          <ul className="relative border-l border-yellow-400 pl-6 space-y-10">
            {[
              { ano: '2015', evento: 'Fundado o Instituto Iluminando o Futuro.' },
              {
                ano: '2016',
                evento: 'Início das primeiras oficinas de balé e reforço escolar.',
              },
              { ano: '2018', evento: 'Criação do projeto Natal Solidário.' },
              { ano: '2020', evento: 'Ações de apoio durante a pandemia.' },
              {
                ano: '2023',
                evento: 'Ampliação dos projetos para novas comunidades.',
              },
            ].map(({ ano, evento }, idx) => (
              <motion.li
                key={idx}
                className="relative cursor-default rounded-md p-3 hover:bg-yellow-50"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: '0 8px 20px rgba(251, 191, 36, 0.4)',
                }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                <span className="absolute left-[-12px] top-1 w-4 h-4 bg-yellow-400 rounded-full border-2 border-white" />
                <h4 className="text-xl font-title font-semibold text-gray-900">
                  {ano}
                </h4>
                <p className="text-gray-700 text-base">{evento}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-yellow-400 py-20 px-6 text-white text-center">
        <motion.h2
          className="text-4xl font-title font-bold mb-6 cursor-default select-none"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Precisamos do seu apoio!
        </motion.h2>
        <motion.a
          href="#doar"
          className="inline-block px-6 py-4 rounded-lg bg-white text-yellow-500 font-semibold text-lg shadow-lg cursor-pointer"
          whileHover={{
            scale: 1.1,
            boxShadow: '0 0 20px rgba(253, 224, 71, 0.7)',
            textShadow: '0 0 10px rgba(253, 224, 71, 0.9)',
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          Doe e faça história
        </motion.a>
      </section>
    </main>
  );
}
