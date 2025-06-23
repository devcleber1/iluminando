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
    <section id="sobre" className="w-full my-0.5 px-0 text-center font-body">
      {/* CTA sempre lado a lado */}
      <div className="flex w-full">
        <a
          href="/quem-somos"
          className="bg-[#ffce26] text-white flex-1 min-w-0 min-h-[300px] p-6 flex flex-col items-center justify-center 
          hover:brightness-95 hover:scale-[1.03] active:scale-95 transition-transform duration-300 font-title"
        >
          <h2 className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-bold">Quem somos</h2>
          <p className="text-[clamp(1rem,2vw,1.25rem)] mt-1 font-body">Missão, Visão & Valores</p>
        </a>
        <a
          href="/blog"
          className="bg-[#fff] text-white flex-1 min-w-0 min-h-[300px] p-6 flex flex-col items-center justify-center 
          hover:brightness-90 hover:scale-[1.03] active:scale-95 transition-transform duration-300 font-title"
        >
          <h2 className="text-[clamp(1.25rem,2.5vw,1.75rem)] text-yellow-400 font-bold">Nosso blog</h2>
          <p className="text-[clamp(1rem,2vw,1.25rem)] text-yellow-400 mt-1 font-body">Confira nossos textos e artigos</p>
        </a>
        <a
          href="/apoie"
          className="bg-[#ffce26] text-white flex-1 min-w-0 min-h-[300px] p-6 flex flex-col items-center justify-center 
          hover:brightness-95 hover:scale-[1.03] active:scale-95 transition-transform duration-300 font-title"
        >
          <h2 className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-bold">Seja um apoiador</h2>
          <p className="text-[clamp(1rem,2vw,1.25rem)] mt-1 font-body">Doe & faça a diferença</p>
        </a>
      </div>

      <h1 className="text-[clamp(2rem,2.5vw,4rem)] my-8 font-title font-bold text-yellow-500 text-center">
        Sobre
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

          <div className="w-full md:w-1/2 text-left flex flex-col items-center">
            <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-title font-semibold mb-5">
              Iluminando o Futuro: Transformando Vidas
            </h2>
            <p className="text-[clamp(1rem,2vw,1.25rem)] mb-4">
              Bem-vindo ao <strong>Iluminando o Futuro</strong>! Oferecemos oportunidades a crianças e jovens para construir um futuro melhor por meio de iniciativas transformadoras.
            </p>
            <p className="text-[clamp(1rem,2vw,1.25rem)] mb-6">
              Descubra histórias inspiradoras de superação e inovação. Junte-se a nós nessa jornada e ajude a criar um mundo mais justo!
            </p>
            <button
              onClick={() => window.location.href = '#sobre'}
              className="text-black font-semibold flex text-[20px] items-center justify-center hover:text-yellow-400 active:text-yellow-600 transition-colors duration-300 font-body"
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
