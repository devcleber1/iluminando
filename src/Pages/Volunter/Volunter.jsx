import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css';

export default function Volunteer() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    const message =
      `Olá! Quero me cadastrar como voluntário.%0A%0A` +
      `*Nome:* ${data.name}%0A` +
      `*E-mail:* ${data.email}%0A` +
      `*Telefone:* ${data.phone}%0A` +
      `*Área de Interesse:* ${data.area}%0A` +
      `*Disponibilidade:* ${data.availability}%0A` +
      `*Experiência Prévia:* ${data.experience || 'Não informado'}`;

    const phoneNumber = '5521968828026';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen box-border">
      {/* Hero Section */}
      <section className="relative h-[40vh] sm:h-[35vh] md:h-[40vh] flex items-center px-4">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80"
            alt="Voluntários em ação, colaborando com causas sociais"
            title="Voluntários em ação"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-title font-bold text-white mb-6 sm:text-3xl md:text-4xl">
            Seja Voluntário
          </h1>
          <p className="text-lg font-body text-white max-w-6xl mx-auto sm:text-base md:text-lg">
            Junte-se a nós e faça parte desta transformação. Sua dedicação pode mudar vidas.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 px-6 sm:px-4 md:px-6">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8 sm:p-6 md:p-8">
          <h2 className="text-2xl font-title font-bold mb-6 sm:text-xl md:text-2xl">
            Cadastro de Voluntário
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Nome Completo
                </label>
                <input
                  id="name"
                  type="text"
                  {...register('name', { required: 'Nome é obrigatório' })}
                  aria-describedby="name-error"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400 text-gray-700 transition-all duration-200 sm:text-sm md:text-base"
                />
                {errors.name && (
                  <p id="name-error" className="text-sm text-red-600 mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  E-mail
                </label>
                <input
                  id="email"
                  type="email"
                  {...register('email', {
                    required: 'E-mail é obrigatório',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'E-mail inválido'
                    }
                  })}
                  aria-describedby="email-error"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400 text-gray-700 transition-all duration-200 sm:text-sm md:text-base"
                />
                {errors.email && (
                  <p id="email-error" className="text-sm text-red-600 mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Telefone
                </label>
                <input
                  id="phone"
                  type="tel"
                  {...register('phone', { required: 'Telefone é obrigatório' })}
                  aria-describedby="phone-error"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400 text-gray-700 transition-all duration-200 sm:text-sm md:text-base"
                />
                {errors.phone && (
                  <p id="phone-error" className="text-sm text-red-600 mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="area" className="block text-sm font-medium text-gray-700">
                  Área de Interesse
                </label>
                <select
                  id="area"
                  {...register('area', { required: 'Área é obrigatória' })}
                  aria-describedby="area-error"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400 text-gray-700 transition-all duration-200 sm:text-sm md:text-base"
                >
                  <option value="">Selecione uma área</option>
                  <option value="educacao">Educação</option>
                  <option value="saude">Saúde</option>
                  <option value="alimentacao">Alimentação</option>
                  <option value="cultura">Arte e Cultura</option>
                  <option value="administrativo">Administrativo</option>
                </select>
                {errors.area && (
                  <p id="area-error" className="text-sm text-red-600 mt-1">
                    {errors.area.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="availability" className="block text-sm font-medium text-gray-700">
                  Disponibilidade
                </label>
                <select
                  id="availability"
                  {...register('availability', { required: 'Disponibilidade é obrigatória' })}
                  aria-describedby="availability-error"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400 text-gray-700 transition-all duration-200 sm:text-sm md:text-base"
                >
                  <option value="">Selecione sua disponibilidade</option>
                  <option value="manha">Manhã</option>
                  <option value="tarde">Tarde</option>
                  <option value="noite">Noite</option>
                  <option value="fimdesemana">Fim de Semana</option>
                </select>
                {errors.availability && (
                  <p id="availability-error" className="text-sm text-red-600 mt-1">
                    {errors.availability.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700">
                  Experiência Prévia
                </label>
                <textarea
                  id="experience"
                  {...register('experience')}
                  rows={4}
                  placeholder="Conte-nos sobre suas experiências anteriores como voluntário (opcional)"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400 text-gray-700 transition-all duration-200 sm:text-sm md:text-base"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition-colors duration-200 sm:text-sm md:text-base"
            >
              Enviar Cadastro
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}