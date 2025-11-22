import React from 'react';
import { useNavigate } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: 'O que você quer saber sobre UI',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis fugit dolorum amet dolores praesentium, alias nam? Tempore',
    image:
      'https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80',
    authorName: 'Tom Hank',
    authorRole: 'Creative Director',
    authorImage:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80',
    link: '#',
  },
  {
    id: 2,
    title: 'Todas as funcionalidades que você quer conhecer',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis fugit dolorum amet dolores praesentium, alias nam? Tempore',
    image:
      'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80',
    authorName: 'Arthur Melo',
    authorRole: 'Creative Director',
    authorImage:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80',
    link: '#',
  },
  {
    id: 3,
    title: 'Quais serviços você obtém do Meraki UI',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis fugit dolorum amet dolores praesentium, alias nam? Tempore',
    image:
      'https://images.unsplash.com/photo-1597534458220-9fb4969f2df5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80',
    authorName: 'Amelia Anderson',
    authorRole: 'Lead Developer',
    authorImage:
      'https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80',
    link: '#',
  },
];

const ArrowIcon = () => (
  <svg
    className="ml-2 inline-block transition-transform duration-300"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    width="20"
    height="20"
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

export default function BlogSection() {
  const navigate = useNavigate();

  const handleLeiaMore = () => {
    navigate('/blog');
  };

  const handleSaibaMais = (id) => {
    navigate(`/blog/${id}`);
  };

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
          {blogPosts.map(({ id, title, description, image }) => (
            <article
              key={id}
              className="group rounded-lg overflow-hidden shadow-lg bg-white cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={image}
                  alt={title}
                  className="object-cover object-center w-full h-64 lg:h-80"
                />
              </div>

              <div className="px-6 py-5">
                <h3 className="text-xl font-title font-semibold text-gray-900">{title}</h3>
                <hr className="w-24 my-4 border-yellow-400" />
                <p className="text-sm font-body text-gray-700">{description}</p>
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

        <div className="text-center mt-12">
          <button
            onClick={handleLeiaMore}
            className="text-black font-semibold inline-flex text-[20px] items-center justify-center hover:text-yellow-400 active:text-yellow-600 transition-colors duration-300 font-body focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500 bg-transparent border-0 cursor-pointer"
            aria-label="Leia Mais sobre o Blog"
            onMouseEnter={(e) => {
              const svg = e.currentTarget.querySelector('svg');
              if (svg) svg.classList.add('translate-x-1');
            }}
            onMouseLeave={(e) => {
              const svg = e.currentTarget.querySelector('svg');
              if (svg) svg.classList.remove('translate-x-1');
            }}
          >
            Leia Mais
            <ArrowIcon />
          </button>
        </div>
      </div>
    </section>
  );
}