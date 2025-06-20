export default function WorkshopsSection(){
    return (
      <section className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 sm:mx-auto sm:text-center lg:max-w-2xl">
          <p className="mb-1 text-xs font-semibold tracking-wide uppercase text-blue-600">
            Nossas Oficinas
          </p>
          <h2 className="mb-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            Atividades práticas para todas as idades
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            Descubra oficinas criativas, educativas e inclusivas que despertam o interesse e desenvolvem novas habilidades.
          </p>
        </div>
  
        <div className="grid gap-6 row-gap-5 lg:grid-cols-3">
          <div>
            <img
              className="object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96"
              src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg"
              alt="Oficina de Pintura"
            />
            <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
              Oficina de Pintura
            </h5>
            <p className="text-gray-700">
              Atividade lúdica e terapêutica que estimula a criatividade e coordenação motora com técnicas variadas de pintura.
            </p>
          </div>
          <div>
            <img
              className="object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96"
              src="https://images.pexels.com/photos/4144226/pexels-photo-4144226.jpeg"
              alt="Oficina de Robótica"
            />
            <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
              Oficina de Robótica
            </h5>
            <p className="text-gray-700">
              Introdução divertida à tecnologia e lógica por meio de construção de pequenos robôs com kits educativos.
            </p>
          </div>
          <div>
            <img
              className="object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96"
              src="https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg"
              alt="Oficina de Música"
            />
            <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
              Oficina de Música
            </h5>
            <p className="text-gray-700">
              Canto, instrumentos e ritmo para desenvolver expressão artística, concentração e socialização.
            </p>
          </div>
        </div>
  
        <div className="mt-10 text-center">
          <a
            href="/oficinas"
            className="inline-block px-6 py-3 text-sm font-medium text-white transition duration-300 bg-blue-600 rounded hover:bg-blue-700"
          >
            Ver todas as oficinas
          </a>
        </div>
      </section>
    );
  };
  