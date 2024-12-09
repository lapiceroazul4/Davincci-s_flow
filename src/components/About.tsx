import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const members = [
  {
    name: "Juanka",
    role: "Bajista",
    image: "https://imgur.com/puCha8j.jpg",
    description: "Textico del Juanka, quedo todo lindo en esa foto, suban mas fotos así."
  },
  {
    name: "Yeico",
    role: "Pianista, Tecladista, Modelo, Actor, y todero",
    image: "https://imgur.com/253U0oM.jpg",
    description: "Textico del Yeico, pd: no me pasaron mas fotos"
  },
  {
    name: "Sofi",
    role: "Saxofonista",
    image: "https://imgur.com/nLmQfjM.jpg",
    description: "Creo que es Sofi, pd: no me pasaron mas fotos"
  },
  {
    name: "Ana",
    role: "Cantante",
    image: "https://imgur.com/86anzfp.jpg",
    description: "Textico de Ana, pd: no me pasaron mas fotos"
  },
  {
    name: "Daniel Lancheros",
    role: "Cantante",
    image: "https://imgur.com/eqTNkWL.jpg",
    description: "Tantas fotos por mandar y mandan esta donde ni se le ve la cara."
  },
  {
    name: "El bro de la bateria",
    role: "Bada dum tss",
    image: "https://imgur.com/CtuGlkW.jpg",
    description: "El que nos guía en cada canción."
  },
  {
    name: "Jose",
    role: "Guitarrista",
    image: "https://imgur.com/bfIDrCF.jpg",
    description: "Textico de Jose, pd: esta foto sí me gusto"
  },
  {
    name: "María José",
    role: "Corista",
    image: "https://images.unsplash.com/photo-1516959512470-53955cd40f40?auto=format&fit=crop&q=80",
    description: "Voz angelical que complementa y enriquece cada interpretación."
  },
  {
    name: "Fernando Torres",
    role: "Percusionista",
    image: "https://images.unsplash.com/photo-1504653601220-f1a8ece25e4a?auto=format&fit=crop&q=80",
    description: "Maestro de los ritmos latinos que da el toque distintivo a nuestra música."
  },
  {
    name: "Valentina Ruiz",
    role: "Trompetista",
    image: "https://images.unsplash.com/photo-1527853225197-325bb04d871f?auto=format&fit=crop&q=80",
    description: "El brillo y la potencia que corona nuestras melodías."
  }
];

const About = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900" id="about">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
        >
          Venga Pille Quienes Somos
        </motion.h2>
        
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="w-full py-12"
        >
          {members.map((member, index) => (
            <SwiperSlide key={index} className="w-[300px] sm:w-[350px]">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-2xl mx-auto"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-white">{member.name}</h3>
                  <p className="text-blue-400 mb-4 font-medium">{member.role}</p>
                  <p className="text-gray-300">{member.description}</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default About;