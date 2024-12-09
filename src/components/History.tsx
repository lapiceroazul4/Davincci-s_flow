import React from 'react';
import { motion } from 'framer-motion';

const timelineEvents = [
  {
    year: "2020",
    title: "Los Inicios",
    description: "Todo comenzó en las calles de nuestra ciudad, donde la pasión por la música nos unió...",
    icon: "👁"
  },
  {
    year: "2021",
    title: "El Camino",
    description: "A través de los años, hemos evolucionado y crecido, manteniendo siempre nuestra esencia...",
    icon: "🫀"
  },
  {
    year: "2022",
    title: "Primer Álbum",
    description: "Lanzamos nuestro primer álbum, un hito que marcó el inicio de nuestra carrera profesional...",
    icon: "🧠"
  },
  {
    year: "2023",
    title: "Hoy",
    description: "Seguimos creando música que conecta con el corazón de nuestra gente...",
    icon: "🦉"
  }
];

const History = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black" id="history">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
        >
          Nuestra Historia
        </motion.h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 right-0 h-0.5 top-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full" />

          {/* Timeline Events */}
          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-6 pt-8">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* Year Circle */}
                <div className="absolute left-1/2 -translate-x-1/2 -top-6">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-xl shadow-lg"
                  >
                    {event.icon}
                  </motion.div>
                </div>

                {/* Year */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 p-4 rounded-lg shadow-xl mt-8 backdrop-blur-sm border border-gray-700/30"
                >
                  <div className="text-center">
                    <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                      {event.year}
                    </span>
                    <h3 className="text-lg font-bold text-white mt-2 mb-2">{event.title}</h3>
                    <p className="text-sm text-gray-300">{event.description}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;