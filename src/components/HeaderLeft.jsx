import React from 'react'

const HeaderLeft = () => {
  return (
    <div className='md:flex[1]'>
      <div className='min-h-screen top-0 hidden md:sticky md:flex items-center justify-center bg-red-600 text-white'>
        <ul className='flex flex-col gap-7'>
            {["home", "experience", "projects", "stack"].
            map((item)=>(
                <li key={item} className='flex items-center justify-start cursor-pointer font-medium transition-all duration-200 group sm:text-lg md:text-xl xl:text-3xl'>
                    <a href={`#${item}`} className='transition-all duration-200 hover:translate-x-3 mx-20'>{item}</a>
                </li>
            ))
            }
        </ul>
      </div>

      <div className='fixed left-0 right-0 top-0 z-10 flex justify-evenly bg-red-600 p-5 text-white md:hidden'>
        <a href="#home" className='flex flex-col items-center justify center'>
            
            <span className='text-xs'>Home</span>
        </a>

        <a href="#experience" className='flex flex-col items-center justify center'>
            
            <span className='text-xs'>Experience</span>
        </a>
        
        <a href="#projects" className='flex flex-col items-center justify center'>
           
            <span className='text-xs'>Projects</span>
        </a>

        <a href="#stack" className='flex flex-col items-center justify center'>
           
            <span className='text-xs'>Stack</span>
        </a>

      </div>
    </div>
  )
}

export default HeaderLeft
