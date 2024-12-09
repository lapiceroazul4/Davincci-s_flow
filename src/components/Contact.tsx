import React from 'react';
import { Instagram, MessageCircle, Music2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const socialLinks = [
    {
      name: 'WhatsApp',
      icon: <MessageCircle className="w-5 h-5" />,
      href: 'https://wa.me/573107350919',
      className: 'from-green-500 to-emerald-600'
    },
    {
      name: 'Instagram',
      icon: <Instagram className="w-5 h-5" />,
      href: 'https://www.instagram.com/davincis__flow/',
      className: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Spotify',
      icon: <Music2 className="w-5 h-5" />,
      href: 'https://open.spotify.com/intl-es/artist/3zHGeMxNzukkd1y8Euqq0i?si=HkZ0DHd4R4CKJ-20WexC-Q',
      className: 'from-green-400 to-green-600'
    }
  ];

  return (
    <section className="py-20 bg-black" id="contact">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
        >
          Contáctanos
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-6">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 20px rgba(79, 209, 197, 0.3)"
              }}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 bg-gradient-to-r ${link.className} text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-2xl backdrop-blur-sm border border-white/10`}
            >
              {link.icon}
              <span className="font-medium text-sm uppercase tracking-wider">{link.name}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;