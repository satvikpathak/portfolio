import React from 'react'
import logo from '../assets/OIP-removebg-preview.png'
import { FaGithub, FaLinkedin} from 'react-icons/fa';
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

function Navbar() {
  return <nav className="mb-20 flex items-center justify-between py-6">
    <div className='flex flex-shrink-0 items-center'>
    <a href="#" style={{ textDecoration: 'none' }}>
      Satvik<span style={{ color: '#6B46C1' }}>{'{'}</span>Pathak<span style={{ color: '#6B46C1' }}>{'}'}</span>
    </a>

        {/* <img className='mx-2 w-10 h-auto' src={logo} alt="logo" /> */}
    </div>
    <div className='m-8 mr-0 flex items-center justify-center gap-4 text-2xl'>
    <a href="https://www.linkedin.com/in/satvik-pathak-601833331/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/satvikpathak" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://x.com/satvikpathak007" target="_blank" rel="noopener noreferrer">
          <FaSquareXTwitter />
        </a>
        <a href="https://leetcode.com/u/satvikpathak007/" target="_blank" rel="noopener noreferrer">
          <SiLeetcode />
        </a>
    </div>
  </nav>
}

export default Navbar