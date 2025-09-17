import { useState, useEffect, memo } from 'react';
import { Link, useLocation, useNavigation } from 'react-router-dom';
import { Instagram, Youtube } from 'lucide-react';
import LoadingComponent from '../../Loading';
import Iluminando from '../../../assets/iluminando.png';

const FooterLink = memo(({ to, children }) => (
  <Link to={to} className="block mt-2 text-sm font-menu text-black hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
    {children}
  </Link>
));

const Footer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const navigationState = useNavigation();

  useEffect(() => {
    if (navigationState.state === 'loading') {
      setIsLoading(true);
    }
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Reduced for better UX
    return () => clearTimeout(timer);
  }, [navigationState.state, location.pathname]);

  return (
    <>
      {isLoading && <LoadingComponent />}
      <footer className="bg-yellow-400 text-black font-body">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="lg:flex">
            {/* Coluna 1: Logo, Texto e Redes Sociais */}
            <div className="w-full -mx-6 lg:w-2/5">
              <div className="px-6">
                <Link to="/" aria-label="Iluminando o Futuro - Página inicial">
                  <img
                    src={Iluminando}
                    alt="Logo Iluminando o Futuro"
                    className="w-auto h-7"
                    loading="lazy"
                    decoding="async"
                  />
                </Link>
                <p className="max-w-sm mt-2 text-sm font-menu leading-tight text-black">
                  A Iluminando o Futuro quer você junto! Para mais informações sobre projetos,
                  parcerias, doações, patrocínios, eventos e outros assuntos, entre em contato.
                </p>
                <div className="flex mt-6 -mx-2">
                  <a
                    href="https://www.instagram.com/iluminandoofuturo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-2 text-black transition-colors duration-300 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    aria-label="Siga-nos no Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="https://www.youtube.com/@IluminandoOfuturo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-2 text-black transition-colors duration-300 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    aria-label="Assista-nos no YouTube"
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
                      <FooterLink to="/">Home</FooterLink>
                      <FooterLink to="/sobre">Quem somos</FooterLink>
                      <FooterLink to="/galeria">Galeria</FooterLink>
                    </div>
                    <div>
                      <FooterLink to="/oficinas">Oficinas</FooterLink>
                      <FooterLink to="/blog">Blog</FooterLink>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold uppercase font-title mb-2">Contato</h3>
                  <a
                    href="tel:+5521968828026"
                    className="block mt-2 text-sm font-menu text-black hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    aria-label="Ligar para +55 21 96882-8026"
                  >
                    +55 21 96882-8026
                  </a>
                  <a
                    href="mailto:iluminandoofuturo2024@gmail.com"
                    className="block mt-2 text-sm font-menu text-black hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    aria-label="Enviar e-mail para iluminandoofuturo2024@gmail.com"
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

        {/* JSON-LD for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Iluminando o Futuro',
              url: 'https://seusite.com',
              logo: 'https://seusite.com/assets/iluminando.png',
              contactPoint: [
                {
                  '@type': 'ContactPoint',
                  telephone: '+55-21-96882-8026',
                  contactType: 'customer support',
                  email: 'iluminandoofuturo2024@gmail.com',
                },
              ],
              sameAs: [
                'https://www.instagram.com/iluminandoofuturo/',
                'https://www.youtube.com/@IluminandoOfuturo',
              ],
            }),
          }}
        />
      </footer>
    </>
  );
};

export default memo(Footer);