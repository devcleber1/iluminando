import React from 'react';
import { Instagram, Youtube } from 'lucide-react';
import Iluminando from '../../../assets/iluminando.png';

export default function Footer() {
  return (
    <footer className="bg-yellow-400 text-black font-body">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="lg:flex">
          {/* Coluna 1: Logo, Texto e Redes Sociais */}
          <div className="w-full -mx-6 lg:w-2/5">
            <div className="px-6">
              <a href="#">
                <img src={Iluminando} alt="Logo Iluminando o Futuro" className="w-auto h-7" />
              </a>

              <p className="max-w-sm mt-2 text-sm font-menu leading-tight text-black">
                A Iluminando o Futuro quer você junto! Para mais informações sobre projetos,
                parcerias, doações, patrocínios, eventos e outros assuntos, entre em contato.
              </p>

              <div className="flex mt-6 -mx-2">
                <a
                  href="https://www.instagram.com/iluminandoofuturo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-2 text-black transition-colors duration-300 hover:text-white"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://www.youtube.com/@IluminandoOfuturo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-2 text-black transition-colors duration-300 hover:text-white"
                  aria-label="YouTube"
                >
                  <Youtube size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Coluna 2: Links Rápidos e Contato */}
          <div className="mt-6 lg:mt-0 lg:flex-1">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
              <div className="col-span-2">
                <h3 className="text-lg font-semibold uppercase font-title mb-2">Links Rápidos</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div>
                    <a href="/sobre" className="block mt-2 text-sm font-menu text-black hover:text-white">Home</a>
                    <a href="/educacao" className="block mt-2 text-sm font-menu text-black hover:text-white">Quem somos</a>
                    <a href="/inclusao" className="block mt-2 text-sm font-menu text-black hover:text-white">Galeria</a>
                  </div>
                  <div>
                    <a href="/doacao" className="block mt-2 text-sm font-menu text-black hover:text-white">Oficinas</a>
                    <a href="/blog" className="block mt-2 text-sm font-menu text-black hover:text-white">Transparência</a>
                    <a href="/contato" className="block mt-2 text-sm font-menu text-black hover:text-white">Blog</a>
                  </div>
                </div>
              </div>

              <div>
  <h3 className="text-lg font-semibold uppercase font-title mb-2">Contato</h3>
  <span className="block mt-2 text-sm font-menu text-black hover:text-white cursor-pointer">+55 21 96882-8026</span>
  <a
    href="mailto:iluminandoofuturo2024@gmail.com"
    className="block mt-2 text-sm font-menu text-black hover:text-white cursor-pointer"
  >
    iluminandoofuturo2024@gmail.com
  </a>
</div>
            </div>
          </div>
        </div>

        <hr className="h-px my-6 bg-gray-200 border-none" />

        <div>
          <p className="text-center text-sm font-menu text-black">
            © 2024-2025 Todos os direitos reservados. Criado com carinho por Iluminando o Futuro.
          </p>
        </div>
      </div>
    </footer>
  );
}