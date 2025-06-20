import React from 'react'

const ArrowIcon = () => (
  <svg
    className="ml-2 inline-block transition-transform duration-300"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    width="20"
    height="20"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
)

const About = () => {
  return (
    <section id="sobre" className="max-w-7xl mx-auto my-8 px-4 text-center font-body">
      <div className="mt-8 mb-16 bg-yellow-400 rounded-md p-4 text-white">
        <h2 className="text-xl md:text-2xl font-semibold">Horário de Atendimento</h2>
        <p className="text-lg md:text-xl mt-2">
          De segunda a sexta-feira, das <strong>08h às 21h</strong>. Estamos disponíveis para atividades, apoio e desenvolvimento de novos projetos.
        </p>
      </div>

      {/* Título mais direto e fonte title */}
      <h1 className="text-4xl md:text-5xl mb-5 font-title font-bold text-center">
        Quem Somos
      </h1>

      <div className="flex flex-col items-center gap-10 max-w-5xl mx-auto px-2 md:px-4">

        <div className="flex flex-col md:flex-row bg-gray-100 p-6 rounded-xl shadow-md w-full items-center md:items-start gap-6">
          <div className="relative w-full md:w-1/2 pb-[56.25%]">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-md"
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/B5FJMsq-YmQ"
              title="Sobre nós - Vídeo de introdução"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>

          <div className="w-full md:w-1/2 text-left md:text-left flex flex-col items-center">
            <h2 className="text-3xl font-semibold mb-5 font-title">Iluminando o Futuro: Transformando Vidas</h2>
            <p className="text-lg mb-4">
              Bem-vindo ao <strong>Iluminando o Futuro</strong>! Oferecemos oportunidades a crianças e jovens para construir um futuro melhor por meio de iniciativas transformadoras.
            </p>
            <p className="text-lg mb-6">
              Descubra histórias inspiradoras de superação e inovação. Junte-se a nós nessa jornada e ajude a criar um mundo mais justo!
            </p>
            <button
              onClick={() => window.location.href = '#sobre'}
              className="text-black font-semibold flex items-center justify-center hover:text-yellow-400 active:text-yellow-600 transition-colors duration-300 font-body"
              aria-label="Saiba Mais"
              onMouseEnter={e => {
                const svg = e.currentTarget.querySelector('svg')
                if (svg) svg.classList.add('translate-x-1')
              }}
              onMouseLeave={e => {
                const svg = e.currentTarget.querySelector('svg')
                if (svg) svg.classList.remove('translate-x-1')
              }}
            >
              Saiba Mais
              <ArrowIcon />
            </button>
          </div>
        </div>

      </div>

      {/* JSON-LD para SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'EducationalOrganization',
            name: 'Iluminando o Futuro',
            description: 'Transformamos vidas através da educação, cultura e esporte.',
            url: 'https://seusite.com/sobre',
            sameAs: [
              'https://facebook.com/seuperfil',
              'https://instagram.com/seuperfil',
            ],
            openingHours: 'Mo-Fr 08:00-21:00',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Endereço Exemplo',
              addressLocality: 'Cidade',
              addressRegion: 'Estado',
              postalCode: '00000-000',
              addressCountry: 'BR',
            },
          }),
        }}
      />
    </section>
  )
}

export default About
