import React, { memo, Suspense } from 'react';
import { createBrowserRouter, RouterProvider, Outlet, useNavigation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Footer from '../Components/componentsHome/Footer/Footer';
import Header from '../Components/componentsHome/Header/Header';
import Home from '../Pages/Home/Home';
import WhoWeAre from '../Pages/WhoWeAre/About';
import Workshops from '../Pages/Workshops/Workshop';
import BlogApp from '../Pages/Blog/Blog';
import Gallery from '../Pages/Gallery/Gallery';
import Volunteer from '../Pages/Volunter/Volunter'; 
import Donate from '../Pages/Donate/Donate';

// Simulated delay for loader (replace with real API calls as needed)
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Loading component
const LoadingIndicator = () => {
  const { state } = useNavigation();
  if (state === 'loading') {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin" role="status" aria-label="Carregando" />
          <p className="mt-4 text-white text-lg font-semibold">Carregando...</p>
        </div>
      </div>
    );
  }
  return null;
};

// Layout component with loading indicator
const MainLayout = () => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-grow">
      <LoadingIndicator />
      <Suspense fallback={<div className="flex items-center justify-center h-full">Carregando conteúdo...</div>}>
        <Outlet />
      </Suspense>
    </main>
    <Footer />
  </div>
);

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: async () => {
          await delay(1000); // Simulate 1s data fetching
          return null;
        },
      },
      {
        path: '/sobre',
        element: <WhoWeAre />,
        loader: async () => {
          await delay(1000);
          return null;
        },
      },
      {
        path: '/oficinas',
        element: <Workshops />,
        loader: async () => {
          await delay(1000);
          return null;
        },
      },
      {
        path: '/oficinas/:id',
        element: <Workshops />,
        loader: async ({ params }) => {
          await delay(1000);
          return { id: params.id };
        },
      },
      {
        path: '/blog',
        element: <BlogApp />,
        loader: async () => {
          await delay(1000);
          return null;
        },
      },
      {
        path: '/blog/:id',
        element: <BlogApp />,
        loader: async ({ params }) => {
          await delay(1000);
          return { id: params.id };
        },
      },
      {
        path: '/galeria',
        element: <Gallery />,
        loader: async () => {
          await delay(1000);
          return null;
        },
      },
      {
        path: '/voluntario',
        element: <Volunteer />,
        loader: async () => {
          await delay(1000);
          return null;
        },
      },
      {
        path: '/doacoes',
        element: <Donate />,
        loader: async () => {
          await delay(1000);
          return null;
        },
      },
      {
        path: '*',
        element: (
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow py-20 px-6 text-center">
              <h2 className="text-3xl font-title font-semibold text-gray-900">
                Página Não Encontrada
              </h2>
              <p className="text-gray-700 mt-4">
                A página que você está procurando não existe. Volte para a página inicial.
              </p>
              <a
                href="/"
                className="
                  inline-flex
                  items-center
                  gap-2
                  mt-6
                  font-menu
                  font-semibold
                  text-yellow-500
                  hover:text-yellow-600
                  focus-visible:outline
                  focus-visible:outline-2
                  focus-visible:outline-offset-2
                  focus-visible:outline-yellow-500
                  transition-colors
                  duration-300
                "
                aria-label="Voltar para a página inicial"
              >
                Voltar para Home
              </a>
            </main>
            <Footer />
          </div>
        ),
      },
    ],
  },
]);

const App = () => (
  <HelmetProvider>
    <RouterProvider router={router} />
  </HelmetProvider>
);

export default memo(App);
