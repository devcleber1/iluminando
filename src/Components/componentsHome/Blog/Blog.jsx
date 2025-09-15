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
        </div>
      </div>
    </section>
  );
}