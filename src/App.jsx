import { useState, useEffect } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

import Ilumina from './assets/iluminando.png';
import Banner1 from './assets/ilumina.webp';
import Banner3 from './assets/flamengo.webp';
import Banner4 from './assets/natal.webp';

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Sobre', href: '#' },
  { name: 'Galeria', href: '#' },
  { name: 'Oficinas', href: '#' },
  { name: 'Projetos', href: '#' },
  { name: 'Blog', href: '#' },
];

const carouselImages = [
  { src: Banner1, alt: 'Imagem ilustrativa de iluminação' },
  { src: Banner3, alt: 'Imagem do Flamengo com a torcida' },
  { src: Banner4, alt: 'Imagem de Natal com luzes e decoração' },
];

const textShadowStyle = {
  textShadow: `
    -2px -2px 0 #000,
    2px -2px 0 #000,
    -2px 2px 0 #000,
    2px 2px 0 #000
  `,
};

const textShadowStyleParagraph = {
  textShadow: `
    -1px -1px 0 #000,
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000
  `,
};

const navLinkTextShadow = {
  textShadow: `
    -1px -1px 0 #000,
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000
  `,
};

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white font-body w-screen overflow-x-hidden">
      {/* Preload imagens */}
      <div className="hidden">
        {carouselImages.map((image, index) => (
          <img key={index} src={image.src} alt={image.alt} loading="lazy" />
        ))}
      </div>

      {/* Cabeçalho */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          {/* Logo */}
          <div className="flex flex-1">
            <a href="#">
              <span className="sr-only">Iluminando o Futuro</span>
              <img alt="Iluminando o Futuro" src={Ilumina} className="h-20 w-auto" />
            </a>
          </div>

          {/* Navegação desktop */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-center lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                style={navLinkTextShadow}
                className="font-menu text-base font-bold text-gray-200 hover:text-yellow-400 transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex lg:flex-1" />

          {/* Botão menu mobile */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-yellow-400"
            >
              <span className="sr-only">Abrir menu principal</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
        </nav>

        {/* Drawer menu mobile */}
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#">
                <span className="sr-only">Iluminando o Futuro</span>
                <img alt="Iluminando o Futuro" src={Ilumina} className="h-12 w-auto" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Fechar menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="font-menu -mx-3 block rounded-lg px-3 py-2 text-lg font-bold text-black hover:text-yellow-400 transition-colors duration-200 focus:outline-none"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

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
              href="#"
              className="font-menu rounded-md bg-transparent border border-yellow-400 px-3.5 py-2.5 text-sm font-semibold text-yellow-400 hover:bg-yellow-400 hover:text-white transition-colors duration-200"
            >
              Fazer Doação
            </a>
            <a
              href="#"
              className="font-menu rounded-md bg-transparent border border-yellow-400 px-3.5 py-2.5 text-sm font-semibold text-yellow-400 hover:bg-yellow-400 hover:text-white transition-colors duration-200"
            >
              Venha Fazer Parte
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
