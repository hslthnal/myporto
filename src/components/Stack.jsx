import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { FaFlutter } from "react-icons/fa6";
import { SiMysql } from "react-icons/si";

const Stack = () => {
    return (
        <div id='stack' className='min-h-screen w-full flex-col items-center justify-center gap-20 p-10 md:p-16 xl:px-32'>
            <h1 className='text-center text-5xl font-light'>Tech Stack</h1>

            <div className='flex items-center justify-center text-center gap-10 flex-wrap mt-20 mx-50'>
            <FaHtml5 className='h-50 w-50'/>
            <RiTailwindCssFill className='h-50 w-50'/>
            <FaReact className='h-50 w-50'/>
            <FaGolang className='h-50 w-50'/>
            <FaLaravel className='h-50 w-50'/>
            <FaFlutter className='h-50 w-50'/>
            <SiMysql className='h-50 w-50'/>
            </div>
        </div>
    )
}

export default Stack
