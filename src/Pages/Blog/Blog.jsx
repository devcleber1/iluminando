import React, { useEffect } from 'react';
import { Link, useParams, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css';
import postsData from './blog.json';

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
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {postsData.map((post, index) => (
              <motion.div
                key={post.id}
                className="flex flex-col items-center text-center"
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
              >
                <Link to={`/blog/${post.id}`}>
                  <motion.img
                    src={post.images[0]}
                    alt={post.title}
                    className="w-full max-w-xs h-48 object-cover rounded-lg shadow-lg cursor-pointer sm:max-w-sm md:max-w-md"
                    whileHover={{ scale: 1.05 }}
                  />
                </Link>
                <Link
                  to={`/blog/${post.id}`}
                  className="mt-2 text-xl font-title text-yellow-500 font-semibold hover:underline sm:text-lg"
                >
                  {post.title}
                </Link>
                <p className="text-sm font-body text-gray-700 leading-relaxed sm:text-base">
                  Em: {post.date}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = postsData.find((p) => String(p.id) === id);

  if (!post) {
    return (
      <main className="font-body text-gray-800">
        <section className="bg-white py-20 px-6 text-center">
          <p className="text-lg font-body text-gray-700">Post não encontrado</p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 mt-4 font-menu font-semibold text-yellow-500 hover:text-yellow-600 transition-colors duration-300"
          >
            Voltar para o Blog
            <motion.span
              className="group-hover:translate-x-1 transition-transform duration-300"
            >
              ➜
            </motion.span>
          </Link>
        </section>
      </main>
    );
  }

  const otherPosts = postsData.filter((p) => String(p.id) !== id);

  return (
    <main className="font-body text-gray-800">
      <section className="bg-white py-20 px-6">
        <div className="container mx-auto px-4 sm:px-6 py-10">
          <motion.div
            className="flex flex-col lg:flex-row gap-6 sm:gap-8"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <div className="lg:w-2/3">
              <motion.button
                onClick={() => navigate('/blog')}
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 font-menu font-semibold text-yellow-500 hover:text-yellow-600 transition-colors duration-300 group mb-4"
              >
                Voltar para o Blog
                <motion.span
                  className="group-hover:translate-x-1 transition-transform duration-300"
                >
                  ➜
                </motion.span>
              </motion.button>
              <motion.img
                className="object-cover w-full h-64 sm:h-80 md:h-96 rounded-xl shadow-lg"
                src={post.images[0]}
                alt={post.title}
                whileHover={{ scale: 1.05 }}
              />
              <div className="mt-6">
                <h1 className="mt-4 text-2xl sm:text-3xl font-semibold text-gray-800 font-title">
                  {post.title}
                </h1>
                <div className="flex items-center mt-4">
                  <img
                    className="w-8 sm:w-10 h-8 sm:h-10 rounded-full object-cover"
                    src={post.authorImage}
                    alt={post.author}
                  />
                  <div className="ml-2 sm:ml-4">
                    <h2 className="text-sm sm:text-base text-gray-700 font-body">{post.author}</h2>
                    <p className="text-xs sm:text-sm text-gray-500 font-body">{post.authorRole}</p>
                    <p className="text-xs sm:text-sm text-gray-500 font-body mt-1">{post.authorBio}</p>
                  </div>
                </div>
                <div className="mt-6 space-y-6">
                  <p className="text-gray-700 font-body leading-relaxed">{post.content}</p>
                  {post.images.length > 1 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {post.images.slice(1).map((image, index) => (
                        <motion.img
                          key={index}
                          src={image}
                          alt={`${post.title} - Imagem ${index + 2}`}
                          className="w-full h-40 object-cover rounded-lg shadow-md"
                          whileHover={{ scale: 1.05 }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.1 * index }}
                        />
                      ))}
                    </div>
                  )}
                  {post.videos.length > 0 && (
                    <div className="mt-8 grid grid-cols-1 gap-4">
                      <h2 className="text-xl font-semibold text-gray-700 font-title">Vídeos Relacionados</h2>
                      {post.videos.map((video, index) => (
                        <div key={index} className="w-full">
                          <iframe
                            src={video}
                            title={`${post.title} - Vídeo ${index + 1}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-64 sm:h-72 rounded-lg shadow-md"
                          ></iframe>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 mt-6 sm:mt-8 lg:mt-0">
              {otherPosts.map((otherPost, index) => (
                <div key={otherPost.id} className="mt-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={`/blog/${otherPost.id}`}
                      className="block text-yellow-500 font-body text-sm sm:text-base hover:text-yellow-600 flex items-center gap-2 transition-colors duration-200"
                    >
                      {otherPost.title}
                      <motion.span
                        className="inline-block transition-transform duration-200 group-hover:translate-x-1"
                      >
                        ➜
                      </motion.span>
                    </Link>
                    <p className="text-xs text-gray-500 mt-1">{otherPost.date}</p>
                  </motion.div>
                  {index < otherPosts.length - 1 && (
                    <hr className="my-4 border-gray-300" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

const BlogApp = () => {
  const { id } = useParams();
  const location = useLocation();

  // Rolar para o topo quando a rota mudar
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]); // Dispara quando a rota mudar

  return <>{id ? <BlogPost /> : <BlogList />}</>;
};

export default BlogApp;