import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Youtube } from 'lucide-react';

export default function SocialMediaButtons() {
  const socialLinks = {
    youtube: 'https://www.youtube.com/@IluminandoOfuturo',
    instagram: 'https://www.instagram.com/iluminando_o_futuro/', 
  };

  const socialIcons = [
    { icon: Youtube, label: 'Facebook', url: socialLinks.youtube },
    { icon: Instagram, label: 'Instagram', url: socialLinks.instagram },
  ];

  return (
    <div className="fixed bottom-6 left-6 flex flex-col gap-3 z-50">
      {socialIcons.map(({ icon: Icon, label, url }) => (
        <motion.a
          key={label}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex
            items-center
            justify-center
            w-10
            h-10
            sm:w-12
            sm:h-12
            rounded-full
            bg-gradient-to-r
            from-yellow-400
            to-yellow-500
            text-white
            shadow-lg
            hover:from-yellow-500
            hover:to-yellow-600
            focus:outline-none
            focus:ring-2
            focus:ring-yellow-300
            transition
            duration-300
            ease-in-out
          "
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label={`Visite nossa página no ${label}`}
        >
          <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
        </motion.a>
      ))}
    </div>
  );
}