import React from 'react';
import { motion } from 'framer-motion';
import imgMissao from '../../assets/quadro.jpg';
import imgVisao from '../../assets/doacao.jpg';
import imgValores from '../../assets/quadrilha.jpg';

export default function QuemSomos() {
  return (
    <main className="font-body text-gray-800">
      {/* Título */}
      <section className="bg-yellow-400 py-20">
        <h1 className="text-5xl font-title font-bold text-white text-center">Quem Somos</h1>
      </section>

      {/* Sobre a ONG */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-lg leading-relaxed text-gray-700">
          Iluminando o Futuro é uma organização dedicada ao desenvolvimento social e à transformação de vidas. Acreditamos no poder do conhecimento para mudar realidades e construir um futuro mais brilhante.

Com programas inovadores e atividades que engajam e inspiram, buscamos converter o tempo livre em momentos de aprendizado significativo. Estamos comprometidos em ajudar pessoas a desenvolverem novas habilidades, aumentar sua autoestima e conquistar seus objetivos.


          </p>
        </div>
      </section>

      {/* Missão, Visão, Valores */}
      <section className="bg-white py-3 px-6 space-y-3">
        {[{
          title: 'Nossa Missão',
          desc: 'Promover a transformação de vidas por meio da educação, cultura e esporte, incentivando o desenvolvimento integral de crianças e jovens para a construção de um futuro melhor.',
          img: imgMissao
        }, {
          title: 'Nossa Visão',
          desc: 'Ser referência e apoio social a crianças e adolescentes da comunidade e de todo o estado, promovendo impacto positivo e sustentável. Buscamos expandir nosso alcance, fortalecendo parcerias e construindo uma rede de apoio que inspire e transforme realidades em longo prazo.',
          img: imgVisao
        }, {
          title: 'Nossos Valores',
          desc: 'Autonomia, Dedicação, Alegria, Superação, Ética',
          img: imgValores
        }].map(({ title, desc, img }, index) => (
          <motion.div
            key={title}
            className={`flex flex-col md:flex-row items-center gap-10 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src={img}
              alt={title}
              className="w-full md:w-1/2 max-h-[1000px] shadow-lg object-cover"
            />
            <div className="w-full md:w-1/2 text-center">
              <h3 className="text-3xl font-title text-yellow-500 mb-4 font-semibold">{title}</h3>
              <p className="text-lg text-gray-700 leading-relaxed">{desc}</p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Linha do tempo */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-title text-yellow-500 text-center mb-12">Nossa Trajetória</h2>
          <ul className="relative border-l border-yellow-400 pl-6 space-y-10">
            {[
              { ano: '2015', evento: 'Fundado o Instituto Iluminando o Futuro.' },
              { ano: '2016', evento: 'Início das primeiras oficinas de balé e reforço escolar.' },
              { ano: '2018', evento: 'Criação do projeto Natal Solidário.' },
              { ano: '2020', evento: 'Ações de apoio durante a pandemia.' },
              { ano: '2023', evento: 'Ampliação dos projetos para novas comunidades.' },
            ].map(({ ano, evento }, idx) => (
              <li key={idx} className="relative">
                <span className="absolute left-[-12px] top-1 w-4 h-4 bg-yellow-400 rounded-full border-2 border-white" />
                <h4 className="text-xl font-title font-semibold text-gray-900">{ano}</h4>
                <p className="text-gray-700 text-base">{evento}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-yellow-400 py-20 px-6 text-white text-center">
        <h2 className="text-4xl font-title font-bold mb-6">Precisamos do seu apoio!</h2>
        <a
          href="#doar"
          className="inline-block px-6 py-4 rounded-lg bg-white text-yellow-500 font-semibold text-lg shadow-lg hover:scale-105 hover:text-yellow-600 transition"
        >
          Doe e faça história
        </a>
      </section>
    </main>
  );
}
