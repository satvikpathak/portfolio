import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const WordAnimator = () => {
  const words = [
    'Aspiring Full Stack Developer',
    'Coding Enthusiast',
    'Open Source Contributor',
    'Cinephile',
    'Travel & Coffee',
  ];

  const [currentWord, setCurrentWord] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = 150;
    const deletingSpeed = 75;
    const pauseTime = 1000;

    const typeWord = () => {
      if (!isDeleting) {
        setCurrentWord((prev) => words[currentWordIndex].substring(0, prev.length + 1));

        if (currentWord.length + 1 === words[currentWordIndex].length) {
          setTimeout(() => {
            setIsDeleting(true);
          }, pauseTime);
        }
      } else {
        setCurrentWord((prev) => prev.slice(0, prev.length - 1));

        if (currentWord.length === 0) {
          setIsDeleting(false);
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length); // Go to the next word in the list
        }
      }
    };

    const timeout = setTimeout(typeWord, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentWord, isDeleting, currentWordIndex, words]);

  return (
    <motion.span
      variants={{
        visible: { opacity: 1, transition: { duration: 0.5 } },
        hidden: { opacity: 0 },
      }}
      initial="hidden"
      animate="visible"
      className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
    >
      {currentWord}
      <motion.span
        key={currentWordIndex}
        animate={{
          opacity: [0, 1, 0], 
          transition: { duration: 0.7, repeat: Infinity, repeatType: 'loop' },
        }}
        className="ml-1 text-white"
      >
        |
      </motion.span>
    </motion.span>
  );
};

export default WordAnimator;