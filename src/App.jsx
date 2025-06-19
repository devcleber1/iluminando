import { useState, useEffect } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Ilumina from './assets/iluminando.png';

const navigation = [
  { name: 'Produto', href: '#' },
  { name: 'Funcionalidades', href: '#' },
  { name: 'Mercado', href: '#' },
  { name: 'Empresa', href: '#' },
];

const carouselImages = [
  { src: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80', alt: 'Imagem de paisagem 1' },
  { src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80', alt: 'Imagem de paisagem 2' },
  { src: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80', alt: 'Imagem de paisagem 3' },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  // Carrossel automático
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % carouselImages.length);
    }, 5000); // Muda a imagem a cada 5 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white">
      {/* Pré-carregamento das imagens */}
      <div className="hidden">
        {carouselImages.map((image, index) => (
          <img key={index} src={image.src} alt={image.alt} />
        ))}
      </div>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5 transition-shadow duration-200 shadow-md hover:shadow-lg rounded-full">
              <span className="sr-only">Iluminando o Futuro</span>
              <img alt="Iluminando o Futuro" src={Ilumina} className="h-12 w-auto" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Abrir menu principal</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-base font-bold text-gray-900 hover:text-yellow-400 transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5 transition-shadow duration-200 shadow-md hover:shadow-lg rounded-full">
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
                      className="-mx-3 block rounded-lg px-3 py-2 text-lg font-bold text-gray-900 hover:text-yellow-400 transition-colors duration-200"
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

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {carouselImages.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                index === currentImage ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-black opacity-50" />
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2" aria-live="polite">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentImage ? 'bg-yellow-400' : 'bg-white/50 hover:bg-white/80'
                } transition-colors duration-200`}
                aria-label={`Ir para o banner ${index + 1}`}
                tabIndex={0}
              />
            ))}
          </div>
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 relative z-10">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-white ring-1 ring-white/20 hover:ring-white/30">
              Anunciando nossa próxima rodada de captação.{' '}
              <a href="#" className="font-semibold text-yellow-400">
                <span aria-hidden="true" className="absolute inset-0" />
                Saiba mais <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-balance text-5xl font-bold tracking-tight text-white sm:text-7xl">
              Unidos, podemos mudar o mundo!
            </h1>
            <p className="mt-8 text-pretty text-lg font-medium text-white sm:text-xl/8">
              Sua doação ilumina vidas, traz esperança e constrói um futuro melhor para quem mais precisa.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-yellow-400 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400 transition-colors duration-200"
              >
                Fazer Doação
              </a>
              <a
                href="#"
                className="rounded-md bg-transparent border border-yellow-400 px-3.5 py-2.5 text-sm font-semibold text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400 transition-colors duration-200"
              >
                Venha Fazer Parte
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}