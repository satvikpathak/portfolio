import { CONTACT } from "../constants"
import {motion} from 'framer-motion'
import { FaEnvelope } from 'react-icons/fa'

const Contact = () => {
  return <div className="border-b border-neutral-900 pb-20">
    <motion.h2
    whileInView={{y:0, opacity:1}}
    initial={{y:-100, opacity:0}}
    transition={{duration:0.5}}
    className="my-10 text-center text-4xl">Get In Touch</motion.h2>
    <motion.div
    whileInView={{x:0, opacity:1}}
    initial={{x:-100, opacity:0}}
    transition={{duration:0.5}}
    className="text-center tracking-tighter">
        <a href="mailto:satvikpathak007@gmail.com" className="flex items-center justify-center gap-2 text-blue-500 border-b border-neutral-900">
          <FaEnvelope className="h-5 w-5" /> {CONTACT.email}
        </a>
    </motion.div>
  </div>
}

export default Contact