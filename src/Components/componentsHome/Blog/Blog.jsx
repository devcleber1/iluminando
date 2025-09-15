import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BlogSection() {
  return (
    <section className="bg-white py-12 px-6 font-body">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-5xl font-title font-semibold text-yellow-500">
            Nosso Blog
          </h2>
          <p className="mt-4 text-gray-600 text-[18px] max-w-lg mx-auto">
            Em breve, traremos novidades, dicas e insights incríveis para você. Fique de olho!
          </p>
        </div>

        <div className="text-center mt-12">
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              to="/blog"
              className="
                inline-flex
                items-center
                justify-center
                max-w-xs
                w-full
                px-5
                py-5
                text-[16px]
                font-semibold
                text-white
                rounded-lg
                bg-gradient-to-r
                from-yellow-400
                to-yellow-500
                shadow-lg
                hover:from-yellow-500
                hover:to-yellow-600
                hover:scale-105
                active:scale-95
                transition
                duration-300
                ease-in-out
                cursor-pointer
                select-none
                mx-auto
                gap-2
              "
            >
              Saiba mais
              <motion.span className="inline-flex items-center transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight size={18} />
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}