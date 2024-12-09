import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface MemberCardProps {
  name: string;
  role: string;
  description: string;
  image: string;
  index: number;
}

const MemberCard: React.FC<MemberCardProps> = ({ name, role, description, image, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300"
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image}
          alt={name}
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-white">{name}</h3>
        <p className="text-blue-400 mb-4 font-medium">{role}</p>
        <p className="text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
};

export default MemberCard;