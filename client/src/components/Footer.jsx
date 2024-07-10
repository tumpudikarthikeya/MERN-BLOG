import React from 'react'
import {Link} from 'react-router-dom'
import { FaLinkedin, FaInstagram, FaWhatsapp,  } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";

const Footer = () => {
  return (
    <div className='flex items-center justify-center bg-black text-white pb-20 pt-12'>
            <div className='flex flex-col gap-5'>
                <div className='flex flex-col gap-3'>
                    {/*Branding*/}
                    <div className=''>
                    <p className='text-3xl'><span className='font-medium'>Karthikeya's</span> Blogs</p>
                </div>
                {/*Quick Links*/}
                <div className='flex  gap-3 justify-center'>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/projects">Projects</Link>
                </div>
                </div>
            {/*Social Links*/}
            <div className='flex text-2xl gap-5 justify-center'>
                <a href="https://www.linkedin.com/in/karthikeya-t/" target='_blank'>
                <FaLinkedin />
                </a>
                <a href="">
                <FaInstagram />
                </a>
                <a href="">
                <FaWhatsapp />
                </a>
                <a href="">
                <BiLogoGmail />
                </a>
            </div>
        </div>
    </div>
  )
}

export default Footer