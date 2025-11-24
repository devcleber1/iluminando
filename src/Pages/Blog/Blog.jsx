import React, { useEffect, useState } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css';
import blogData from './blog.json';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const BlogList = () => {
  const sortedPosts = [...blogData].sort((a, b) => new Date(b.date) - new Date(a.date));

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
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {sortedPosts.map((post) => (
              <motion.article
                key={post.id}
                className="rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative">
                  <img
                    src={post.images[0]}
                    alt={post.title}
                    className="object-cover object-center w-full h-64"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-title font-semibold text-gray-900 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">{post.dateFormatted}</p>
                  <p className="text-gray-700 mb-4 line-clamp-3">
                    {post.content.substring(0, 150)}...
                  </p>
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-yellow-500 font-semibold hover:text-yellow-600 transition-colors duration-300"
                  >
                    Saiba Mais
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-2 h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/"
              className="inline-flex items-center gap-2 font-menu font-semibold text-yellow-500 hover:text-yellow-600 transition-colors duration-300"
            >
              Voltar para a Página Inicial
              <motion.span className="group-hover:translate-x-1 transition-transform duration-300">
                ➜
              </motion.span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const foundPost = blogData.find((p) => p.id === parseInt(id));
    setPost(foundPost);
  }, [id]);

  if (!post) {
    return (
      <main className="font-body text-gray-800">
        <section className="bg-white py-20 px-6 text-center">
          <h2 className="text-3xl font-title font-semibold text-gray-900">
            Notícia não encontrada
          </h2>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 mt-4 font-menu font-semibold text-yellow-500 hover:text-yellow-600 transition-colors duration-300"
          >
            Voltar para Blogs
            <span>➜</span>
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="font-body text-gray-800">
      <section className="bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-300 py-20">
        <motion.h1
          className="text-5xl font-title font-bold text-white text-center cursor-default select-none sm:text-3xl px-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {post.title}
        </motion.h1>
        <p className="text-center text-white mt-4 font-body">{post.dateFormatted}</p>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Featured Image */}
          <motion.img
            src={post.images[0]}
            alt={post.title}
            className="w-full h-96 object-cover rounded-lg shadow-lg mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          />

          {/* Main Content */}
          <motion.div
            className="mb-12"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <p className="text-lg text-gray-700 leading-relaxed mb-6 whitespace-pre-wrap">
              {post.content}
            </p>
          </motion.div>

          {/* Additional Images */}
          {post.images.length > 1 && (
            <motion.div
              className="mb-12"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <h3 className="text-2xl font-title font-semibold text-gray-900 mb-6">
                Galeria de Imagens
              </h3>
              <div className="grid gap-6 md:grid-cols-2">
                {post.images.slice(1).map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Imagem ${index + 2}`}
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
                ))}
              </div>
            </motion.div>
          )}

          {/* Videos */}
          {post.videos && post.videos.length > 0 && (
            <motion.div
              className="mb-12"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <h3 className="text-2xl font-title font-semibold text-gray-900 mb-6">
                Vídeos
              </h3>
              <div className="grid gap-6 md:grid-cols-2">
                {post.videos.map((video, index) => (
                  <div
                    key={index}
                    className="relative w-full pb-[56.25%] rounded-lg overflow-hidden shadow-md"
                  >
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src={video}
                      title={`Vídeo ${index + 1}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Back Link */}
          <div className="text-center">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 font-menu font-semibold text-yellow-500 hover:text-yellow-600 transition-colors duration-300"
            >
              ← Voltar para Blogs
            </Link>
          </div>
        </div>
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