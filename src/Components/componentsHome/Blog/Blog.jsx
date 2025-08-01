import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Adicionado Link
import { ArrowRight } from 'lucide-react';
import postsData from '../../../Pages/Blog/blog.json'; // Verifique o caminho

export default function BlogSection() {
  return (
    <section className="bg-white py-12 px-6 font-body">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-5xl font-title font-semibold text-yellow-500">
            Nosso Blog
          </h2>
          <p className="mt-4 text-gray-600 text-[18px] max-w-lg mx-auto">
            Fique por dentro das últimas novidades, dicas e insights que preparamos especialmente para você. Descubra conteúdos que vão inspirar e ajudar no seu dia a dia.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {postsData.map(({ id, title, content, images, author, authorRole, authorImage }) => (
            <motion.article
              key={id}
              whileHover={{
                scale: 1.03,
                y: -8,
                boxShadow: '0 15px 30px rgba(0,0,0,0.1)',
              }}
              transition={{ type: 'spring', stiffness: 250 }}
              className="group rounded-lg overflow-hidden shadow-md bg-white cursor-pointer"
            >
              <div className="relative">
                <img
                  src={images[0]}
                  alt={title}
                  className="object-cover object-center w-full h-64 lg:h-80"
                />
                <div className="absolute bottom-0 left-0 right-0 flex items-center bg-white p-3 backdrop-blur-sm bg-opacity-90">
                  <img
                    src={authorImage}
                    alt={author}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <p className="text-sm font-menu font-medium text-gray-900">{author}</p>
                    <p className="text-xs font-menu text-gray-600">{authorRole}</p>
                  </div>
                </div>
              </div>

              <div className="px-6 py-5">
                <h3 className="text-xl font-title font-semibold text-gray-900">{title}</h3>
                <hr className="w-24 my-4 border-yellow-400" />
                <p className="text-sm font-body text-gray-700">
                  {content.substring(0, 100) + '...'}
                </p>

                <motion.div whileHover={{ scale: 1.05 }}>
                  <Link
                    to={`/blog/${id}`}
                    className="inline-flex items-center gap-2 mt-4 font-menu font-semibold text-yellow-500 hover:text-yellow-600 transition-colors duration-300 group"
                    onClick={() => console.log(`Navigating to /blog/${id}`)} // Depuração
                  >
                    Saiba mais
                    <motion.span className="group-hover:translate-x-1 transition-transform duration-300">
                      <ArrowRight size={18} />
                    </motion.span>
                  </Link>
                </motion.div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-12">
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              to="/blog"
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
                hover:scale-105
                active:scale-95
                transition
                duration-300
                ease-in-out
                cursor-pointer
                select-none
                mx-auto
              "
            >
              Leia mais
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}