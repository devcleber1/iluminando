import workshops from './data';

export default function WorkshopsSection() {
  return (
    <section className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 font-body">
      <div className="max-w-xl mb-10 sm:mx-auto sm:text-center lg:max-w-2xl">
        <h2 className="mb-4 text-[clamp(2rem,2.5vw,4rem)] font-title font-bold leading-tight text-gray-900 text-center">
          Nossas Oficinas
        </h2>
        <h3 className="mb-4 text-[clamp(1.5rem,2vw,2.25rem)] font-title font-semibold text-gray-900 text-center">
          Desenvolvimento com criatividade e propósito
        </h3>
        <p className="text-[clamp(1rem,2vw,1.25rem)] text-gray-700 text-center">
          Descubra oficinas criativas, educativas e inclusivas que despertam o interesse e desenvolvem novas habilidades.
        </p>
      </div>

      <div className="grid gap-6 row-gap-5 lg:grid-cols-3">
        {workshops.map((workshop, idx) => (
          <div
            key={idx}
            className="group transform transition duration-300 rounded-lg bg-white shadow-md hover:shadow-2xl hover:scale-[1.03]"
          >
            <div className="w-full aspect-[4/3] mb-6 overflow-hidden rounded-lg shadow-sm">
              <img
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                src={workshop.img}
                alt={workshop.alt}
              />
            </div>
            <h5 className="mb-2 text-[clamp(1.25rem,2.5vw,1.75rem)] font-title font-bold leading-none text-gray-900 text-center">
              {workshop.title}
            </h5>
            <p className="text-[clamp(1rem,2vw,1.25rem)] text-gray-700 text-center px-4 pb-6">
              {workshop.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
      <a
  href="/oficinas"
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
  Ver todas as oficinas
</a>

      </div>
    </section>
  );
}
