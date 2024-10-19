import React from 'react';
import { motion } from 'framer-motion';
import './style.css';

const AnimatedAvatar = () => {
    const handleClick = () => {
      alert('نزن!');
    };
  
    return (
        <motion.div
        className="avatar"
        animate={{ x: ['-10vw', '100vw'] }}
        transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
        onClick={handleClick}
      />
    );
  };
  
  export default AnimatedAvatar;