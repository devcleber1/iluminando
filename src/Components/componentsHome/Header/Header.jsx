import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link, useLocation } from 'react-router-dom'

import Ilumina from '../../../assets/iluminando.png'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Quem Somos', href: '/sobre' },
  { name: 'Oficinas', href: '/oficinas' },
  { name: 'Blog', href: '/blog' },
  { name: 'Galeria', href: '/galeria' },
  { name: 'Seja Voluntário', href: '/voluntario' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  const navLinkTextShadow = {
    textShadow: `
      -1px -1px 0 #000,
      1px -1px 0 #000,
      -1px 1px 0 #000,
      1px 1px 0 #000
    `,
  }

  return (
    <header
      className={`z-50 ${
        isHome
          ? 'absolute w-full inset-x-0 top-0 bg-transparent transition-none'
          : 'bg-white shadow-md transition-colors duration-300'
      }`}
    >
      <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8 font-body">
        {/* Logo */}
        <div className="flex flex-1">
          <Link to="/">
            <span className="sr-only font-menu">Iluminando o Futuro</span>
            <img alt="Iluminando o Futuro" src={Ilumina} className="h-20 w-auto" />
          </Link>
        </div>

        {/* Navegação desktop */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-center lg:gap-x-8 font-menu">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              style={isHome ? navLinkTextShadow : {}}
              className={`text-base font-bold transition-colors duration-200 whitespace-nowrap ${
                isHome ? 'text-gray-200 hover:text-yellow-400' : 'text-black hover:text-yellow-400'
              }`}
              aria-label={item.name} // aria-label com o mesmo nome visível
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Botão Doar desktop */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end font-menu">
          <Link
            to="/doacoes"
            className="rounded-md bg-transparent border border-yellow-400 px-3.5 py-2.5 text-sm font-semibold text-yellow-400 hover:bg-yellow-400 hover:text-white transition-colors duration-200"
            aria-label="Quero Doar"
          >
            Quero Doar
          </Link>
        </div>

        {/* Botão menu mobile */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-yellow-400"
            aria-label="Abrir menu principal"
          >
            <Bars3Icon aria-hidden="true" className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Menu mobile */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 font-menu">
          <div className="flex items-center justify-between">
            <Link to="/">
              <span className="sr-only">Iluminando o Futuro</span>
              <img alt="Iluminando o Futuro" src={Ilumina} className="h-12 w-auto" />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              aria-label="Fechar menu"
            >
              <XMarkIcon aria-hidden="true" className="w-6 h-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className=" -mx-3 block rounded-lg px-3 py-2 text-lg font-bold text-black hover:text-yellow-400 transition-colors duration-200 focus:outline-none"
                    aria-label={item.name}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  to="/doacoes"
                  onClick={() => setMobileMenuOpen(false)}
                  className=" -mx-3 block rounded-md bg-yellow-400 px-3.5 py-2 text-lg font-semibold text-white hover:bg-yellow-500 transition-colors duration-200 focus:outline-none mt-4 text-center"
                  aria-label="Quero Doar"
                >
                  Quero Doar
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
