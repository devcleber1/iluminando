import React, { useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const BlogList = () => {
  return (
    <main className="font-body text-gray-800">
      <section className="bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-300 py-20">
        <motion.h1
          className="text-5xl font-title font-bold text-white text-center cursor-default select-none sm:text-4xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          whileHover={{
            scale: 1.05,
            textShadow: '0px 0px 8px rgba(255,255,255,0.9)',
          }}
        >
          Artigos & Notícias
        </motion.h1>
      </section>

      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.p
            className="text-lg font-body text-gray-700"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            Em breve, traremos conteúdos incríveis com novidades, dicas e insights para você. Fique de olho!
          </motion.p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 mt-4 font-menu font-semibold text-yellow-500 hover:text-yellow-600 transition-colors duration-300"
          >
            Voltar para a Página Inicial
            <motion.span
              className="group-hover:translate-x-1 transition-transform duration-300"
            >
              ➜
            </motion.span>
          </Link>
        </div>
      </section>
    </main>
  );
};

const BlogPost = () => {
  return (
    <main className="font-body text-gray-800">
      <section className="bg-white py-20 px-6 text-center">
        <motion.p
          className="text-lg font-body text-gray-700"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          Em breve, traremos conteúdos incríveis com novidades, dicas e insights para você. Fique de olho!
        </motion.p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 mt-4 font-menu font-semibold text-yellow-500 hover:text-yellow-600 transition-colors duration-300"
        >
          Voltar para a Página Inicial
          <motion.span
            className="group-hover:translate-x-1 transition-transform duration-300"
          >
            ➜
          </motion.span>
        </Link>
      </section>
    </main>
  );
};

const BlogApp = () => {
  const { id } = useParams();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return <>{id ? <BlogPost /> : <BlogList />}</>;
};

export default BlogApp;