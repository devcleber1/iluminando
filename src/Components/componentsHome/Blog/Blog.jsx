import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import blogData from '../../../Pages/Blog/blog.json';

export default function BlogSection() {
  const navigate = useNavigate();

  const handleLeiaMore = () => {
    navigate('/blog');
  };

  const handleSaibaMais = (id) => {
    navigate(`/blog/${id}`);
  };

  const sortedBlogData = [...blogData].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <section className="bg-white py-12 px-6 font-body">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-5xl font-title font-semibold text-yellow-500">
            Nosso Blog
          </h2>
          <p className="mt-4 text-white text-[18px] max-w-lg mx-auto">
            Fique por dentro das últimas novidades, dicas e insights que preparamos especialmente para você. Descubra conteúdos que vão inspirar e ajudar no seu dia a dia.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {sortedBlogData.slice(0, 3).map(({ id, title, content, images, dateFormatted }) => (
            <article
              key={id}
              className="group rounded-lg overflow-hidden shadow-lg bg-white cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={images[0]}
                  alt={title}
                  className="object-cover object-center w-full h-64 lg:h-80"
                />
              </div>

              <div className="px-6 py-5">
                <h3 className="text-xl font-title font-semibold text-gray-900">{title}</h3>
                <p className="text-sm text-gray-500 my-2">{dateFormatted}</p>
                <hr className="w-24 my-4 border-yellow-400" />
                <p className="text-sm font-body text-gray-700">{content.substring(0, 150)}...</p>
                <button
                  onClick={() => handleSaibaMais(id)}
                  className="inline-flex items-center mt-4 text-yellow-400 underline font-semibold hover:text-yellow-700 transition-colors duration-300 bg-transparent border-0 cursor-pointer"
                >
                  Saiba Mais
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2 h-5 w-5 stroke-current transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <motion.button
            onClick={handleLeiaMore}
            whileHover={{ scale: 1.05 }}
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
              focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500
            "
            aria-label="Ver todos os blogs"
          >
            Ver todos os blogs
          </motion.button>
        </div>
      </div>
    </section>
  );
}