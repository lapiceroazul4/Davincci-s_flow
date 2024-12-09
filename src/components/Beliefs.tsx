import React from 'react';
import { motion } from 'framer-motion';

const Beliefs = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-900 to-black" id="beliefs">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
          >
            ¿En Qué Creemos?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 leading-relaxed"
          >
            En Davincci's Flow, creemos en el poder transformador de la música para unir culturas y corazones. 
            Nuestra misión es crear experiencias musicales auténticas que inspiren, conecten y muevan el alma.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Beliefs;