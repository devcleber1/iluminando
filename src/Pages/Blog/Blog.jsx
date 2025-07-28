import React from 'react';
import { Link, useParams, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css';

// Dados dos posts (mock)
const posts = [
  {
    id: 1,
    title: 'Como usar notas adesivas para resolução de problemas',
    date: '20 Outubro 2019',
    image: 'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80',
    content: 'Este é o conteúdo do post sobre como usar notas adesivas para resolução de problemas. Aqui você pode adicionar mais detalhes sobre o tema.',
    author: 'Amelia Anderson',
    authorRole: 'Lead Developer',
    authorImage: 'https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80'
  },
  {
    id: 2,
    title: 'Como usar notas adesivas para resolução de problemas',
    date: '20 Outubro 2019',
    image: 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80',
    content: 'Este é outro post sobre notas adesivas. Aqui você pode explicar diferentes técnicas e abordagens.',
    author: 'Amelia Anderson',
    authorRole: 'Lead Developer',
    authorImage: 'https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80'
  },
  {
    id: 3,
    title: 'Rotina matinal para melhorar seu humor',
    date: '25 Novembro 2020',
    image: 'https://images.unsplash.com/photo-1544654803-b69140b285a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80',
    content: 'Este post explora uma rotina matinal que pode ajudar a melhorar seu humor e produtividade.',
    author: 'Amelia Anderson',
    authorRole: 'Lead Developer',
    authorImage: 'https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80'
  },
  {
    id: 4,
    title: 'Todos os recursos que você deseja conhecer',
    date: '30 Setembro 2020',
    image: 'https://images.unsplash.com/photo-1530099486328-e021101a494a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1547&q=80',
    content: 'Neste post, detalhamos todos os recursos incríveis que você precisa conhecer.',
    author: 'Amelia Anderson',
    authorRole: 'Lead Developer',
    authorImage: 'https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80'
  },
  {
    id: 5,
    title: 'Espaço de trabalho minimalista para suas inspirações',
    date: '13 Outubro 2019',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1484&q=80',
    content: 'Um guia sobre como criar um espaço de trabalho minimalista para aumentar sua criatividade.',
    author: 'Amelia Anderson',
    authorRole: 'Lead Developer',
    authorImage: 'https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80'
  },
  {
    id: 6,
    title: 'O que você quer saber sobre Blockchain',
    date: '20 Outubro 2019',
    image: 'https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80',
    content: 'Este post aborda os conceitos básicos e avançados sobre blockchain.',
    author: 'Amelia Anderson',
    authorRole: 'Lead Developer',
    authorImage: 'https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80'
  }
];

// Variantes para animações
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

// Componente para a página de todos os blogs
const BlogList = () => {
  return (
    <main className="font-body text-gray-800">
      <section className="bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-300 py-20">
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
          Artigos & Notícias
        </motion.h1>
      </section>

      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => (
              <motion.div
                key={post.id}
                className="flex flex-col items-center text-center"
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
              >
                <motion.img
                  src={post.image}
                  alt={post.title}
                  className="w-full max-w-xs h-48 object-cover rounded-lg shadow-lg cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                />
                <Link
                  to={`/blog/${post.id}`}
                  className="mt-4 text-xl font-title text-yellow-500 font-semibold hover:underline"
                >
                  {post.title}
                </Link>
                <p className="text-sm font-body text-gray-700 leading-relaxed">
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

// Componente para a página individual de um blog
const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) {
    return (
      <main className="font-body text-gray-800">
        <section className="bg-white py-20 px-6 text-center">
          <p className="text-lg font-body text-gray-700">Post não encontrado</p>
        </section>
      </main>
    );
  }

  // Filtrar outros posts para links relacionados, excluindo o post atual
  const otherPosts = posts.filter(p => p.id !== post.id);

  return (
    <main className="font-body text-gray-800">
      <section className="bg-white py-20 px-6">
        <div className="container mx-auto px-6 py-10">
          <motion.div
            className="flex flex-col lg:flex-row gap-10"
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
                className="object-cover w-full h-80 rounded-xl shadow-lg"
                src={post.image}
                alt={post.title}
                whileHover={{ scale: 1.05 }}
              />
              <div className="mt-6">
                <h1 className="mt-4 text-3xl font-semibold text-gray-800 font-title">
                  {post.title}
                </h1>
                <div className="flex items-center mt-4">
                  <img
                    className="w-10 h-10 rounded-full object-cover"
                    src={post.authorImage}
                    alt={post.author}
                  />
                  <div className="ml-4">
                    <h2 className="text-sm text-gray-700 font-body">{post.author}</h2>
                    <p className="text-sm text-gray-500 font-body">{post.authorRole}</p>
                  </div>
                </div>
                <p className="mt-6 text-gray-700 font-body leading-relaxed">
                  {post.content}
                </p>
              </div>
            </div>
            <div className="lg:w-1/3 mt-10 lg:mt-0">
              {otherPosts.map((otherPost, index) => (
                <div key={otherPost.id} className="mt-4">
                  <Link
                    to={`/blog/${otherPost.id}`}
                    className="block text-yellow-500 font-body hover:text-yellow-600"
                  >
                    {otherPost.title}
                  </Link>
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

// Componente principal do aplicativo
const BlogApp = () => {
  const location = useLocation();
  const isBlogPost = location.pathname.includes('/blog/') && location.pathname !== '/blog';

  return <>{isBlogPost ? <BlogPost /> : <BlogList />}</>;
};

export default BlogApp;