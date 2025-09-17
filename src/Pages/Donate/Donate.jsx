import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { CreditCard, Ban as Bank, QrCode as Qr, BookOpen, ShoppingBag, Package } from 'lucide-react';

const materialDonations = [
  {
    title: 'Material Escolar',
    icon: BookOpen,
    items: ['Cadernos', 'Lápis e canetas', 'Mochilas', 'Borrachas', 'Apontadores', 'Material artístico'],
  },
  {
    title: 'Alimentos',
    icon: ShoppingBag,
    items: ['Arroz', 'Feijão', 'Óleo', 'Macarrão', 'Leite em pó', 'Açúcar'],
  },
  {
    title: 'Outros Itens',
    icon: Package,
    items: ['Roupas', 'Cobertores', 'Produtos de higiene', 'Fraldas', 'Brinquedos', 'Livros'],
  },
];

const DonationCard = memo(({ title, icon: Icon, children }) => (
  <motion.div
    className="bg-white rounded-lg shadow-md p-8 text-center"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <div className="h-20 w-20 text-yellow-500 mx-auto mb-4 flex justify-center items-center">
      <Icon className="text-3xl" aria-hidden="true" />
    </div>
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    {children}
  </motion.div>
));

const Donate = () => (
  <div className="min-h-screen box-border">
    <Helmet>
      <title>Doações - Iluminando o Futuro</title>
      <meta
        name="description"
        content="Faça sua doação para apoiar os projetos sociais do Iluminando o Futuro. Doe via PIX, transferência bancária, cartão de crédito ou materiais."
      />
      <meta property="og:title" content="Doações - Iluminando o Futuro" />
      <meta
        property="og:description"
        content="Faça sua doação para apoiar os projetos sociais do Iluminando o Futuro. Doe via PIX, transferência bancária, cartão de crédito ou materiais."
      />
      <meta property="og:image" content="https://seusite.com/assets/iluminando.png" />
      <meta property="og:url" content="https://seusite.com/doacoes" />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>

    <section className="relative h-[40vh] sm:h-[35vh] md:h-[40vh] flex items-center px-4">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80"
          alt="Imagem representando doações para projetos sociais"
          className="w-full h-full object-cover"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-title font-bold text-white mb-6 sm:text-3xl md:text-4xl">
          Faça sua Doação
        </h1>
        <p className="text-lg font-body text-white max-w-6xl mx-auto sm:text-base md:text-lg">
          Sua contribuição é fundamental para mantermos nossos projetos ativos. Escolha a melhor
          forma de doar e faça parte desta transformação social.
        </p>
      </div>
    </section>

    <section className="py-20 px-6 sm:px-4 md:px-6">
      <h2 className="text-3xl font-title font-bold text-center mb-12 sm:text-2xl md:text-3xl">
        Doações Financeiras
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-8 sm:gap-6 md:grid-cols-3">
        <DonationCard title="PIX" icon={Qr}>
          <p className="text-gray-600 mb-6">Faça sua doação instantaneamente via PIX</p>
          <div className="bg-gray-100 p-4 rounded-md mb-4">
            <p>55.822.693/0001-90</p>
          </div>
          <p className="text-gray-500">CNPJ da Iluminando o Futuro</p>
        </DonationCard>
        <DonationCard title="Transferência Bancária" icon={Bank}>
          <p className="text-gray-600 mb-6">Dados para transferência bancária</p>
          <div className="bg-gray-100 p-4 rounded-md mb-4">
            <p><strong>Banco:</strong> 000 - Banco Example</p>
            <p><strong>Agência:</strong> 0000</p>
            <p><strong>Conta:</strong> 00000-0</p>
            <p><strong>CNPJ:</strong> 00.000.000/0001-00</p>
          </div>
        </DonationCard>
        <DonationCard title="Cartão de Crédito" icon={CreditCard}>
          <p className="text-gray-600 mb-6">Doe de forma segura usando seu cartão</p>
          <button
            className="
              w-full
              py-3
              bg-yellow-400
              text-white
              font-semibold
              rounded-lg
              hover:bg-yellow-500
              focus-visible:outline
              focus-visible:outline-2
              focus-visible:outline-offset-2
              focus-visible:outline-yellow-500
              transition-colors
              duration-200
              disabled:opacity-50
              disabled:cursor-not-allowed
            "
            disabled
            aria-label="Doar com cartão de crédito (em breve)"
          >
            Doar com Cartão
          </button>
          <p className="text-gray-500 mt-4">Processamento seguro via gateway de pagamento</p>
          <p className="text-red-600 mt-2">Em Breve</p>
        </DonationCard>
      </div>
    </section>

    <section className="bg-yellow-300 py-20 px-6 sm:px-4 md:px-6">
      <h2 className="text-3xl font-title font-bold text-center mb-12 sm:text-2xl md:text-3xl">
        Doações de Materiais
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-8 sm:gap-6 md:grid-cols-3">
        {materialDonations.map((category, index) => (
          <DonationCard key={index} title={category.title} icon={category.icon}>
            <ul className="list-none p-0 m-0 text-left">
              {category.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-center text-gray-600 mb-2">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                  {item}
                </li>
              ))}
            </ul>
          </DonationCard>
        ))}
      </div>
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-md p-8 mt-12">
        <h3 className="text-2xl font-semibold mb-6">Como doar materiais?</h3>
        <p className="text-gray-600 mb-4">
          Você pode entregar suas doações em nossa sede localizada em:
          <br />
          <strong>Endereço:</strong> Rio de Janeiro - Rio de Janeiro/RJ
        </p>
        <p className="text-gray-600 mb-4">
          <strong>Horário de recebimento:</strong>
          <br />
          Segunda a Sexta: 9h às 17h
        </p>
        <p className="text-gray-600">
          Para grandes volumes, entre em contato conosco para agendarmos a coleta:
          <br />
          <a
            href="tel:+5521968828026"
            className="text-yellow-500 hover:text-yellow-600"
            aria-label="Ligar para +55 21 96882-8026"
          >
            <strong>Telefone:</strong> (21) 96882-8026
          </a>
          <br />
          <a
            href="mailto:iluminandoofuturo2024@gmail.com"
            className="text-yellow-500 hover:text-yellow-600"
            aria-label="Enviar e-mail para iluminandoofuturo2024@gmail.com"
          >
            <strong>E-mail:</strong> iluminandoofuturo2024@gmail.com
          </a>
        </p>
      </div>
    </section>

    <section className="py-20 px-6 sm:px-4 md:px-6">
      <div className="max-w-7xl mx-auto bg-gray-100 rounded-lg p-8">
        <h3 className="text-2xl font-title font-bold mb-6">Sua Doação em Ação</h3>
        <div className="grid grid-cols-1 gap-8 sm:gap-6 md:grid-cols-2">
          <div>
            <h4 className="text-lg font-semibold mb-4">Como Utilizamos sua Doação</h4>
            <ul className="list-disc pl-5 text-gray-600">
              <li>70% para projetos sociais diretos</li>
              <li>20% para infraestrutura e logística</li>
              <li>10% para custos administrativos</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Prestação de Contas</h4>
            <p className="text-gray-600">
              Enviamos relatórios mensais detalhando o uso dos recursos e o impacto gerado na
              comunidade. Transparência é um de nossos valores fundamentais.
            </p>
          </div>
        </div>
      </div>
    </section>

    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Doações - Iluminando o Futuro',
          description:
            'Faça sua doação para apoiar os projetos sociais do Iluminando o Futuro. Doe via PIX, transferência bancária, cartão de crédito ou materiais.',
          url: 'https://seusite.com/doacoes',
          publisher: {
            '@type': 'Organization',
            name: 'Iluminando o Futuro',
            logo: { '@type': 'ImageObject', url: 'https://seusite.com/assets/iluminando.png' },
          },
        }),
      }}
    />
  </div>
);

export default memo(Donate);