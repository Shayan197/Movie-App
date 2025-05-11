import React from 'react'
import { Link } from 'react-router-dom';
import { IoHome } from "react-icons/io5";
import { MdContacts } from "react-icons/md";
import { FaBook } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <hr className='border-neutral-400 w-2/3 mx-auto' />
      <div className='pt-10 pb-5'>
        <div className='flex justify-around items-center'>
          <Link to='/' className='text-3xl text-orange-400 tracking-wider font-bold'>MOIVEO</Link>
          <div className='flex flex-col gap-7 text-neutral-300'>
            <div className='flex gap-3 hover:text-white'>
              <button>
                <IoHome />
              </button>
              <Link to='/'>Home</Link>
            </div>
            <div className='flex gap-3 hover:text-white'>
              <button>
                <MdContacts />
              </button>
              <Link to='/'>About Us</Link>
            </div>
            <div className='flex gap-3 hover:text-white'>
              <button>
                <FaBook />
              </button>
              <Link to='/'>Contact Us</Link>
            </div>
          </div>
        </div>
        <p className='text-xs text-center text-neutral-400'>All the rights are reserved by @ShAYaN</p>
      </div>
    </footer>

  )
}

export default Footer;
