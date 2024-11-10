import { RiReactjsLine } from 'react-icons/ri';
import { SiHtml5 } from 'react-icons/si';
import { SiCss3 } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';
import { SiBootstrap } from 'react-icons/si';
import { SiNodedotjs } from 'react-icons/si';
import { SiGit } from 'react-icons/si';
import { SiGithub } from 'react-icons/si';
import { SiCplusplus } from 'react-icons/si';
import { SiC } from 'react-icons/si';
import { SiPython } from 'react-icons/si';
import { SiWordpress } from 'react-icons/si';
import { motion } from 'framer-motion';

const iconVariants = (duration) => ({
    initial: {y: -10, rotate: 0},
    animate: {
        y: [10, -10],
        rotate: [0, 10, -10, 0],
        transition: {
            repeat: Infinity,
            duration: duration,
            ease: 'linear',
            repeatType: 'reverse',
        }
    }
})

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <motion.h2 
        whileInView={{y: 0, opacity: 1}}
        initial={{y: -100, opacity: 0}}
        transition={{duration: 1.5}}
        className='my-20 text-center text-4xl'>
        🛠️ TECH AND TOOLS
      </motion.h2>
      <motion.div 
        whileInView={{x: 0, opacity: 1}}
        initial={{x: -100, opacity: 0}}
        transition={{duration: 1.5}}
        className='flex justify-center items-center gap-4 flex-wrap'>
        
        <motion.div 
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiHtml5 className='text-7xl text-orange-600' />
        </motion.div>

        <motion.div 
          variants={iconVariants(2.8)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiCss3 className='text-7xl text-blue-600' />
        </motion.div>

        <motion.div 
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiJavascript className='text-7xl text-yellow-500' />
        </motion.div>

        <motion.div 
          variants={iconVariants(3.2)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiTailwindcss className='text-7xl text-teal-400' />
        </motion.div>

        <motion.div 
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiBootstrap className='text-7xl text-purple-600' />
        </motion.div>

        <motion.div 
          variants={iconVariants(3.8)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'>
          <RiReactjsLine className='text-7xl text-cyan-400' />
        </motion.div>

        <motion.div 
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiNodedotjs className='text-7xl text-green-600' />
        </motion.div>

        <motion.div 
          variants={iconVariants(4.3)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiGit className='text-7xl text-red-600' />
        </motion.div>

        <motion.div 
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiGithub className='text-7xl text-black' />
        </motion.div>

        <motion.div 
          variants={iconVariants(4.8)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiCplusplus className='text-7xl text-blue-500' />
        </motion.div>

        <motion.div 
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiC className='text-7xl text-lightgreen-600' />
        </motion.div>

        <motion.div 
          variants={iconVariants(5.3)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiPython className='text-7xl text-blue-500' />
        </motion.div>

        <motion.div 
          variants={iconVariants(5.5)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiWordpress className='text-7xl text-blue-600' />
        </motion.div>

      </motion.div>
    </div>
  );
}

export default Technologies;
