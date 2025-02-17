import React from 'react'
import image from '../../public/Foto.jpg'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Home = () => {
    return (
        <div id='home' className='flex min-h-screen w-full items-center justify-center'>

            <div className='flex flex-col items-center justify-center gap-8 p-5 text-center'>
                <img src={image} alt="" className='w-[250px] h-[250px] rounded-full' />

                <div className='space-y-1 sm:space-y-3'>
                    <h1 className='bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-4xl font-semibold text-transparent md:text-5xl lg:text-6xl'>Hizbullah Sulthan Al Aziz</h1>
                    <h3 className='bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-4xl font-semibold text-transparent md:text-2xl lg:text-3xl'>Not a Robot</h3>
                    <h3 className='font-bold text-gray-600'>hizbullahsulthana@gmail.com || 085811800821</h3>
                    <p className=''>Fresh graduates of Informatics Engineering with skills in programming, system development,
                        and data analysis. Fast learner, solution oriented, and highly motivated
                        thrive in the world of work.</p>
                </div>

                <div className='flex gap-3'>
                    <a href="https://github.com/hslthnal/" target='_blank'><FaGithub className='h-10 w-10 cursor-pointer p-2 rounded-full border-2 border-transparent bg-red-600 text-white transition-all duration-200 hover:scale-110 hover:border-red-600 hover:bg-white hover:text-red-600' /></a>
                    <a href="https://www.linkedin.com/in/hslthnal/" target='_blank'><FaLinkedin className='h-10 w-10 cursor-pointer p-2 rounded-full border-2 border-transparent bg-red-600 text-white transition-all duration-200 hover:scale-110 hover:border-red-600 hover:bg-white hover:text-red-600' /></a>
                    <a href="https://www.instagram.com/hslthnall/" target='_blank'><FaInstagram className='h-10 w-10 cursor-pointer p-2 rounded-full border-2 border-transparent bg-red-600 text-white transition-all duration-200 hover:scale-110 hover:border-red-600 hover:bg-white hover:text-red-600' /></a>
                </div>
            </div>
        </div>
    )
}

export default Home
