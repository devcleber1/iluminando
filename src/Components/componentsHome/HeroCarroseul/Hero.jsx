import { useState, useEffect } from 'react'

import Banner1 from '../../../assets/ilumina.webp'
import Banner3 from '../../../assets/flamengo.webp'
import Banner4 from '../../../assets/natal.webp'

const carouselImages = [
  { src: Banner1, alt: 'Imagem ilustrativa de iluminação' },
  { src: Banner3, alt: 'Imagem do Flamengo com a torcida' },
  { src: Banner4, alt: 'Imagem de Natal com luzes e decoração' },
]

const textShadowStyle = {
  textShadow: `
    -2px -2px 0 #000,
    2px -2px 0 #000,
    -2px 2px 0 #000,
    2px 2px 0 #000
  `,
}

const textShadowStyleParagraph = {
  textShadow: `
    -1px -1px 0 #000,
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000
  `,
}

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % carouselImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-white font-body w-screen overflow-x-hidden">
      {/* Preload imagens */}
      <div className="hidden">
        {carouselImages.map((image, index) => (
          <img key={index} src={image.src} alt={image.alt} loading="lazy" />
        ))}
      </div>

      {/* HERO */}
      <div className="relative isolate min-h-screen w-full px-6 pt-14 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          {carouselImages.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className={`absolute top-0 left-0 w-full h-full max-w-none object-cover object-center transition-opacity duration-1000 ease-in-out ${
                index === currentImage ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-black opacity-50" />
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentImage ? 'bg-yellow-400' : 'bg-white/50 hover:bg-white/80'
                } transition-colors duration-200`}
                aria-label={`Ir para o banner ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Conteúdo central */}
        <div className="mx-auto max-w-2xl relative z-10 text-center flex flex-col justify-center min-h-screen">
          <h1 className="font-title text-5xl font-bold tracking-tight text-white sm:text-7xl" style={textShadowStyle}>
            <span className="text-yellow-400">Unidos</span>, podemos mudar o{' '}
            <span className="text-yellow-400">mundo!</span>
          </h1>
          <p className="mt-8 font-body text-lg font-medium text-white sm:text-xl/8" style={textShadowStyleParagraph}>
            Sua doação ilumina vidas, traz esperança e constrói um futuro melhor para quem mais precisa.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/doacoes"
              className="font-menu rounded-md bg-transparent border border-yellow-400 px-3.5 py-2.5 text-sm font-semibold text-yellow-400 hover:bg-yellow-400 hover:text-white transition-colors duration-200"
            >
              Fazer Doação
            </a>
            <a
              href="/voluntario"
              className="font-menu rounded-md bg-transparent border border-yellow-400 px-3.5 py-2.5 text-sm font-semibold text-yellow-400 hover:bg-yellow-400 hover:text-white transition-colors duration-200"
            >
              Venha Fazer Parte
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
