   import React from 'react';
   import { createBrowserRouter, RouterProvider } from 'react-router-dom';

   import Footer from '../Components/componentsHome/Footer/Footer';
   import Header from '../Components/componentsHome/Header/Header';
   import Home from '../Pages/Home/Home';
   import WhoWeAre from '../Pages/WhoWeAre/About';
   import Workshops from '../Pages/Workshops/Workshop';
   import BlogApp from '../Pages/Blog/Blog';
   import Gallery from '../Pages/Gallery/Gallery';
   import Volunter from '../Pages/Volunter/Volunter';
   import Donate from '../Pages/Donate/Donate';

   const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

   const router = createBrowserRouter([
     {
       path: '/',
       element: (
         <div className="flex flex-col min-h-screen">
           <Header />
           <main className="flex-grow">
             <Home />
           </main>
           <Footer />
         </div>
       ),
       loader: async () => {
         await delay(2000); // Simula 2 segundos de carregamento
         return null;
       },
     },
     {
       path: '/sobre',
       element: (
         <div className="flex flex-col min-h-screen">
           <Header />
           <main className="flex-grow">
             <WhoWeAre />
           </main>
           <Footer />
         </div>
       ),
       loader: async () => {
         await delay(2000);
         return null;
       },
     },
     {
       path: '/oficinas',
       element: (
         <div className="flex flex-col min-h-screen">
           <Header />
           <main className="flex-grow">
             <Workshops />
           </main>
           <Footer />
         </div>
       ),
       loader: async () => {
         await delay(2000);
         return null;
       },
     },
     {
       path: '/oficinas/:id',
       element: (
         <div className="flex flex-col min-h-screen">
           <Header />
           <main className="flex-grow">
             <Workshops />
           </main>
           <Footer />
         </div>
       ),
       loader: async () => {
         await delay(2000);
         return null;
       },
     },
     {
       path: '/blog',
       element: (
         <div className="flex flex-col min-h-screen">
           <Header />
           <main className="flex-grow">
             <BlogApp />
           </main>
           <Footer />
         </div>
       ),
       loader: async () => {
         await delay(2000);
         return null;
       },
     },
     {
       path: '/blog/:id',
       element: (
         <div className="flex flex-col min-h-screen">
           <Header />
           <main className="flex-grow">
             <BlogApp />
           </main>
           <Footer />
         </div>
       ),
       loader: async () => {
         await delay(2000);
         return null;
       },
     },
     {
       path: '/galeria',
       element: (
         <div className="flex flex-col min-h-screen">
           <Header />
           <main className="flex-grow">
             <Gallery />
           </main>
           <Footer />
         </div>
       ),
       loader: async () => {
         await delay(2000);
         return null;
       },
     },
     {
       path: '/voluntario',
       element: (
         <div className="flex flex-col min-h-screen">
           <Header />
           <main className="flex-grow">
             <Volunter />
           </main>
           <Footer />
         </div>
       ),
       loader: async () => {
         await delay(2000);
         return null;
       },
     },
     {
       path: '/doacoes',
       element: (
         <div className="flex flex-col min-h-screen">
           <Header />
           <main className="flex-grow">
             <Donate />
           </main>
           <Footer />
         </div>
       ),
       loader: async () => {
         await delay(2000);
         return null;
       },
     },
   ]);

   function App() {
     return <RouterProvider router={router} />;
   }

   export default App;
  