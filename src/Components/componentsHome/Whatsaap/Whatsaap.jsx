import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = '+5521968828026'; // Número fornecido
  const message = encodeURIComponent('Olá, tenho interesse em conhecer mais sobre os projetos e oficinas do Iluminando o Futuro. Como posso participar?');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        bottom-6
        right-6
        flex
        items-center
        gap-2
        px-4
        py-3
        sm:px-5
        sm:py-4
        rounded-full
        bg-gradient-to-r
        from-yellow-400
        to-yellow-500
        text-white
        font-menu
        font-semibold
        shadow-lg
        hover:from-yellow-500
        hover:to-yellow-600
        focus:outline-none
        focus:ring-2
        focus:ring-yellow-300
        transition
        duration-300
        ease-in-out
        z-50
        text-sm
        sm:text-base
      "
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Fale conosco pelo WhatsApp"
    >
      <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
      <span className="hidden sm:inline">Fale conosco</span>
    </motion.a>
  );
}